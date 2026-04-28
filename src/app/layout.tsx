import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import NewsletterInput from "@/components/NewsletterInput";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stellar Market | Mobile Accessories",
  description: "Premium mobile accessories for tech enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Global Navbar */}
        <nav className="fixed top-0 w-full z-50 glass h-16 flex items-center px-8 justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">Stellar Market</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
            <Link href="/seller/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Sell</Link>
            <Link href="/auth/login" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              Login
            </Link>
          </div>
        </nav>

        <main className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-border/40 py-16 px-8 glass mt-auto">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">Stellar Market</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium mobile accessories for the modern lifestyle. Quality and design at your fingertips.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-primary font-semibold">Refund Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider">Connect</h4>
              <div className="flex gap-4">
                <Link href="https://linkedin.com/in/mohammed-mazharullah-muneeb" target="_blank" className="p-2 glass rounded-lg hover:text-primary transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link href="https://github.com/MohammedMuneeb" target="_blank" className="p-2 glass rounded-lg hover:text-primary transition-colors" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider">Newsletter</h4>
              <div className="flex gap-2">
                <NewsletterInput />
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-border/20 mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Stellar Market. Built by Mohammed Muneeb.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
