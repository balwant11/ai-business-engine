"use client";

import React from "react";
import FabricCards from "./variants/FabricCards";

const variants = {
  "fabric-cards": FabricCards
};

export default function Fabrics({ variant = "fabric-cards", business = {}, content = {} }) {
  const fabricsList = Array.isArray(content.fabrics) ? content.fabrics : [];
  
  if (fabricsList.length === 0) return null;

  const Component = variants[variant] || FabricCards;
  return <Component fabrics={fabricsList} />;
}
