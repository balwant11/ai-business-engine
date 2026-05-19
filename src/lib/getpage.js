import businessData from "@/data/business.json";

export function getPage(slug) {

  const pages = businessData.website_content.pages;

  return pages.find(
    (page) => page.slug === slug
  );

}