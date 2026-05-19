"use client";

import React from "react";
import FabricCards from "./variants/FabricCards";

const variants = {
  "fabric-cards": FabricCards
};

export default function Fabrics({ variant = "fabric-cards", business = {}, content = {} }) {
  const fabricsList = content.fabrics || [];
  
  if (!fabricsList || fabricsList.length === 0) return null;

  const Component = variants[variant] || FabricCards;
  return <Component fabrics={fabricsList} />;
}
