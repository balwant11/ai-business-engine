import Image from "next/image";

export default function ProductsGridCards({ data }) {
  if (!data || !data.products) return null;

  return (
    <section className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight uppercase">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          {data.description && (
            <p className="text-xl text-primary/60 font-light leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.products.map((product, index) => {
            return (
              <div
                key={index}
                className="group cursor-pointer flex flex-col h-full bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-primary/5"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-primary/5">
                  {product.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary/30 uppercase text-xs tracking-widest font-semibold">
                      No Image
                    </div>
                  )}

                  {/* Elegant overlay on hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="bg-white text-primary px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent hover:text-secondary">
                      Discover
                    </button>
                  </div>
                </div>

                <div className="p-8 text-center flex-grow flex flex-col justify-center border-t border-primary/5">
                  <h3 className="text-lg font-bold text-primary mb-3 tracking-widest uppercase line-clamp-2">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-primary/60 text-sm font-light leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
