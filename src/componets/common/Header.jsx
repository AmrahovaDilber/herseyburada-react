import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { FcAbout } from "react-icons/fc";
import { doSignOut } from "../../firebase/auth";
import { toast } from "react-toastify";
import { notification } from "../../utils/helper";

export default function Header() {
  const {
    userLoggedIn,
    carts,
    favorites,
    handleInputChange,
    query,
    currentUser,
  } = useContextApp();
  const [cartLength, setCartLength] = useState(null);
  const [favoritesLength, setFavoritesLength] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown
  const navigate = useNavigate();

  // Update cart length
  useEffect(() => {
    setCartLength(carts.length);
  }, [carts]);

  // Update favorites length
  useEffect(() => {
    setFavoritesLength(favorites.length);
  }, [favorites]);

  // Handle outside click to close the dropdown
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

  // Handle account click to toggle dropdown or navigate to signup
  const handleAccountClick = () => {
    if (userLoggedIn) {
      setDropdownOpen(prev => !prev); // Toggle dropdown
     
    } else {
      navigate('/signup'); // Redirect to signup page if not logged in
    }
  };

  return (
    <header className="border-b-[1px] sticky top-0 bg-white z-40">
      <div className="mt-[10px] w-[1200px] mx-auto flex justify-between items-center py-[20px]">
        <div className="flex items-center space-x-[100px] w-[830px]">
          <div className="text-[24px] font-logo">
            <Link to={"/"}>
              <img src="/herseyburada.svg" alt="Logo" />
            </Link>
          </div>
          <div className="flex justify-between items-center h-[40px] flex-1 grow pr-[5px] pl-[14px] rounded-[14px] border">
            <input
              className="bg-transparent placeholder-black opacity-50 outline-none text-sm grow"
              type="text"
              value={query}
              placeholder="Nə ilə maraqlanırsınız?"
              onChange={handleInputChange}
            />
            <Link className="size-[32px] bg-[#ff9130] rounded-[10px] cursor-pointer text-white inline-flex justify-center items-center hover:bg-[#e07575]">
              <i className="fa-solid fa-magnifying-glass text-[13px]" />
            </Link>
          </div>
        </div>
        <nav className="flex-1 flex justify-end items-center gap-x-[24px]">
          <Link
            to="/cartpage"
            className="relative inline-flex items-center gap-x-1 hover:text-[#ff7518]"
          >
            <i className="fa-solid fa-cart-shopping text-[20px]" />
            {cartLength > 0 && (
              <span className="absolute bottom-3 left-4 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold">
                {cartLength}
              </span>
            )}
          </Link>

          <Link
            to={"/wishlist"}
            className="relative inline-flex items-center gap-x-[5px] hover:text-[#ff7518]"
          >
            <i className="fa-solid fa-heart text-[20px]" />
            {favoritesLength > 0 && (
              <span className="absolute bottom-3 left-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold">
                {favoritesLength}
              </span>
            )}
          </Link>

          <Link
            to={"/about"}
            className="relative inline-flex items-center gap-x-[5px] hover:text-[#ff7518]"
          >
            <FcAbout className="text-[19px]" />
          </Link>

          <div className="relative" ref={dropdownRef}>
            <div
              id="account"
              className="inline-flex cursor-pointer items-center gap-x-[5px] hover:text-[#ff7518]"
              onClick={handleAccountClick}
            >
              <i className="fa-solid fa-user text-[20px]" />
            </div>

            {isDropdownOpen && userLoggedIn && (
              <div
                id="dropdown"
                className="absolute flex-col justify-start right-0 top-3 w-[200px] bg-white shadow-lg rounded-lg mt-2 py-2"
              >
                <Link
                  to={"/account"}
                  className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                >
                  <img
                    src="/Icon-user.svg"
                    className="size-[22px] w-[20%] mr-2"
                    alt="User Icon"
                  />
                  <span className="text-left w-[80%]">Hesabımın idarəsi</span>
                </Link>
                <Link
                  to={"/cartpage"}
                  className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                >
                  <img
                    src="/Icon-mallbag.svg"
                    alt="Cart Icon"
                    className="size-[24px] w-[20%] mr-2"
                  />
                  <span className="text-left w-[80%]">Mənim sifarişlərim</span>
                </Link>
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
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                >
                  <img
                    src="/Icon-Reviews.svg"
                    alt="Reviews Icon"
                    className="size-[25px] w-[20%] mr-2"
                  />
                  <span className="text-left w-[80%]">Mənim rəylərim</span>
                </a>
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
    </header>
  );
}
