import type { Locale } from "@/lib/i18n/config";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { pt, type Dict } from "./pt";

const dictionaries: Record<Locale, Dict> = { pt, en, es, fr, de, it };

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
export type { Dict };
