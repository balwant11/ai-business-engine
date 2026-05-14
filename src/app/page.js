import businessData from "@/data/business.json";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";

export default function Home() {

  

  const website =
  businessData.website_content;

  return (
    <main>

      <HeroSection
        data={website.homepage.hero_section}
      />

      <AboutSection
        data={website.homepage.introduction}
      />

      <ServicesSection
        data={website.products_services_page}
      />

      <TestimonialsSection
        data={website.testimonials_section}
      />

    </main>
  );
}