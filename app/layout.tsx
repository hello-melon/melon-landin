import type React from "react";
import type { Metadata } from "next";
import { lufga } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melon - Health Insurance Made Simple",
  description: " Insurance, Reimagined for Africans Everywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans overflow-x-hidden ${lufga.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
