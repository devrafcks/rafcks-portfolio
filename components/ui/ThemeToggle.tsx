"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  const dark = ready && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={dark ? t.nav.themeToLight : t.nav.themeToDark}
      aria-pressed={dark}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="grid size-10 place-items-center text-ink dark:text-white"
    >
      {dark ? <IconSun size={22} stroke={1.75} /> : <IconMoon size={22} stroke={1.75} />}
    </button>
  );
}
