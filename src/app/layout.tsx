import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photography Portfolio",
  description: "A showcase of stunning photography work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <header className="fixed w-full top-0 z-10 py-4 px-6 bg-black/80 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" className="text-xl font-light tracking-wider">PHOTOGRAPHY</a>
            <ul className="flex space-x-8 text-sm font-light">
              <li><a href="/" className="opacity-80 hover:opacity-100 transition-opacity">Gallery</a></li>
              <li><a href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
