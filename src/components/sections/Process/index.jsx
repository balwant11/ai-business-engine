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

export default function Process({ variant = "timeline-editorial", business = {}, content = {} }) {
  const processList = content.process || [];

  if (!processList || processList.length === 0) return null;

  const Component = variants[variant] || TimelineEditorial;
  return <Component process={processList} />;
}
