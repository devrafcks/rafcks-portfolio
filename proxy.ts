import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

/**
 * Português mora na raiz ("/"), sem prefixo; inglês e espanhol em /en e /es.
 * - "/pt/..." redireciona para a versão sem prefixo (uma URL por página para o Google).
 * - O resto sem prefixo é servido pela rota /pt por dentro (rewrite), sem mudar a URL.
 * A raiz é sempre português: nada de redirecionar pelo idioma salvo, que fazia o botão
 * PT voltar para o inglês quando a página era recarregada.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  // imagens de compartilhamento geradas pelo Next: passam direto, sem redirecionar
  if (/\/(opengraph|twitter)-image(\/|$)/.test(pathname)) return NextResponse.next();

  if (first === defaultLocale) {
    const rest = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(new URL(`${rest}${search}`, request.url), 308);
  }

  if (isLocale(first)) return NextResponse.next();

  return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}${search}`, request.url));
}

export const config = {
  // tudo menos API, arquivos internos do Next e arquivos com extensão (imagens, sw.js, manifest...)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
