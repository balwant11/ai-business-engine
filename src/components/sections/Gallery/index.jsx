"use client";

import React from "react";
import EditorialGrid from "./variants/EditorialGrid";
import Masonry from "./variants/Masonry";
import Carousel from "./variants/Carousel";

const variants = {
  "editorial-grid": EditorialGrid,
  "masonry": Masonry,
  "carousel": Carousel
};

export default function Gallery({ variant = "editorial-grid", data = {}, config = {} }) {
  const gallery = data.gallery || config.images || [];
  
  if (!gallery || gallery.length === 0) return null;

  const Component = variants[variant] || EditorialGrid;
  return <Component gallery={gallery} />;
}
