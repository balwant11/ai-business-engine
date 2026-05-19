export default function ContactFormSection({ data }) {

    return (
      <section className="py-20 px-6">
  
        <h2>
          {data?.heading || "Contact Us"}
        </h2>
  
      </section>
    );
  
  }