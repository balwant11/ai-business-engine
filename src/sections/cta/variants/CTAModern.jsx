import Link from "next/link";

export default function CTAModern({ data }) {
  if (!data) return null;

  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      {data.image && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        </div>
      )}
      
      {!data.image && (
        <div className="absolute inset-0 z-0 bg-primary"></div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight tracking-[0.1em] uppercase">
          {data.title}
        </h2>
        
        {data.subtitle && (
          <p className="text-xl text-secondary/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {data.subtitle}
          </p>
        )}
        
        {data.buttonText && (
          <Link 
            href={data.buttonLink || "/contact"}
            className="inline-block bg-accent text-secondary px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 hover:bg-white hover:text-black transition-all duration-500"
          >
            {data.buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
