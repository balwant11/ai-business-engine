"use client";

import React from "react";
import LuxuryGrid from "./variants/LuxuryGrid";
import MinimalNumbers from "./variants/MinimalNumbers";
import SplitMetrics from "./variants/SplitMetrics";

const variants = {
  "luxury-grid": LuxuryGrid,
  "minimal-numbers": MinimalNumbers,
  "split-metrics": SplitMetrics
};

export default function Stats({ variant = "luxury-grid", business = {}, content = {} }) {
  const statsList = content.stats || [];

  if (!statsList || statsList.length === 0) return null;

  const Component = variants[variant] || LuxuryGrid;
  return <Component stats={statsList} />;
}
