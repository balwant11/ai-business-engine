import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";

const sectionMap = {
  hero: HeroSection,
  about: AboutSection,
  services: ServicesSection,
  testimonials: TestimonialsSection,
};

export default function SectionRenderer({ sections }) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionMap[section.type];

        if (!Component) return null;

        return <Component key={index} data={section} />;
      })}
    </>
  );
}