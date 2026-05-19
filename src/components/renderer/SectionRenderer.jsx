"use client";

import React from "react";
import { sectionRegistry } from "./sectionRegistry";

export default function SectionRenderer({ sections = [], businessData = {} }) {
  if (!Array.isArray(sections)) return null;

  return (
    <>
      {sections.map((section, index) => {
        if (!section || !section.type) return null;

        const SectionComponent = sectionRegistry[section.type];

        if (!SectionComponent) {
          console.warn(`[SectionRenderer] Section type "${section.type}" not found in registry.`);
          return null;
        }

        try {
          return (
            <SectionComponent
              key={`${section.type}-${index}`}
              variant={section.variant}
              data={businessData}
              config={section}
            />
          );
        } catch (error) {
          console.error(`[SectionRenderer] Failed to render section: ${section.type}`, error);
          return null;
        }
      })}
    </>
  );
}
