"use client";

import React from "react";

export default function Footer({ variant = "editorial-footer", data = {} }) {
  const { name, email, phone, address, yearEstablished } = data;

  return (
    <footer className="bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border-t border-[var(--color-border)] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="font-heading font-black tracking-tighter text-3xl mb-4">{name || "ATELIER"}</h3>
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium">Est. {yearEstablished} / Precision Manufacturing</p>
          </div>
          <p className="text-[10px] text-[var(--color-text-muted)] tracking-wider mt-12 font-body lg:block hidden">
            © {new Date().getFullYear()} {name}. Architected with Conscious Sourcing Controls.
          </p>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)] font-bold">Logistics Desk</h4>
          <p className="text-xs leading-relaxed text-[var(--color-text-muted)] font-body">{address}</p>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)] font-bold">Secure Access</h4>
          <div className="flex flex-col space-y-2 text-xs text-[var(--color-text-primary)] font-body">
            <span>T: {phone}</span>
            <span>E: {email}</span>
          </div>
        </div>

        <div className="lg:col-span-12 block lg:hidden border-t border-[var(--color-border)] pt-8 mt-4">
          <p className="text-[10px] text-[var(--color-text-muted)] tracking-wider font-body">
            © {new Date().getFullYear()} {name}. Architected with Conscious Sourcing Controls.
          </p>
        </div>
      </div>
    </footer>
  );
}
