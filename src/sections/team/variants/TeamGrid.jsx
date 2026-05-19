export default function TeamGrid({ data }) {
  if (!data || !data.members) return null;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {data.members.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-accent transition-all duration-300">
                {member.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/30">
                    No Image
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
              <p className="text-accent font-medium text-sm mb-3 uppercase tracking-wider">{member.role}</p>
              {member.bio && (
                <p className="text-primary/70 text-sm line-clamp-3">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
