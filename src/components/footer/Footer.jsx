import FooterModern from "./variants/FooterModern";

export default function Footer({ business, variant }) {
  switch (variant) {
    case "modern":
      return <FooterModern business={business} />;
    default:
      return <FooterModern business={business} />;
  }
}
