import AboutModern from "./variants/AboutModern";

export default function AboutSection({ data, variant }) {
  switch (variant) {
    case "modern":
      return <AboutModern data={data} />;
    default:
      return <AboutModern data={data} />;
  }
}
