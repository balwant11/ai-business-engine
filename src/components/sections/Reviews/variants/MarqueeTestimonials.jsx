"use client";

import React from "react";

export default function MarqueeTestimonials({ testimonials = [] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-16 bg-black text-white overflow-hidden border-b border-[var(--color-border)]">
      <div className="flex space-x-12 animate-marquee whitespace-nowrap">
        {testimonials.map((item, i) => (
          <div key={i} className="inline-block max-w-lg whitespace-normal bg-neutral-900 p-8 border border-neutral-800">
            <p className="text-sm text-neutral-300 italic mb-4">"{item.quote}"</p>
            <span className="block text-xs font-bold text-white">{item.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
