export default function AboutSection({ data }) {

    if (!data) return null;
  
    return (
      <section className="py-24 px-10 bg-white text-black">
  
        <div className="max-w-5xl mx-auto">
  
          <h2 className="text-5xl font-bold mb-8">
            {data.heading}
          </h2>
  
          <p className="text-xl mb-6 leading-relaxed">
            {data.paragraph_1}
          </p>
  
          <p className="text-xl leading-relaxed">
            {data.paragraph_2}
          </p>
  
        </div>
  
      </section>
    );
  }