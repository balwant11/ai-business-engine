"use client";

import React from "react";

export default function MinimalContact({ business = {} }) {
  const { email, phone, full_address, address } = business;
  const contactAddress = full_address || address;

  return (
    <section id="contact" className="py-20 bg-[var(--color-bg-secondary)] text-center">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-accent)] font-heading mb-4">Direct Contact</h2>
        <div className="space-y-4 text-lg font-heading text-[var(--color-text-primary)]">
          {email && <p>{email}</p>}
          {phone && <p>{phone}</p>}
          {contactAddress && <p className="text-sm font-body text-[var(--color-text-muted)] mt-2">{contactAddress}</p>}
        </div>
      </div>
    </section>
  );
}
