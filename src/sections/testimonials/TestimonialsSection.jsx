import TestimonialsCards from "./variants/TestimonialsCards";

export default function TestimonialsSection({ data, variant }) {
  switch (variant) {
    case "cards":
      return <TestimonialsCards data={data} />;
    default:
      return <TestimonialsCards data={data} />;
  }
}
