export default function ContactSplit({ data }) {
  if (!data) return null;

  return (
    <section className="py-24 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{data.title || "Contact Us"}</h2>
            <div className="w-20 h-1 bg-accent mb-8 rounded-full"></div>
            
            <p className="text-xl text-secondary/70 mb-12">
              {data.description || "We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible."}
            </p>

            <div className="space-y-8">
              {data.email && (
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-6 text-accent">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Email</h4>
                    <p className="text-secondary/70">{data.email}</p>
                  </div>
                </div>
              )}
              {data.phone && (
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-6 text-accent">
                    📞
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Phone</h4>
                    <p className="text-secondary/70">{data.phone}</p>
                  </div>
                </div>
              )}
              {data.address && (
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-6 text-accent">
                    📍
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Office</h4>
                    <p className="text-secondary/70">{data.address}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="bg-secondary p-10 rounded-3xl shadow-2xl space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 bg-primary/5 text-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent border border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 bg-primary/5 text-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent border border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-5 py-4 bg-primary/5 text-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent border border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-accent text-secondary font-bold text-lg py-4 rounded-xl hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
