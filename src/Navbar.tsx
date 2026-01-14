import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-blue-950/90">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">

        {/* Logo */}
        <div className="text-2xl md:text-4xl font-bold text-white hover:text-yellow-300">
          <a href="/">KiTE</a>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-9 text-xl text-white">
          {[
            "Home",
            "About",
            "Gallery",
            "Schedule",
            "Ticket",
            "FAQ",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="relative font-semibold after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Button Desktop */}
        <button className="hidden md:block border-2 border-white rounded-xl px-4 py-2 text-xl font-bold bg-white text-blue-800 cursor-pointer">
          Buy Ticket
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-6 text-white text-lg">
          {[
            "Home",
            "About",
            "Gallery",
            "Schedule",
            "Ticket",
            "FAQ",
            "Contact",
          ].map((item) => (
            <a key={item} href="#" className="border-b border-white/20 pb-2">
              {item}
            </a>
          ))}

          <button className="mt-4 border-2 border-white rounded-xl py-2 font-bold bg-white text-blue-800">
            Buy Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
