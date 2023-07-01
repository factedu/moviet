"use client"

import * as React from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({
    children,
    ...props
}: ThemeProviderProps): React.JSX.Element {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}