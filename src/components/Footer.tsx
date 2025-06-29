
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-black">
              ACCORDLY
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Built for Legal Teams by Legal Teams.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-8">
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors duration-300 font-bold"
            >
              ABOUT
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors duration-300 font-bold"
            >
              CONTACT
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors duration-300 font-bold"
            >
              TERMS
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Accordly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
