import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuxeStore — Premium Lifestyle E-Commerce",
  description: "Curating the world's most exceptional products for your modern lifestyle.",
};

import QueryProvider from "@/components/ui/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload the icon font stylesheet for faster first paint */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        {/* Set fonts-loaded class when icon font is ready — reveals icons everywhere (incl. Navbar) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.fonts.ready.then(function(){document.documentElement.classList.add('fonts-loaded');});`,
          }}
        />
      </head>
      <body className={`bg-background-light text-slate-900 font-display min-h-[100dvh] antialiased ${inter.className}`} suppressHydrationWarning>
        <QueryProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
