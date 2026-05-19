export default function ProductsGridSection({ data }) {

    return (
      <section className="py-20 px-6">
  
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-4xl font-bold mb-10">
            {data?.heading || "Products"}
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
            {(data?.products || []).map((product, index) => (
  
              <div
                key={index}
                className="border p-6 rounded-2xl"
              >
  
                <h3 className="text-2xl font-semibold mb-3">
                  {product.name}
                </h3>
  
                <p>
                  {product.description}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  
  }