const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10">

        {/* Info */}
        <div className="space-y-2">
          <p className="text-lg font-semibold">Las Vegas World Kite Festival</p>
          <p className="text-sm">lvkitefestival@gmail.com</p>
          <p className="text-sm">8455 Kids Zone Pkwy, Las Vegas, NV 89147</p>
          <p className="text-sm">Las Vegas, NV, USA</p>
        </div>

        {/* Links */}
        <div className="space-y-2 md:justify-self-end">
          <a className="block text-sm hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="block text-sm hover:underline" href="#">
            Accessibility Statement
          </a>
          <a className="block text-sm hover:underline" href="#">
            Terms & Conditions
          </a>
          <a className="block text-sm hover:underline" href="#">
            Refund Policy
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 text-center text-xs py-4">
        © {new Date().getFullYear()} Las Vegas World Kite Festival. All rights
        reserved.
      </div>

    </footer>
  );
};

export default Footer;
