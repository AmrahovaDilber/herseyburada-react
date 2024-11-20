import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { doSignOut } from "../../firebase/auth";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks";
import { FaHome, FaUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RiMenuSearchLine } from "react-icons/ri";

export default function Header() {
  const { userLoggedIn, handleInputChange, query } = useContextApp();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className="hidden lg:block border-b-[1px] sticky top-0 bg-white z-[999]">
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

            {/* Search Bar */}
            <div className="hidden lg:flex items-center py-[2px] grow mr-4 rounded-full border bg-white shadow-sm transition-all duration-300">
              <input
                className="bg-transparent placeholder-gray-500 outline-none text-sm grow px-6 py-2 transition-all duration-200"
                type="text"
                value={query}
                placeholder="Nə ilə maraqlanırsınız?"
                onChange={handleInputChange}
              />
              <Link className="h-8 w-8 bg-[#ff9130] rounded-full cursor-pointer text-white flex justify-center items-center  mr-1 transition-colors duration-300 ease-in-out shadow-md ">
                <IoIosSearch className="text-[18px]" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
              <NavLinks />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-md z-[999] flex justify-between px-4 py-2 border-t">
        <Link
          to="/"
          className="flex flex-col items-center text-gray-500 hover:text-black"
        >
          <FaHome className="text-xl" />
          <span className="text-xs">Ana Səhifə</span>
        </Link>
        <Link
          to="/products/Qadın"
          className="flex flex-col items-center text-gray-500 hover:text-black"
        >
          <RiMenuSearchLine  className="text-xl" />
          <span className="text-xs">Kataloq</span>
        </Link>
        <Link
          to="/wishlist"
          className="flex flex-col items-center text-gray-500 hover:text-black"
        >
          <FaRegHeart className="text-xl" />
          <span className="text-xs">Sevimlilər</span>
        </Link>
        <Link
          to="/cartpage"
          className="flex flex-col items-center text-gray-500 hover:text-black"
        >
          <IoCartOutline className="text-xl" />
          <span className="text-xs">Səbət</span>
        </Link>
        <Link
          to="/profile"
          className="flex flex-col items-center text-gray-500 hover:text-black"
        >
          <FaUser className="text-xl" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-md rounded-lg shadow-lg p-4">
            <button
              className="text-gray-600 hover:text-black absolute top-3 right-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <IoMdClose className="text-2xl" />
            </button>
            <div className="space-y-4">
              <Link to="/cartpage" onClick={() => setMobileMenuOpen(false)}>
                Cart
              </Link>
              <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)}>
                Wishlist
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              {userLoggedIn ? (
                <button
                  onClick={() => {
                    if (window.confirm("Çıxış etmək istədiyinizə əminsiniz?")) {
                      doSignOut().then(() => {
                        navigate("/login");
                        setMobileMenuOpen(false);
                      });
                    }
                  }}
                  className="text-indigo-600"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}