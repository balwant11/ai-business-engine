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

export default function Stats({ variant = "luxury-grid", data = {} }) {
  const stats = data.stats || [];

  if (!stats || stats.length === 0) return null;

  const Component = variants[variant] || LuxuryGrid;
  return <Component stats={stats} />;
}
