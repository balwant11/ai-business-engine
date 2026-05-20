"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ variant = "transparent-floating", data = {}, sections = [] }) {
  const { name, email, phone, local_phone } = data;
  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const contactLink = email 
    ? `mailto:${email}` 
    : (cleanedPhone ? `https://wa.me/${cleanedPhone}` : "#contact");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SECTION_LABELS = {
    about: "About",
    fabrics: "Fabrics",
    process: "Process",
    gallery: "Gallery",
    stats: "Stats",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Contact"
  };

  const navLinks = (sections || [])
    .map(section => {
      const type = section.type?.toLowerCase();
      if (SECTION_LABELS[type]) {
        return {
          id: `#${type}`,
          label: SECTION_LABELS[type]
        };
      }
      return null;
    })
    .filter(Boolean);

  const fallbackLinks = [
    { id: "#about", label: "About" },
    { id: "#fabrics", label: "Fabrics" },
    { id: "#contact", label: "Contact" }
  ];

  const linksToRender = navLinks.length > 0 ? navLinks : fallbackLinks;

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
          {linksToRender.map((link) => (
            <a key={link.id} href={link.id} className="hover:text-[var(--color-accent)] transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href={contactLink} className="border border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)] uppercase tracking-[0.2em] text-[9px] font-bold px-6 py-3 transition-all duration-500 font-heading">
            Connect
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
              {linksToRender.map((link) => (
                <a key={link.id} href={link.id} onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">
                  {link.label}
                </a>
              ))}
              <a href={contactLink} onClick={() => setMobileMenuOpen(false)} className="inline-block border border-[var(--color-text-primary)] py-3 text-center uppercase tracking-[0.2em] text-[9px] font-bold font-heading">
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
