import SectionRenderer from "@/components/SectionRenderer";
import { getPage } from "@/lib/getpage";

export default async function DynamicPage({ params }) {
  const { slug: rawSlug } = await params;
  const slug = `/${rawSlug}`;

  const page = getPage(slug);

  if (!page) {
    return <div>Page Not Found</div>;
  }

  return (
    <main>
      <SectionRenderer sections={page.sections} />
    </main>
  );
}