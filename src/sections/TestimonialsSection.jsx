export default function TestimonialsSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-24 px-10 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">{data.heading}</h2>

        <div className="grid md:grid-cols-2 gap-8">

{data.testimonials
  ?.filter(item => item.rating >= 3)
  .map((item, index) => (

    <div
      key={index}
      className="border border-gray-700 p-8 rounded-3xl"
    >

      <p className="text-xl mb-8 leading-relaxed">
        "{item.review}"
      </p>

      <h4 className="font-bold text-lg">
        — {item.author_name}
      </h4>

      <p className="mt-3 text-yellow-400">
        Rating: {item.rating}/5
      </p>

    </div>

))}

</div>
      </div>
    </section>
  );
}
