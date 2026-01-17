const StartPage = () => {
  const date = {
    day: 31,
    month: "January",
    year: 2026,
    place: "Los Angeles, California",
  };
  return (
    <main 
    className="mt-8 flex flex-col items-center px-4 text-center h-screen "
    >
      <h1 className="text-5xl md:text-5xl font-bold text-blue-950">
        KiTE Design Competition
      </h1>

      <h2 className="mt-4 text-xl md:text-2xl text-blue-950">
        Create Your Best KiTE Design & Win Amazing Prizes!
      </h2>

      <img
        // src="https://pngimg.com/d/kite_PNG27.png"
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZkaWIzazhydzd1dTFhNzl1OHdyem5uamZyYjMyZHRhYXNzeXNjaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cb82laaFFhbTqDmV1o/giphy.gif"
        alt="Kite fest logo"
        className="md:w-100 w-80 m-10 rounded-2xl"
      />

      {/* desktop */}
      <p className="hidden md:block text-3xl text-red-800 rounded-[5px] px-3 py-2 mb-5 font-bold">
        {date.day} {date.month} {date.year} | {date.place}
      </p>

      {/* mobile */}
      <p className="block md:hidden text-3xl text-red-800 rounded-[5px] px-3 py-2 mb-5 font-bold">
        {date.day} {date.month} {date.year} <br /> {date.place}
      </p>

      <button className="border-2 border-white rounded-xl px-5 py-4 text-xl md:text-3xl font-bold bg-blue-950 text-white cursor-pointer">
        Enroll Now!
      </button>
    </main>
  );
};

export default StartPage;
