export default function TestimonialsCards({ data }) {
  if (!data || !data.reviews) return null;

  return (
    <section className="py-32 bg-primary text-secondary overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-fixed opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Client Voices
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 uppercase tracking-[0.1em]">{data.title}</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.reviews.slice(0, 3).map((review, index) => (
            <div 
              key={index} 
              className="group bg-secondary/5 p-10 backdrop-blur-md border border-secondary/10 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 relative"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl font-serif text-accent group-hover:opacity-20 group-hover:-translate-y-2 transition-all duration-500">
                &quot;
              </div>
              
              <div className="text-accent mb-8 flex gap-1">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-secondary/80 font-light leading-relaxed mb-10 relative z-10 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                "{review.review}"
              </p>
              
              <div className="flex items-center mt-auto border-t border-secondary/10 pt-6">
                {review.profile_photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={review.profile_photo} 
                    alt={review.author_name} 
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full mr-4 bg-secondary/10 flex items-center justify-center text-secondary text-sm font-bold">
                    {review.author_name?.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase text-secondary/90">{review.author_name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
