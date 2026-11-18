import type { Locale } from "@/lib/i18n/config";
import { en } from "./en";
import { es } from "./es";
import { pt, type Dict } from "./pt";

const dictionaries: Record<Locale, Dict> = { pt, en, es };

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
export type { Dict };
