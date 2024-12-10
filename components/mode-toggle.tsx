"use client";

import { useTheme } from "next-themes";
import { Icons } from "./ui/icons";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="rounded-full bg-black/5 p-3 dark:bg-white/5"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icons.moon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <Icons.sun className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </button>
  );
}
