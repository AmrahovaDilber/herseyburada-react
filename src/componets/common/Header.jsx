import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { doSignOut } from "../../firebase/auth";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoHomeOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
export default function Header() {
  const { userLoggedIn, handleInputChange, query, darkMode, toggleDarkMode } =
    useContextApp();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`border-b-[1px] sticky top-0 z-[999] transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white dark:bg-[#121212] border-gray-200 dark:border-gray-700`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="flex justify-between items-center py-4 md:space-x-10">
            {/* Logo Section */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  // src={darkMode ? "/logodark2.png" : "/herseyburada.svg"}
                  src={ "/herseyburada.svg"}
                  alt="Logo"
                />
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="bg-white dark:bg-[#202020] rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>

            {/* Search Bar (Visible on Larger Screens) */}
            <div className="hidden lg:flex items-center py-[2px] grow mr-4 rounded-full border bg-white dark:bg-[#202020] shadow-sm transition-all duration-300">
              <input
                className="bg-transparent placeholder-gray-500 dark:placeholder-gray-400 outline-none text-sm grow px-6 py-2 text-gray-900 dark:text-gray-200 transition-all duration-200"
                type="text"
                value={query}
                placeholder="Nə ilə maraqlanırsınız?"
                onChange={handleInputChange}
              />
              <Link className="h-8 w-8 bg-[#ff9130] dark:bg-[#fff] dark:text-[#1a1a1a] rounded-full cursor-pointer text-white flex justify-center items-center mr-1 transition-colors duration-300 ease-in-out shadow-md">
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
          <div className="fixed top-0 left-0 w-full p-2 transition transform origin-top lg:hidden bg-white dark:bg-[#202020]">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-[#202020] divide-y-2 divide-gray-50 dark:divide-gray-700">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <Link to="/">
                    <img
                      className="h-8 w-auto"
                      src="/herseyburada.svg"
                      alt="Logo"
                    />
                  </Link>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <IoMdClose className="size-[26px] object-cover" />
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
                    <Link className="size-8 bg-[#ff9130] rounded-full cursor-pointer text-white inline-flex justify-center items-center mr-1">
                      <i className="fa-solid fa-magnifying-glass text-xs" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center px-4 sm:px-0 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <IoSunnyOutline className="text-[22px]" />
                ) : (
                  <IoMoonOutline className="text-[22px]" />
                )}
              </button>

              {/* Other Links */}
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    to="/cartpage"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-[#fff]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Səbət
                  </Link>
                  <Link
                    to="/wishlist"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-[#fff]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Favoritlər
                  </Link>
                  <Link
                    to="/about"
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-[#fff]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Haqqımızda
                  </Link>

                  {userLoggedIn ? (
                    <Link
                      to="/contact"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-[#fff]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Əlaqə
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-[#fff]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Daxil ol
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Responsive Footer with Icons */}

      <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md lg:hidden z-[999]">
        <div className="flex justify-around items-center py-2 border-t-[1px] border-gray-200 dark:border-gray-700">
          <Link
            to="/"
            className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-[#ff9130] transition duration-200"
          >
            <IoHomeOutline className="text-lg" />
            <span className="text-xs">Ana Səhifə</span>
          </Link>
          <Link
            to="/cartpage"
            className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-[#ff9130] transition duration-200"
          >
            <i className="fas fa-shopping-cart text-lg"></i>
            <span className="text-xs">Səbət</span>
          </Link>
          <Link
            to="/products/Qadın"
            className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-[#ff9130] transition duration-200"
          >
            <RiMenuSearchLine className="size-[23px]" />
            <span className="text-xs">Kataloq</span>
          </Link>
          <Link
            to="/wishlist"
            className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-[#ff9130] transition duration-200"
          >
            <i className="fas fa-heart text-lg"></i>
            <span className="text-xs">Favoritlər</span>
          </Link>
          {/* User Icon */}
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
              className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-[#ff9130] transition duration-200"
            >
              <i className="fas fa-user text-lg"></i>
              <span className="text-xs">Çıxış et</span>
            </button>
          ) : (
            <Link
              to="/login"
              className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-[#ff9130] transition duration-200"
            >
              <i className="fas fa-sign-in-alt text-lg"></i>
              <span className="text-xs">Daxil ol</span>
            </Link>
          )}
        </div>
      </footer>
    </>
  );
}
