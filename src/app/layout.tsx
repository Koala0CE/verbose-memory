import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });
import { UserProvider } from "@auth0/nextjs-auth0/client";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MemoryGlobe",
  description: "Personal Timeline Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={playfair.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
