"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FullscreenFashion({ business = {}, content = {} }) {
  const heroContent = content.hero || {};
  const { name, email, phone, local_phone } = business;
  const tagline = heroContent.tagline || heroContent.title || "Crafting Excellence";
  const description = heroContent.description || heroContent.subtitle || "";
  
  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const contactLink = email 
    ? `mailto:${email}` 
    : (cleanedPhone ? `https://wa.me/${cleanedPhone}` : "#contact");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop')" 
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="uppercase text-xs tracking-[0.3em] text-[var(--color-accent)] font-heading mb-6 font-bold">Loom & Mill Immersive</span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-none mb-8">
            {name}
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-6 font-semibold leading-relaxed">
            {tagline}
          </p>
          {description && (
            <p className="text-sm sm:text-base opacity-75 max-w-xl mx-auto mb-12 font-light leading-relaxed">
              {description}
            </p>
          )}
          <a href={contactLink} className="bg-white text-black hover:bg-[var(--color-accent)] hover:text-white uppercase tracking-[0.25em] text-xs font-bold px-10 py-5 transition-all duration-500 font-heading">
            Review Capacities
          </a>
        </motion.div>
      </div>
    </section>
  );
}
