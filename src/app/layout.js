'use client'; // Add this at the top to make it a client component

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import FooterU from "./components/Footer/footerU";
import Loader from './components/Loading/Loading';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnimatePresence mode='wait'>
          {!isLoaded ? (
            <Loader onLoadComplete={() => setIsLoaded(true)} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col min-h-screen"
            >
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <FooterU />
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}