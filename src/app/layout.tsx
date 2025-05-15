import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

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
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} font-sans bg-black text-white min-h-screen selection:bg-photo-accent-400/30 selection:text-white`}>
        <div className="fixed inset-0 bg-grain-pattern opacity-[0.03] pointer-events-none z-[1] mix-blend-overlay"></div>
        <header className="fixed w-full top-0 z-20 py-5 px-6 transition-all duration-300 bg-gradient-to-b from-black/90 to-black/0">
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" className="text-xl font-light tracking-[0.15em] hover:text-photo-accent-300 transition-colors">
              <span className="sr-only">Photography Portfolio</span>
              <span aria-hidden="true">PHOTOGRAPHY</span>
            </a>
            <ul className="flex space-x-10 text-sm tracking-wider uppercase">
              <li><a href="/gallery" className="opacity-80 hover:opacity-100 transition-opacity hover:text-photo-accent-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-photo-accent-400 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">Gallery</a></li>
              <li><a href="/about" className="opacity-80 hover:opacity-100 transition-opacity hover:text-photo-accent-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-photo-accent-400 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">About</a></li>
              <li><a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity hover:text-photo-accent-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-photo-accent-400 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="relative z-10">
          {children}
        </main>
        <footer className="bg-photo-gray-900 border-t border-white/5 py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg tracking-widest mb-4 text-photo-accent-300">PHOTOGRAPHY</h3>
              <p className="text-sm text-white/60 max-w-xs">
                Capturing moments that tell stories and evoke emotions through the lens.
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest mb-4 text-white/80">Navigation</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="/gallery" className="hover:text-photo-accent-300 transition-colors">Gallery</a></li>
                <li><a href="/about" className="hover:text-photo-accent-300 transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-photo-accent-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest mb-4 text-white/80">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-photo-accent-300 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-photo-accent-300 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-photo-accent-300 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-white/40 mt-6">&copy; {new Date().getFullYear()} Photography Portfolio</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
