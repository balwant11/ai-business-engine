import ServicesCards from "./variants/ServicesCards";

export default function ServicesSection({ data, variant }) {
  switch (variant) {
    case "cards":
      return <ServicesCards data={data} />;
    default:
      return <ServicesCards data={data} />;
  }
}
