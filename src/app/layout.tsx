import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
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
        <header className="fixed w-full top-0 z-50 py-5 px-6 transition-all duration-300 backdrop-blur-md">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
          <nav className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
            <Link href="/" className="text-xl font-light tracking-[0.15em] hover:text-photo-accent-300 transition-colors group flex items-center">
              <span className="sr-only">Photography Portfolio</span>
              <span className="text-gradient-gold mr-2 opacity-90 group-hover:opacity-100">LENS</span>
              <span aria-hidden="true" className="transition-all duration-300">PHOTOGRAPHY</span>
              <span className="h-4 w-[1px] bg-photo-accent-300/30 mx-2"></span>
            </Link>
            <ul className="hidden md:flex space-x-10 text-sm tracking-wider uppercase">
              <li>
                <Link 
                  href="/gallery" 
                  className="opacity-80 hover:opacity-100 transition-opacity hover:text-photo-accent-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-photo-accent-400 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="opacity-80 hover:opacity-100 transition-opacity hover:text-photo-accent-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-photo-accent-400 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="opacity-80 hover:opacity-100 transition-opacity hover:text-photo-accent-300 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-photo-accent-400 after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
            
            <button className="md:hidden flex flex-col space-y-1.5 p-2 group" aria-label="Toggle menu">
              <span className="w-6 h-px bg-white group-hover:bg-photo-accent-300 transition-all duration-300"></span>
              <span className="w-6 h-px bg-white group-hover:bg-photo-accent-300 transition-all duration-300 delay-75"></span>
              <span className="w-6 h-px bg-white group-hover:bg-photo-accent-300 transition-all duration-300 delay-150"></span>
            </button>
          </nav>
        </header>
        <main className="relative z-10">
          {children}
        </main>
        <footer className="bg-photo-dark-975 border-t border-white/5 pt-16 pb-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10 mb-16">
              <div className="md:col-span-5">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl tracking-widest text-photo-accent-300 uppercase font-light">Lens Photography</h3>
                </div>
                <p className="text-sm text-white/60 max-w-md mb-6">
                  Capturing moments that tell stories and evoke emotions through the lens. Specializing in nature, portrait, urban and abstract photography.
                </p>
                <div className="flex space-x-6 mt-4">
                  <a href="#" className="text-white/60 hover:text-photo-accent-300 transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-white/60 hover:text-photo-accent-300 transition-colors" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white/60 hover:text-photo-accent-300 transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="md:col-span-3 md:col-start-7">
                <h4 className="text-sm uppercase tracking-widest mb-6 text-white/80 font-medium">Navigation</h4>
                <ul className="space-y-3 text-sm text-white/60">
                  <li><Link href="/gallery" className="hover:text-photo-accent-300 transition-colors inline-block py-1 btn-hover">Gallery</Link></li>
                  <li><a href="/about" className="hover:text-photo-accent-300 transition-colors inline-block py-1 btn-hover">About</a></li>
                  <li><a href="/contact" className="hover:text-photo-accent-300 transition-colors inline-block py-1 btn-hover">Contact</a></li>
                </ul>
              </div>

              <div className="md:col-span-3 md:col-start-10">
                <h4 className="text-sm uppercase tracking-widest mb-6 text-white/80 font-medium">Subscribe</h4>
                <p className="text-sm text-white/60 mb-4">Join our newsletter for updates and special offers.</p>
                <div className="flex mt-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/5 border border-white/10 px-3 py-2 text-sm w-full focus:outline-none focus:border-photo-accent-300/50 transition-colors" 
                  />
                  <button className="bg-photo-accent-300/80 hover:bg-photo-accent-300 transition-colors px-3 py-2 text-black text-sm whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-sm text-white/40">&copy; {new Date().getFullYear()} Lens Photography. All rights reserved.</p>
              <div className="flex space-x-6 text-xs text-white/40">
                <a href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-white/70 transition-colors">Terms of Service</a>
                <a href="/cookies-policy" className="hover:text-white/70 transition-colors">Cookies Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
