"use client";

import React from "react";
import FabricCards from "./variants/FabricCards";

const variants = {
  "fabric-cards": FabricCards
};

export default function Fabrics({ variant = "fabric-cards", data = {} }) {
  const fabrics = data.fabrics || [];
  
  if (!fabrics || fabrics.length === 0) return null;

  const Component = variants[variant] || FabricCards;
  return <Component fabrics={fabrics} />;
}
