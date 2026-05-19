"use client";

import React from "react";

export default function VerticalSteps({ process = [] }) {
  if (!process || process.length === 0) return null;

  return (
    <section className="py-20 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {process.map((step, i) => (
          <div key={i} className="flex gap-8 items-start border-b border-[var(--color-border)] pb-8">
            <span className="text-3xl font-heading font-black text-[var(--color-accent)]">{step.step}</span>
            <div>
              <h3 className="text-xl font-bold uppercase text-[var(--color-text-primary)] mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
