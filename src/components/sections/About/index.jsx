"use client";

import React from "react";
import SplitImage from "./variants/SplitImage";
import EditorialStory from "./variants/EditorialStory";
import MinimalBrand from "./variants/MinimalBrand";

const variants = {
  "split-image": SplitImage,
  "editorial-story": EditorialStory,
  "minimal-brand": MinimalBrand
};

export default function About({ variant = "split-image", data = {} }) {
  const Component = variants[variant] || SplitImage;
  return <Component data={data} />;
}
