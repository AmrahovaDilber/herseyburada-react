import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import NavLinks from "./NavLinks"; // Assuming you have a NavLinks component
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsHeaderHidden(true); // Hide header when scrolling down
      } else {
        setIsHeaderHidden(false); // Show header when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        isHeaderHidden ? "-translate-y-full" : "translate-y-0"
      } bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          {/* Logo Section */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="/herseyburada.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center py-[2px] grow mr-4 rounded-full border bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <input
              className="bg-transparent placeholder-gray-500 outline-none text-sm grow px-6 py-2 transition-all duration-200"
              type="text"
              value={query}
              placeholder="Nə ilə maraqlanırsınız?"
              onChange={handleInputChange}
            />
            <Link
              to={`/search?q=${query}`}
              className="h-8 w-8 bg-[#ff9130] rounded-full cursor-pointer text-white flex justify-center items-center hover:bg-[#e7883b] mr-1 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <IoIosSearch className="text-[18px]" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <NavLinks />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full p-2 transition transform origin-top lg:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            {/* Add your mobile menu items here */}
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
}
