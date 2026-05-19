export default function WhatsAppButton({ phone }) {

    return (
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        className="fixed bottom-6 right-6 z-50"
      >
        WhatsApp
      </a>
    );
  }