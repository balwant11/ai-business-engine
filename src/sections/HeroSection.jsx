export default function HeroSection({ data }) {

    if (!data) return null;
  
    return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
  
        <h1 className="text-6xl font-bold mb-6 max-w-5xl">
          {data.title}
        </h1>
  
        <p className="text-xl max-w-3xl mb-10">
          {data.subtitle}
        </p>
  
        <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold">
          {data.button_text}
        </button>
  
      </section>
    );
  }