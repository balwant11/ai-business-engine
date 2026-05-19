"use client";

import React from "react";
import StackedCards from "./variants/StackedCards";
import EditorialQuotes from "./variants/EditorialQuotes";
import MarqueeTestimonials from "./variants/MarqueeTestimonials";

const variants = {
  "stacked-cards": StackedCards,
  "editorial-quotes": EditorialQuotes,
  "marquee-testimonials": MarqueeTestimonials
};

export default function Reviews({ variant = "stacked-cards", data = {} }) {
  const testimonials = data.testimonials || [];
  
  if (!testimonials || testimonials.length === 0) return null;

  const Component = variants[variant] || StackedCards;
  return <Component testimonials={testimonials} />;
}
