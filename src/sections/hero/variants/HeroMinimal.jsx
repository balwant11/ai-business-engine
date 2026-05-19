import Link from "next/link";

export default function HeroMinimal({ data }) {
  if (!data) return null;

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-secondary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
          {data.title}
        </h1>
        <p className="text-xl text-primary/70 mb-10 max-w-2xl mx-auto">
          {data.subtitle}
        </p>
        
        <div className="flex justify-center gap-4">
          {data.ctaButtons && data.ctaButtons.map((btn, idx) => (
            <Link 
              key={idx} 
              href={btn.link}
              className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-200 ${
                btn.style === 'primary' 
                  ? 'bg-primary text-secondary hover:bg-accent' 
                  : 'bg-secondary border border-primary/20 text-primary hover:bg-primary/5'
              }`}
            >
              {btn.text}
            </Link>
          ))}
          {!data.ctaButtons && data.buttonText && (
            <Link 
              href={data.buttonLink || "/"}
              className="bg-primary text-secondary px-8 py-3 rounded-full text-base font-medium transition-all duration-200 hover:bg-accent"
            >
              {data.buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
