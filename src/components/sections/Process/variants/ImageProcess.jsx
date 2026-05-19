"use client";

import React from "react";

export default function ImageProcess({ process = [] }) {
  if (!process || process.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {process.slice(0, 2).map((step, i) => (
          <div key={i} className="border border-[var(--color-border)] p-8">
            <div className="aspect-[16/10] bg-neutral-200 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop" 
                alt={step.title}
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
            <h3 className="text-lg font-heading font-black uppercase text-[var(--color-text-primary)] mb-2">
              {step.step}. {step.title}
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] font-body leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
