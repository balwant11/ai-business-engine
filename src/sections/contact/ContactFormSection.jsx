import ContactSplit from "./variants/ContactSplit";

export default function ContactFormSection({ data, variant }) {
  switch (variant) {
    case "split":
      return <ContactSplit data={data} />;
    default:
      return <ContactSplit data={data} />;
  }
}
