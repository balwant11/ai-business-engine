"use client";

import React from "react";
import TimelineEditorial from "./variants/TimelineEditorial";
import VerticalSteps from "./variants/VerticalSteps";
import ImageProcess from "./variants/ImageProcess";

const variants = {
  "timeline-editorial": TimelineEditorial,
  "vertical-steps": VerticalSteps,
  "image-process": ImageProcess
};

export default function Process({ variant = "timeline-editorial", data = {} }) {
  const process = data.process || [];

  if (!process || process.length === 0) return null;

  const Component = variants[variant] || TimelineEditorial;
  return <Component process={process} />;
}
