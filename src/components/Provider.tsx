"use client";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export default function Provider({children}: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">{children}</ThemeProvider>
  )
}
