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

export default function Reviews({ variant = "stacked-cards", business = {}, content = {} }) {
  let reviewsList = Array.isArray(content.reviews) ? content.reviews : [];

  if (reviewsList.length === 0 && Array.isArray(business.reviews)) {
    reviewsList = business.reviews.map(r => ({
      quote: r.review,
      author: r.author_name,
      role: r.time_ago || "Verified Customer"
    }));
  }
  
  if (reviewsList.length === 0) return null;

  const Component = variants[variant] || StackedCards;
  return <Component testimonials={reviewsList} />;
}
