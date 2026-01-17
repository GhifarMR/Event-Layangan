const About = () => {
  return (
    <section className="px-5 md:h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-15 flex justify-center">
        About KiTE
      </h1>

      <div className="grid md:grid-cols-2 ">
        <div>
          <img
            src="https://images.unsplash.com/flagged/photo-1583603275310-33d386c7298a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="kite about us"
            className="rounded-2xl md:max-w-2xl hover:scale-105 transition duration-300 mb-10"
          />
        </div>

        <div className="max-w-2xl">
          <p className="text-base md:text-xl leading-relaxed">
            KiTE is a design competition event that focuses on creativity and
            innovation in kite design. The event provides a platform for
            designers to explore ideas, express artistic vision, and transform
            traditional kite concepts into modern and meaningful designs.
          </p>

          <p className="mt-4 text-base md:text-xl leading-relaxed">
            Through KiTE, participants are encouraged to combine aesthetics,
            functionality, and cultural values in their designs. The competition
            aims to promote creative thinking, design excellence, and
            appreciation for kite art as a form of visual and cultural
            expression.
          </p>

          <p className="mt-4 text-base md:text-xl leading-relaxed">
            KiTE is open to creative individuals who are passionate about design
            and innovation, offering an opportunity to gain recognition,
            experience, and inspiration within a competitive and collaborative
            environment.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
