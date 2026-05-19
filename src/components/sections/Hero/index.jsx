"use client";

import React from "react";
import EditorialSplit from "./variants/EditorialSplit";
import FullscreenFashion from "./variants/FullscreenFashion";
import MinimalDark from "./variants/MinimalDark";

const variants = {
  "editorial-split": EditorialSplit,
  "fullscreen-fashion": FullscreenFashion,
  "minimal-dark": MinimalDark
};

export default function Hero({ variant = "editorial-split", data = {} }) {
  const Component = variants[variant] || EditorialSplit;
  return <Component data={data} />;
}
