export default function ServicesSection({ data }) {

    if (!data) return null;
  
    return (
      <section className="py-24 px-10 bg-gray-100 text-black">
  
        <div className="max-w-7xl mx-auto">
  
          <h2 className="text-5xl font-bold mb-6 text-center">
            {data.heading}
          </h2>
  
          <p className="text-xl text-center mb-16 max-w-4xl mx-auto">
            {data.introduction}
          </p>
  
          <div className="grid md:grid-cols-3 gap-8">
  
            {data.service_offerings?.map((item, index) => (
  
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
  
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>
  
                <p className="text-lg leading-relaxed">
                  {item.description}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }