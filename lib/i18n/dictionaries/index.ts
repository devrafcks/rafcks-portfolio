import type { Locale } from "@/lib/i18n/config";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { ja } from "./ja";
import { ko } from "./ko";
import { nl } from "./nl";
import { pt, type Dict } from "./pt";
import { ru } from "./ru";
import { zh } from "./zh";

const dictionaries: Record<Locale, Dict> = { pt, en, es, fr, de, it, ja, zh, ko, ru, nl };

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
export type { Dict };
