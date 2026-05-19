import HeroSection from "@/sections/hero/HeroSection";
import AboutSection from "@/sections/about/AboutSection";
import ServicesSection from "@/sections/services/ServicesSection";
import TestimonialsSection from "@/sections/testimonials/TestimonialsSection";
import ProductsGridSection from "@/sections/products/ProductsGridSection";
import ContactFormSection from "@/sections/contact/ContactFormSection";
import GallerySection from "@/sections/gallery/GallerySection";
import CTASection from "@/sections/cta/CTASection";
import TeamSection from "@/sections/team/TeamSection";

const sectionMap = {
  hero: HeroSection,
  about: AboutSection,
  services: ServicesSection,
  testimonials: TestimonialsSection,
  productsGrid: ProductsGridSection,
  contact: ContactFormSection,
  gallery: GallerySection,
  cta: CTASection,
  team: TeamSection,
};

export default function SectionRenderer({ sections }) {
  if (!sections || !Array.isArray(sections)) return null;

  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionMap[section.type];

        if (!Component) {
          console.warn(`No component found for section type: ${section.type}`);
          return null;
        }

        return (
          <Component
            key={index}
            data={section.content}
            variant={section.variant}
          />
        );
      })}
    </>
  );
}