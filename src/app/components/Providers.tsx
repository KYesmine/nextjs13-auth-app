"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

const theme = createTheme();

export default function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
