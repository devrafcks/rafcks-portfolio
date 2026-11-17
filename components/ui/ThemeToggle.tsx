"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  const dark = ready && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={dark}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="grid size-10 place-items-center text-ink dark:text-white"
    >
      {dark ? <IconSun size={22} stroke={1.75} /> : <IconMoon size={22} stroke={1.75} />}
    </button>
  );
}
