/**
 * Cena 3D do chapéu de palha, em three.js puro (sem fiber, sem modelos externos).
 * Tudo é procedural: o chapéu é uma superfície de revolução (LatheGeometry), a
 * palha é uma textura desenhada num canvas e serve de cor e de relevo, a faixa é
 * um cilindro aberto. Renderiza só quando está visível e a aba está ativa.
 */
import {
  ACESFilmicToneMapping,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  Group,
  HemisphereLight,
  LatheGeometry,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  TorusGeometry,
  Vector2,
  WebGLRenderer,
} from "three";

export type HatScene = {
  dispose: () => void;
  spin: () => void;
  /** fly: 0 parado na Hero, 1 voando pela página. land: 0 no ar, 1 pousado no B do footer. */
  setPhase: (fly: number, land: number) => void;
  /** Tamanho na tela em relação ao canvas: ajusta a resolução interna. */
  setScale: (scale: number) => void;
};

/**
 * Trama de palha trançada: fileiras em espinha de peixe (fibras inclinadas que
 * alternam de lado), cada fileira com um tom próprio, sulcos entre fileiras e
 * fibras soltas. A mesma imagem serve de cor e de relevo.
 */
function strawTexture() {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#e9b852";
  ctx.fillRect(0, 0, size, size);

  const rows = 32;
  const rowH = size / rows;
  const step = 14;
  for (let r = 0; r < rows; r++) {
    const y = r * rowH;
    const tone = 0.9 + Math.random() * 0.16;
    // fundo da fileira
    ctx.fillStyle = `rgb(${Math.round(236 * tone)}, ${Math.round(190 * tone)}, ${Math.round(88 * tone)})`;
    ctx.fillRect(0, y, size, rowH);
    // fibras inclinadas, metade para cada lado (espinha de peixe)
    for (let x = -step; x < size + step; x += step) {
      for (const side of [-1, 1]) {
        const light = 0.94 + Math.random() * 0.14;
        ctx.strokeStyle = `rgba(${Math.round(250 * light)}, ${Math.round(214 * light)}, ${Math.round(118 * light)}, 0.95)`;
        ctx.lineWidth = step * 0.55;
        ctx.lineCap = "round";
        const mid = y + rowH / 2;
        ctx.beginPath();
        ctx.moveTo(x, mid);
        ctx.lineTo(x + side * step * 0.75, mid + side * rowH * 0.32);
        ctx.stroke();
        // brilho fino no meio da fibra
        ctx.strokeStyle = "rgba(255, 244, 205, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, mid);
        ctx.lineTo(x + side * step * 0.7, mid + side * rowH * 0.3);
        ctx.stroke();
      }
    }
    // sulco entre fileiras
    ctx.fillStyle = "rgba(128, 82, 20, 0.45)";
    ctx.fillRect(0, y, size, 2.5);
  }
  // fibras soltas e manchas leves
  for (let i = 0; i < 1600; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    ctx.strokeStyle = `rgba(118, 74, 16, ${0.06 + Math.random() * 0.12})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 8 + Math.random() * 14, y + (Math.random() - 0.5) * 3);
    ctx.stroke();
  }
  const texture = new CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(14, 1.7);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

/** Sombra macia no chão, sem shadow map. */
function shadowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 64);
  g.addColorStop(0, "rgba(43,30,32,0.4)");
  g.addColorStop(0.5, "rgba(43,30,32,0.12)");
  g.addColorStop(1, "rgba(43,30,32,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new CanvasTexture(canvas);
}

/** Perfil (raio, altura) girado em volta do eixo Y: copa em domo + aba larga com leve caimento. */
function hatProfile() {
  const p: [number, number][] = [
    [0.001, 0.98], [0.2, 0.975], [0.38, 0.94], [0.52, 0.87], [0.63, 0.76], [0.71, 0.6], [0.755, 0.42], [0.775, 0.26], [0.79, 0.13],
    // encontro copa-aba
    [0.84, 0.1], [0.98, 0.085],
    // aba (parte de cima), caindo um pouco na borda
    [1.15, 0.07], [1.32, 0.045], [1.48, 0.005], [1.6, -0.05], [1.66, -0.095],
    // borda arredondada
    [1.665, -0.12], [1.64, -0.135],
    // parte de baixo da aba, voltando
    [1.48, -0.085], [1.3, -0.04], [1.1, -0.015], [0.9, 0.0], [0.8, 0.0],
  ];
  return p.map(([x, y]) => new Vector2(x, y));
}

export function createHatScene(host: HTMLElement, { reduceMotion }: { reduceMotion: boolean }): HatScene {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  // celular: resolução um pouco menor, economiza GPU e bateria sem perder nitidez visível
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.5 : 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.display = "block";
  host.appendChild(renderer.domElement);

  const scene = new Scene();
  // enquadra com folga: o chapéu ocupa ~65% da largura, então nada encosta na borda do canvas
  const camera = new PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 2.6, 8.9);
  camera.lookAt(0, 0.12, 0);

  // luz: céu quente, chão tinta, principal dourada e contraluz laranja (as cores do site)
  scene.add(new HemisphereLight(0xfff3d6, 0x2b1e20, 1.15));
  const key = new DirectionalLight(0xffe1a3, 2.6);
  key.position.set(2.6, 4.2, 3.2);
  scene.add(key);
  const rim = new DirectionalLight(0xff7f1a, 2.2);
  rim.position.set(-3.2, 1.2, -2.8);
  scene.add(rim);
  const fill = new DirectionalLight(0xfff8ec, 0.5);
  fill.position.set(-2, 0.5, 3);
  scene.add(fill);

  const straw = strawTexture();
  const hatMaterial = new MeshPhysicalMaterial({
    map: straw,
    bumpMap: straw,
    bumpScale: 1.4,
    roughness: 0.78,
    metalness: 0,
    sheen: 0.6,
    sheenRoughness: 0.5,
    sheenColor: new Color(0xfff0c2),
    side: DoubleSide,
  });

  const hat = new Group();
  const geometry = new LatheGeometry(hatProfile(), 160);
  // aba viva: ondula de leve e a borda não é um círculo perfeito
  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const r = Math.hypot(x, z);
    if (r < 0.95) continue;
    const angle = Math.atan2(z, x);
    const k = (r - 0.95) / 0.72; // 0 no encontro com a copa, 1 na borda
    const wave = Math.sin(angle * 3 + 0.6) * 0.045 + Math.sin(angle * 7) * 0.012;
    pos.setY(i, pos.getY(i) + wave * k * k);
    const fray = 1 + (Math.sin(angle * 23) * 0.006 + Math.sin(angle * 57) * 0.004) * k;
    pos.setX(i, x * fray);
    pos.setZ(i, z * fray);
  }
  geometry.computeVertexNormals();
  const body = new Mesh(geometry, hatMaterial);
  hat.add(body);

  // fios de palha soltos na borda da aba
  const strandGeometry = new CylinderGeometry(0.006, 0.004, 1, 5);
  for (let i = 0; i < 26; i++) {
    const angle = (i / 26) * Math.PI * 2 + Math.random() * 0.2;
    const length = 0.06 + Math.random() * 0.12;
    const strand = new Mesh(strandGeometry, hatMaterial);
    strand.scale.set(1, length, 1);
    const r = 1.64 + length / 2 - 0.02;
    strand.position.set(Math.cos(angle) * r, -0.1 + Math.sin(angle * 3 + 0.6) * 0.045, Math.sin(angle) * r);
    // aponta para fora, com um desvio aleatório
    strand.rotation.set(0, -angle, Math.PI / 2 + (Math.random() - 0.5) * 0.5);
    hat.add(strand);
  }

  // faixa vermelha (cilindro aberto acompanhando a base da copa) + debruns
  const bandMaterial = new MeshPhysicalMaterial({ color: 0xc8322a, roughness: 0.5, metalness: 0, sheen: 0.8, sheenRoughness: 0.4, sheenColor: new Color(0xff8a6a), side: DoubleSide });
  const band = new Mesh(new CylinderGeometry(0.772, 0.794, 0.2, 96, 1, true), bandMaterial);
  band.position.y = 0.225;
  hat.add(band);
  const trimMaterial = new MeshStandardMaterial({ color: 0x8f1d16, roughness: 0.6 });
  const trimTop = new Mesh(new TorusGeometry(0.773, 0.012, 8, 96), trimMaterial);
  trimTop.rotation.x = Math.PI / 2;
  trimTop.position.y = 0.325;
  const trimBottom = trimTop.clone();
  trimBottom.position.y = 0.127;
  trimBottom.scale.setScalar(1.028);
  hat.add(trimTop, trimBottom);

  hat.rotation.x = 0.22;
  scene.add(hat);

  const shadow = new Mesh(
    new PlaneGeometry(2.6, 2.6),
    new MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.85;
  scene.add(shadow);

  // tamanho
  const resize = () => {
    // clientWidth ignora o scale do transform da camada que viaja
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(host);

  // resolução interna segue o tamanho visível do chapéu (em degraus, para não recriar o buffer toda hora)
  const baseRatio = Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.5 : 2);
  let currentRatio = renderer.getPixelRatio();
  const setScale = (scale: number) => {
    const wanted = Math.min(3.5, Math.max(0.6, baseRatio * scale));
    const stepped = Math.round(wanted * 4) / 4;
    if (Math.abs(stepped - currentRatio) < 0.24) return;
    currentRatio = stepped;
    renderer.setPixelRatio(stepped);
    resize();
  };

  // mouse: inclinação suave; clique: um giro
  let targetX = 0;
  let targetY = 0;
  let spinBoost = 0;
  const fine = window.matchMedia("(pointer: fine)").matches;
  const onMove = (event: PointerEvent) => {
    targetX = event.clientX / window.innerWidth - 0.5;
    targetY = event.clientY / window.innerHeight - 0.5;
  };
  if (fine && !reduceMotion) window.addEventListener("pointermove", onMove, { passive: true });

  // só renderiza visível e com a aba ativa
  let visible = true;
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
  });
  io.observe(host);
  const onVisibility = () => document.visibilityState === "visible" && start();
  document.addEventListener("visibilitychange", onVisibility);

  let frame = 0;
  let last = performance.now();
  let t = 0;
  let tiltX = 0;
  let tiltY = 0;
  let fly = 0;
  let land = 0;

  const draw = () => {
    renderer.render(scene, camera);
  };

  const tick = (now: number) => {
    frame = 0;
    if (!visible || document.visibilityState !== "visible") return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    t += dt;

    tiltX = MathUtils.damp(tiltX, targetY * 0.5, 4, dt);
    tiltY = MathUtils.damp(tiltY, targetX * 0.9, 4, dt);
    spinBoost = MathUtils.damp(spinBoost, 0, 1.6, dt);

    const air = 1 - land;
    // gira mais rápido voando; pousado, assenta de frente com um leve tombo para o lado
    if (land > 0.6) {
      const facing = Math.round((hat.rotation.y - 0.5) / (Math.PI * 2)) * Math.PI * 2 + 0.5;
      hat.rotation.y = MathUtils.damp(hat.rotation.y, facing, 3, dt);
    } else {
      hat.rotation.y += dt * (0.35 + fly * 2.4 + spinBoost * 9);
    }
    hat.rotation.x = 0.22 + (tiltX + Math.sin(t * 0.9) * 0.04) * air + fly * Math.sin(t * 2.1) * 0.12 - land * 0.1;
    hat.rotation.z = (Math.sin(t * 0.7) * 0.05 - tiltY * 0.15) * air + fly * Math.sin(t * 1.7) * 0.18 - land * 0.16;
    hat.position.x = tiltY * 0.25 * air;
    hat.position.y = Math.sin(t * 1.1) * 0.08 * air;

    const lift = (hat.position.y + 0.08) / 0.16; // 0..1
    shadow.scale.setScalar(1 - lift * 0.12);
    // sombra só no chão da Hero; voando ou pousado ela some
    (shadow.material as MeshBasicMaterial).opacity = (1 - lift * 0.35) * (1 - Math.max(fly, land));

    draw();
    frame = requestAnimationFrame(tick);
  };

  function start() {
    if (reduceMotion) {
      draw();
      return;
    }
    if (frame) return;
    last = performance.now();
    frame = requestAnimationFrame(tick);
  }

  start();

  return {
    spin: () => {
      if (!reduceMotion) spinBoost = 1;
    },
    setScale,
    setPhase: (nextFly, nextLand) => {
      fly = nextFly;
      land = nextLand;
    },
    dispose: () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      scene.traverse((object) => {
        const mesh = object as Mesh;
        mesh.geometry?.dispose();
        const material = mesh.material as MeshStandardMaterial | undefined;
        material?.map?.dispose();
        material?.dispose?.();
      });
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
