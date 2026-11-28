const CJK = "\\u3040-\\u30ff\\u3400-\\u9fff\\uf900-\\ufaff";
// um ideograma (com a pontuação que fecha junto) ou um trecho sem ideogramas
const unit = new RegExp(`[${CJK}][、。，．！？：；」』）】]*|[^${CJK}]+`, "g");

export type WordToken = { text: string; space: boolean };

/**
 * Quebra um texto em "palavras" para as animações palavra por palavra.
 * Em japonês e chinês não há espaço entre palavras: ali cada ideograma vira uma
 * unidade, para a linha continuar quebrando normalmente. `space` diz se havia
 * um espaço depois da unidade no texto original.
 */
export function splitWords(text: string): WordToken[] {
  const tokens: WordToken[] = [];
  const chunks = text.split(" ").filter(Boolean);
  chunks.forEach((chunk, chunkIndex) => {
    const parts = chunk.match(unit) ?? [chunk];
    parts.forEach((part, partIndex) => {
      tokens.push({ text: part, space: partIndex === parts.length - 1 && chunkIndex < chunks.length - 1 });
    });
  });
  return tokens;
}
