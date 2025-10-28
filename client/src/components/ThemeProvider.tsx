"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {/* 🌗 Global theme background + text */}
      <div className="bg-white text-black dark:bg-[#0a0e17] dark:text-white transition-colors duration-500 min-h-screen">
        {children}
      </div>
    </NextThemesProvider>
  );
}
