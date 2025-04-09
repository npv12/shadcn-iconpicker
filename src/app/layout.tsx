import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import ogImage from "@/public/og-image.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn Icon Picker - Beautiful Icon Selection Component",
  description: "A modern, accessible, and customizable icon picker component built with Shadcn UI, Lucide React and Tanstack Virtual. Perfect for React applications needing a beautiful icon selection interface.",
  keywords: ["shadcn", "icon picker", "react component", "ui component", "icon selection", "next.js", "typescript", "tanstack virtual", "lucide react", "fuse.js"],
  authors: [{ name: "Alan Courtois", url: "https://github.com/alan-crts" }],
  openGraph: {
    title: "Shadcn Icon Picker",
    description: "A modern, accessible, and customizable icon picker component built with Shadcn UI, Lucide React and Tanstack Virtual.",
    type: "website",
    url: "https://icon-picker.alan-courtois.fr",
    siteName: "Shadcn Icon Picker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn Icon Picker",
    description: "A modern, accessible, and customizable icon picker component built with Shadcn UI, Lucide React and Tanstack Virtual.",
    images: [ogImage.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
