import businessData from "@/data/business.json";
import SectionRenderer from "@/components/SectionRenderer";

export default function Home() {

  const homePage = businessData.website_content.pages.find(
    (page) => page.slug === "/"
  );

  return (
    <main>
      <SectionRenderer sections={homePage.sections} />
    </main>
  );
}