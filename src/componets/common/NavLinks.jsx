import { useEffect, useRef, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { doSignOut } from "../../firebase/auth";

export default function NavLinks() {
  const { userLoggedIn, carts, favorites } = useContextApp();
  const [cartLength, setCartLength] = useState(null);
  const [favoritesLength, setFavoritesLength] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
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

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleAccountClick = () => {
    if (userLoggedIn) {
      setDropdownOpen((prev) => !prev);
    } else {
      navigate("/login");
    }
  };
  return (
    <nav className="flex space-x-6">
      <Link
        to="/cartpage"
        className="group flex items-center gap-1 text-[#1a1a1a] hover:text-[#ff9130] transition-colors duration-300 ease-in-out"
      >
        <div className="relative">
          <IoCartOutline className="text-[22px] text-[#1a1a1a] transition-transform duration-300 transform hover:scale-110 group-hover:text-[#ff9130] ease-in-out" />
          {cartLength > 0 && (
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs">
              {cartLength}
            </span>
          )}
        </div>
        <span>Səbət</span>
      </Link>

      <Link
        to="/wishlist"
        className="group flex items-center gap-1 text-[#1a1a1a] hover:text-[#ff9130] transition-colors duration-300 ease-in-out"
      >
        <div className="relative">
          <IoMdHeartEmpty className="text-[22px] text-[#1a1a1a] transition-transform duration-300 transform hover:scale-110 group-hover:text-[#ff9130] ease-in-out" />
          {favoritesLength > 0 && (
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out">
              {favoritesLength}
            </span>
          )}
        </div>
        <span>Sevimlilər</span>
      </Link>

      <div className="relative group" ref={dropdownRef}>
        <button
          className="text-gray-500 group-hover:text-[#ff9130]"
          onClick={handleAccountClick}
        >
          <div className="flex items-center gap-1 w-[35px] h-[35px] rounded-full bg-gray-200  transition-transform duration-300 ease-in-out group-hover:bg-[#ff9436] justify-center text-[#1a1a1a]">
            <IoPersonOutline className=" rounded-full  text-[24px]   " />
          </div>
        </button>
        {isDropdownOpen && userLoggedIn && (
          <div
            id="dropdown"
            className="absolute flex-col justify-start right-0 top-3 w-[200px] bg-white shadow-lg rounded-lg mt-2 py-2"
          >
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
  );
}
