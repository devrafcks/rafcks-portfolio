/** Troca {chave} pelo valor: fill("Imagem {n} de {total}", { n: 1, total: 4 }). */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
