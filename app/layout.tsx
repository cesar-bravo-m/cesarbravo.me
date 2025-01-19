import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Github } from 'lucide-react';
import Bluesky from "./components/Bluesky";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "César Bravo",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-gray-950 text-gray-100`}>
        <div className="max-w-5xl mx-auto px-4 py-8">
          <header className="mb-12">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
                César Bravo
              </Link>
              <div className="flex items-center gap-8">
                <div className="flex gap-6">
                  <Link href="/apps" className="hover:text-blue-400 transition-colors">
                    Apps
                  </Link>
                  {/* <Link href="/experiments" className="hover:text-blue-400 transition-colors">
                    Experiments
                  </Link> */}
                  {/* <Link href="/poetry" className="hover:text-blue-400 transition-colors">
                    Poetry
                  </Link> */}
                  <Link href="/blog" className="hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/cesar-bravo-m" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} fill="white" />
                  </a>
                  <a 
                    href="https://bsky.app/profile/cesarbravo.me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Bluesky size={20} />
                  </a>
                </div>
              </div>
            </nav>
          </header>
          <main className="min-h-[70vh]">
            {children}
          </main>
          <footer className="mt-16 pt-8 border-t border-gray-800 text-gray-400 text-center">
            <p>© 2025 César Bravo. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
