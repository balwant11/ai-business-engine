export default function GalleryMasonry({ data }) {
  if (!data || !data.images) return null;

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6">{data.title}</h2>
          {data.description && (
            <p className="text-lg text-primary/70">
              {data.description}
            </p>
          )}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {data.images.map((img, index) => (
            <div 
              key={index} 
              className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={img.src} 
                alt={img.alt || `Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                {img.alt && (
                  <p className="text-white font-semibold text-lg px-4 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
