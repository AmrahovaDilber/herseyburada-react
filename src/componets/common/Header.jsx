import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleAccountClick = (e) => {
    e.stopPropagation(); 
    setDropdownOpen((prev) => !prev); 
  };

  const handleOutsideClick = () => {
    setDropdownOpen(false); 
  };

  // Close the dropdown when clicking anywhere outside
  document.addEventListener("click", handleOutsideClick);

  return (
    <header className="border-b-[1px] sticky top-0 bg-white z-40">
      <div className="mt-[10px] w-[1200px] mx-auto flex justify-between items-center py-[20px]">
        <div className="flex justify-between items-center w-[830px] gap-x-[70px]">
          <div className="text-[24px] font-logo">
            <Link to={"/"}>
              <img src="/herseyburada.svg" alt="" />
            </Link>
          </div>
          <div className="flex justify-between items-center h-[40px] grow pr-[5px] pl-[14px] rounded-[14px] border">
            <input
              className="bg-transparent placeholder-black opacity-50 outline-none text-sm grow"
              type="text"
              placeholder="Nə ilə maraqlanırsınız?"
            />
            <Link
              to={"/filter"}
              className="size-[32px] bg-[#ff9130] rounded-[10px] cursor-pointer text-white inline-flex justify-center items-center hover:bg-[#e07575]"
            >
              <i className="fa-solid fa-magnifying-glass text-[13px]" />
            </Link>
          </div>
        </div>
        <nav className="w-[347px] flex justify-end gap-x-[16px] items-center gap-x-[24px]">
          <Link
            to={"/cartpage"}
            className="inline-flex items-center gap-x-[5px] hover:text-[#ff7518]"
          >
            <i className="fa-solid fa-cart-shopping text-[20px] " />
            <span className="text-[12px]">Səbətim</span>
          </Link>
          <Link
            to={"/wishlist"}
            className="inline-flex items-center gap-x-[5px] hover:text-[#ff7518]"
          >
            <i className="fa-solid fa-heart text-[20px] " />
            <span className="text-[12px]">Sevimlilərim</span>
          </Link>
          <div className="flex flex-col relative ">
            <div
              id="account"
              className="inline-flex cursor-pointer items-center gap-x-[5px] hover:text-[#ff7518]"
              onClick={handleAccountClick}
            >
              <i className="fa-solid fa-user text-[20px] " />
              <span className="text-[12px]">Hesabım</span>
            </div>
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute flex-col justify-start right-0 top-3 w-[200px] bg-white shadow-lg rounded-lg mt-2 py-2"
              >
                <Link
                  to={"/account"}
                  className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                >
                  <img
                    src="/public/Icon-user.svg"
                    className="size-[22px] w-[20%] mr-2"
                    alt=""
                  />
                  <span className="text-left w-[80%]">Hesabımın idarəsi</span>
                </Link>
                <Link
                  to={"/cartpage"}
                  className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                >
                  <img
                    src="/public/Icon-mallbag.svg"
                    alt=""
                    className="size-[24px] w-[20%] mr-2"
                  />
                  <span className="text-left w-[80%]">Mənim sifarişlərim</span>
                </Link>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                >
                  <img
                    src="/public/Icon-service.svg"
                    alt=""
                    className="size-[21px] w-[20%] mr-2"
                  />
                  <span className="text-left w-[80%]">Müştəri xidməti</span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                >
                  <img
                    src="/public/Icon-Reviews.svg"
                    alt=""
                    className="size-[25px] w-[20%] mr-2"
                  />
                  <span className="text-left w-[80%]">Mənim rəylərim</span>
                </a>
                <Link
                  to={"/login"}
                  className="flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#ff7518]"
                >
                  <img
                    src="/public/Icon-logout.svg"
                    alt=""
                    className="size-[24px] w-[20%] mr-2"
                  />
                  <span className="text-left w-[80%]">Çıxış et</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
