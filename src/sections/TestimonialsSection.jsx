export default function TestimonialsSection({ data }) {

  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          {data?.heading || "Testimonials"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {(data?.items || []).map((item, index) => (

            <div
              key={index}
              className="border p-6 rounded-2xl"
            >

              <p className="mb-4">
                "{item.review}"
              </p>

              <h3 className="font-semibold">
                {item.author}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );

}