"use client";

import React from "react";

export default function DarkContact({ business = {} }) {
  const { email, phone, address } = business;

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-800 pt-16">
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-4">Address</span>
          <p className="text-sm leading-relaxed text-neutral-300 font-body">{address}</p>
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-4">Inquiries</span>
          <p className="text-sm text-neutral-300 font-body">{email}</p>
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-4">Phone Desk</span>
          <p className="text-sm text-neutral-300 font-body">{phone}</p>
        </div>
      </div>
    </section>
  );
}
