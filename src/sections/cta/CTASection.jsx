import CTAModern from "./variants/CTAModern";

export default function CTASection({ data, variant }) {
  switch (variant) {
    case "modern":
      return <CTAModern data={data} />;
    default:
      return <CTAModern data={data} />;
  }
}
