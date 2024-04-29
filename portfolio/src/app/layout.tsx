'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import useSEO from "./_hooks/useSEO";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useSEO({
    title: 'Full-Stack Developer Portfolio',
    description: 'Portfolio of Full-Stack Developer Žak Bršek',
    canonical: 'https://skurjen.si',
    ogTitle: 'Full-Stack Developer Portfolio',
    ogDescription: 'Portfolio of Full-Stack Developer Žak Bršek',
    //ogImage: 'https://example.com/og-image.jpg',
    ogUrl: 'https://skurjen.si',
  });
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
