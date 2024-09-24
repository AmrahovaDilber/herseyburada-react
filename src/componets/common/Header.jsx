import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { FcAbout } from "react-icons/fc";
import { doSignOut } from "../../firebase/auth";

export default function Header() {
  const {
    userLoggedIn,
    carts,
    favorites,
    handleInputChange,
    query,
  } = useContextApp();
  const [cartLength, setCartLength] = useState(null);
  const [favoritesLength, setFavoritesLength] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setCartLength(carts.length);
  }, [carts]);

  useEffect(() => {
    setFavoritesLength(favorites.length);
  }, [favorites]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleAccountClick = () => {
    if (userLoggedIn) {
      setDropdownOpen(prev => !prev);
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="border-b-[1px] sticky top-0 bg-white z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <img className="h-8 w-auto sm:h-10" src="/herseyburada.svg" alt="Logo" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="flex justify-between items-center h-10 grow max-w-md mr-4 rounded-full border">
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
            <nav className="flex space-x-6">
              <Link to="/cartpage" className="relative text-gray-500 hover:text-gray-900">
                <i className="fa-solid fa-cart-shopping text-xl" />
                {cartLength > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs">
                    {cartLength}
                  </span>
                )}
              </Link>
              <Link to="/wishlist" className="relative text-gray-500 hover:text-gray-900">
                <i className="fa-solid fa-heart text-xl" />
                {favoritesLength > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs">
                    {favoritesLength}
                  </span>
                )}
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-900">
                <FcAbout className="text-xl" />
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  className="text-gray-500 hover:text-gray-900"
                  onClick={handleAccountClick}
                >
                  <i className="fa-solid fa-user text-xl" />
                </button>
                {isDropdownOpen && userLoggedIn && (
                  <div
                    id="dropdown"
                    className="absolute flex-col justify-start right-0 top-3 w-[200px] bg-white shadow-lg rounded-lg mt-2 py-2"
                  >
                    {/* <Link
                      to={"/account"}
                      className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                    >
                      <img
                        src="/Icon-user.svg"
                        className="size-[22px] w-[20%] mr-2"
                        alt="User Icon"
                      />
                      <span className="text-left w-[80%]">Hesabımın idarəsi</span>
                    </Link> */}
                    {/* <Link
                      to={"/cartpage"}
                      className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                    >
                      <img
                        src="/Icon-mallbag.svg"
                        alt="Cart Icon"
                        className="size-[24px] w-[20%] mr-2"
                      />
                      <span className="text-left w-[80%]">Mənim sifarişlərim</span>
                    </Link> */}
                    <Link
                      to={"/contact"}
                      className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                    >
                      <img
                        src="/Icon-service.svg"
                        alt="Service Icon"
                        className="size-[21px] w-[20%] mr-2"
                      />
                      <span className="text-left w-[80%]">Müştəri xidməti</span>
                    </Link>
                    {/* <a
                      href="#"
                      className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                    >
                      <img
                        src="/Icon-Reviews.svg"
                        alt="Reviews Icon"
                        className="size-[25px] w-[20%] mr-2"
                      />
                      <span className="text-left w-[80%]">Mənim rəylərim</span>
                    </a> */}
                    <Link
                      to={"/login"}
                      className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                    >
                      <img
                        src="/Icon-logout.svg"
                        alt="Logout Icon"
                        className="size-[24px] w-[20%] mr-2"
                      />
                      <span
                        onClick={() => {
                          const res = window.confirm(
                            "Çıxış etmək istədiyinizə əminsiniz?"
                          );
                          if (res) {
                            doSignOut().then(() => {
                              navigate("/login");
                              setDropdownOpen(false);
                            });
                          }
                        }}
                        className="text-left w-[80%]"
                      >
                        Çıxış et
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/herseyburada.svg" alt="Logo" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
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
                <Link to="/cartpage" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Səbət
                </Link>
                <Link to="/wishlist" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Favoritlər
                </Link>
                <Link to="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Haqqımızda
                </Link>
                {userLoggedIn ? (
                  <Link to="/account" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Hesab
                  </Link>
                ) : (
                  <Link to="/login" className="text-base font-medium text-gray-900 hover:text-gray-700">
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