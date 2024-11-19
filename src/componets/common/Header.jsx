import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { doSignOut } from "../../firebase/auth";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const { userLoggedIn, handleInputChange, query } = useContextApp();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="border-b-[1px] sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 ">
        <div className="flex justify-between items-center py-4  md:space-x-10">
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

          {/* Search Bar (Visible on Larger Screens) */}
          <div className="hidden lg:flex items-center py-[2px] grow mr-4 rounded-full border bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <input
              className="bg-transparent placeholder-gray-500 outline-none text-sm grow px-6 py-2 transition-all duration-200"
              type="text"
              value={query}
              placeholder="Nə ilə maraqlanırsınız?"
              onChange={handleInputChange}
            />
            <Link className="h-8 w-8 bg-[#ff9130] rounded-full cursor-pointer text-white flex justify-center items-center hover:bg-[#e7883b] mr-1 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg">
              <IoIosSearch className="fa-solid fa-magnifying-glass text-[18px]" />
            </Link>
          </div>

          {/* Navigation Links (Visible on Larger Screens) */}
          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <NavLinks />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
  <div className="absolute top-0 left-0 w-full p-2 transition transform origin-top lg:hidden">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <img
              className="h-8 w-auto"
              src="/herseyburada.svg"
              alt="Logo"
            />
          </div>
          <div className="-mr-2">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoMdClose  className="size-[26px] object-cover"/>
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center h-10 grow rounded-full border">
            <input
              className="bg-transparent placeholder-black opacity-50 outline-none text-sm grow px-4"
              type="text"
              value={query}
              placeholder="Nə ilə maraqlanırsınız?"
              onChange={handleInputChange}
            />
            <Link className="size-8 bg-[#ff9130] rounded-full cursor-pointer text-white inline-flex justify-center items-center hover:bg-[#e07575] mr-1">
              <i className="fa-solid fa-magnifying-glass text-xs" />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-6 px-5 space-y-6">
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          <Link
            to="/cartpage"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Səbət
          </Link>
          <Link
            to="/wishlist"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Favoritlər
          </Link>
          <Link
            to="/about"
            className="text-base font-medium text-gray-900 hover:text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Haqqımızda
          </Link>
          {userLoggedIn ? (
            <Link
              to="/contact"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Əlaqə
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Daxil ol
            </Link>
          )}
        </div>
        {userLoggedIn && (
          <div className="mt-6">
            <button
              onClick={() => {
                if (window.confirm("Çıxış etmək istədiyinizə əminsiniz?")) {
                  doSignOut().then(() => {
                    navigate("/login");
                    setMobileMenuOpen(false);
                  });
                }
              }}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Çıxış et
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
)}

    </header>
  );
}
