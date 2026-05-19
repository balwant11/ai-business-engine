"use client";

import React from "react";

export default function MinimalContact({ data = {} }) {
  const { email, phone } = data;

  return (
    <section className="py-20 bg-[var(--color-bg-secondary)] text-center">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-accent)] font-heading mb-4">Direct Contact</h2>
        <div className="space-y-4 text-lg font-heading text-[var(--color-text-primary)]">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </section>
  );
}
