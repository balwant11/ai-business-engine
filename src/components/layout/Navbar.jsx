"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ variant = "transparent-floating", data = {} }) {
  const { name } = data;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyles = 
    variant === "transparent-floating"
      ? `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-md py-4 border-b border-[var(--color-border)]" : "py-8 bg-transparent"}`
      : `sticky top-0 z-50 bg-[var(--color-bg-primary)] py-6 border-b border-[var(--color-border)]`;

  return (
    <nav className={navStyles}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-heading font-black tracking-tighter text-2xl text-[var(--color-text-primary)]">
          {name || "ATELIER"}
        </a>

        <div className="hidden md:flex space-x-10 text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--color-text-primary)]">
          <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">Legacy</a>
          <a href="#fabrics" className="hover:text-[var(--color-accent)] transition-colors">Catalog</a>
          <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Inquiry</a>
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="border border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)] uppercase tracking-[0.2em] text-[9px] font-bold px-6 py-3 transition-all duration-500 font-heading">
            Secure Slot
          </a>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[var(--color-text-primary)] focus:outline-none"
        >
          <span className="text-xs uppercase tracking-widest font-bold">{mobileMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] py-8 px-6 z-40"
          >
            <div className="flex flex-col space-y-6 text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--color-text-primary)]">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">Legacy</a>
              <a href="#fabrics" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">Catalog</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">Inquiry</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block border border-[var(--color-text-primary)] py-3 text-center uppercase tracking-[0.2em] text-[9px] font-bold font-heading">
                Secure Slot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
