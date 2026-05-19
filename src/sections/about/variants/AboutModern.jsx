import Image from "next/image";

export default function AboutModern({ data }) {
  if (!data) return null;

  return (
    <section className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="w-full lg:w-1/2">
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-8 tracking-tight uppercase leading-[1.2]">
              {data.title}
            </h2>
            <div className="w-24 h-[2px] bg-accent mb-10"></div>
            
            <p className="text-lg text-primary/70 font-light leading-loose mb-8">
              {data.text}
            </p>
            
            {data.additionalText && (
              <p className="text-lg text-primary/70 font-light leading-loose border-l-2 border-accent/30 pl-6 italic">
                {data.additionalText}
              </p>
            )}
            
            <div className="mt-12">
               <button className="text-primary font-bold uppercase tracking-[0.2em] text-sm flex items-center group">
                 Read More
                 <span className="w-8 h-[1px] bg-primary ml-4 transition-all duration-300 group-hover:w-12 group-hover:bg-accent"></span>
               </button>
            </div>
          </div>

          {data.image && (
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <div className="relative overflow-hidden shadow-2xl aspect-[4/5] bg-primary/5 rounded-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={data.image} 
                    alt={data.title || "About Us"} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
