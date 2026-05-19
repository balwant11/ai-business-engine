import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ProductsGridSection from "@/sections/ProductsGridSection";
import ContactFormSection from "@/sections/ContactFormSection";
import GallerySection from "@/sections/GallerySection";
import CTASection from "@/sections/CTASection";
import TeamSection from "@/sections/TeamSection";

const sectionMap = {
  hero: HeroSection,
  about: AboutSection,
  services: ServicesSection,
  testimonials: TestimonialsSection,
  productsGrid: ProductsGridSection,
  contactForm: ContactFormSection,
  gallery: GallerySection,
  cta: CTASection,
  team: TeamSection,
};

export default function SectionRenderer({ sections }) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionMap[section.type];

        if (!Component) return null;

        return (
          <Component
            key={index}
            data={section}
          />
        );
      })}
    </>
  );
}