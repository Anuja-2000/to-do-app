'use client';
import { Inter } from 'next/font/google'
import { Theme, ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const inter = Inter({ subsets: ['latin'] })
const themeStyle:Theme = theme();

const metadata = {
  title: 'Welcome',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={themeStyle}>  
      <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
