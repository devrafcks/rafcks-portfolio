const CACHE = "rafael-blanco-v4";
const PRECACHE = ["/", "/en", "/es", "/offline", "/manifest.webmanifest", "/icon-192.png", "/icon-512.png", "/icon-maskable-192.png", "/icon-maskable-512.png", "/apple-touch-icon.png", "/icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate" || isCode(url.pathname)) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isStaticAsset(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request));
  }
});

function isCode(pathname) {
  return pathname.startsWith("/_next/static/") && /\.(?:css|js)$/.test(pathname);
}

function isStaticAsset(pathname) {
  return (
    pathname.startsWith("/images/") ||
    pathname.startsWith("/splash/") ||
    pathname.startsWith("/pwa/") ||
    /\.(?:png|webp|svg|ico|woff2|jpg|jpeg)$/.test(pathname)
  );
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.ok && response.type === "basic") cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    if (request.mode === "navigate") {
      const offline = await cache.match("/offline");
      if (offline) return offline;
    }
    return new Response("Offline", { status: 503 });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response.ok && response.type === "basic") cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);
  return cached || network;
}
