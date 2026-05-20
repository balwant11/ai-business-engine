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

export default function Gallery({ variant = "editorial-grid", business = {}, content = {} }) {
  let galleryList = Array.isArray(content.gallery) ? content.gallery : [];
  
  if (galleryList.length === 0 && Array.isArray(business.photos)) {
    galleryList = business.photos.map(p => ({
      url: p.photo_url,
      title: business.name || "Gallery Showcase",
      category: "Showcase"
    }));
  }

  if (galleryList.length === 0) return null;

  const Component = variants[variant] || EditorialGrid;
  return <Component gallery={galleryList} />;
}
