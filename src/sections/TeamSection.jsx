export default function TeamSection({ data }) {

    return (
      <section className="py-20 px-6">
  
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-4xl font-bold mb-10">
            {data?.heading || "Our Team"}
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
            {(data?.members || []).map((member, index) => (
  
              <div
                key={index}
                className="border p-6 rounded-2xl"
              >
  
                <h3 className="text-2xl font-semibold">
                  {member.name}
                </h3>
  
                <p className="mt-2">
                  {member.role}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  
  }