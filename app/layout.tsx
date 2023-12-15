import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#1e88e5",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          logoPlacement: "none",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="gamehub-key"
          >
            <aside>
              <Toaster theme="light" position="bottom-center" />
            </aside>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
