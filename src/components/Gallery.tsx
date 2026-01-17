const Gallery = () => {
  return (
    <section className="px-5 py-16 md:h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Gallery KiTE
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          "https://images.unsplash.com/photo-1571849291280-89f81a772893?q=80&w=1074&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1705332096769-0142c80da4ad?q=80&w=1170&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1759846865683-b66e59f48a9c?q=80&w=1074&auto=format&fit=crop",
          "https://media.istockphoto.com/id/2217348682/photo/kite-fest-at-the-carolinensiel.webp?a=1&b=1&s=612x612&w=0&k=20&c=9mkLjMCecVLpiQKy9KSDysxNbsXjutSu3pN07XT87oM=",
          "https://media.istockphoto.com/id/2121870250/photo/pattaya-international-kite-on-the-beach-pattaya-beach-chonburi-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=MhtsdDI3qB8aC8UC_da4iIYlRNjaunIcCLPXqFDRcXI=",
          "https://media.istockphoto.com/id/1474405842/photo/february-26-2023-pattaya-international-kite-on-the-beach-2023-colorful-kites-dazzled-in-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=RUAeH0xAgrWkUvY_0z3kEJd_xXbhFKEWGZa0grg7Gdw=",
        ].map((src, i) => (
          <div
            key={i}
            className="aspect-square md:aspect-8/4 overflow-hidden rounded-xl"
          >
            <img
              src={src}
              alt={`Gallery KiTE ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
