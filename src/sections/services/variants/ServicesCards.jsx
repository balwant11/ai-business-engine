export default function ServicesCards({ data }) {
  if (!data || !data.items) return null;

  return (
    <section className="py-24 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
          {data.description && (
            <p className="text-lg text-secondary/70">
              {data.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <div 
              key={index}
              className="bg-secondary/5 rounded-2xl p-8 hover:bg-secondary/10 hover:-translate-y-2 transition-all duration-300 border border-secondary/10 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-secondary transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
              <p className="text-secondary/70 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
