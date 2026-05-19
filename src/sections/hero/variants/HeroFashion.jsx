import Link from "next/link";

export default function HeroFashion({ data }) {
  if (!data) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Animation and Elegant Overlay */}
      {data.image && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 backdrop-blur-[2px]"></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="mb-6 inline-block">
            <span className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium tracking-[0.2em] uppercase">
              Premium Quality
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
            {data.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {data.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {data.ctaButtons && data.ctaButtons.map((btn, idx) => (
              <Link 
                key={idx} 
                href={btn.link}
                className={`px-10 py-5 text-sm md:text-base font-bold uppercase tracking-[0.15em] transition-all duration-500 rounded-none w-full sm:w-auto text-center
                  ${btn.style === 'primary' 
                    ? 'bg-accent text-secondary hover:bg-white hover:text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1' 
                    : 'bg-transparent border border-white/50 text-white backdrop-blur-sm hover:bg-white hover:text-black transform hover:-translate-y-1'
                }`}
              >
                {btn.text}
              </Link>
            ))}
            {!data.ctaButtons && data.buttonText && (
              <Link 
                href={data.buttonLink || "/"}
                className="bg-accent text-secondary px-10 py-5 text-sm md:text-base font-bold uppercase tracking-[0.15em] transition-all duration-500 hover:bg-white hover:text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
              >
                {data.buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
