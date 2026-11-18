import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, locales } from "@/lib/i18n/config";

/**
 * Português mora na raiz ("/"), sem prefixo; inglês e espanhol em /en e /es.
 * - "/pt/..." redireciona para a versão sem prefixo (uma URL por página para o Google).
 * - Na raiz, quem já escolheu outro idioma (cookie) vai direto para ele.
 * - O resto sem prefixo é servido pela rota /pt por dentro (rewrite), sem mudar a URL.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (first === defaultLocale) {
    const rest = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(new URL(`${rest}${search}`, request.url), 308);
  }

  if (isLocale(first)) return NextResponse.next();

  if (pathname === "/") {
    const saved = request.cookies.get(LOCALE_COOKIE)?.value;
    if (saved && saved !== defaultLocale && (locales as readonly string[]).includes(saved)) {
      return NextResponse.redirect(new URL(`/${saved}${search}`, request.url), 307);
    }
  }

  return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}${search}`, request.url));
}

export const config = {
  // tudo menos API, arquivos internos do Next e arquivos com extensão (imagens, sw.js, manifest...)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
