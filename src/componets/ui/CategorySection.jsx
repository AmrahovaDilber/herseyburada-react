import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import data from "../../data/categoriesData";
import Slider from "./Slider";
import { useContextApp } from "../../context/AppContext";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function CategorySection() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { selectedCategories, handleCategoryChange } = useContextApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="mt-8 lg:mt-[40px] w-full  mb-[100px] ">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* LEFTBOX */}
        <div className="w-full lg:w-[19%]   mb-6 lg:mb-0">
          {/* Mobile versiya buttonu */}
          <button
            className="lg:hidden w-full bg-[#FF7518] text-white py-4 px-4 rounded "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            { "Məhsul Kataloqu" }
          </button>
          <ul
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } relative group lg:block bg-transparent shadow-md lg:shadow-none rounded-lg lg:rounded-none`}
          >
            {data.kateqoriyalar.map((item, index) => {
              const isActive =
                currentPath.includes(`/products/${item.kateqoriya_adı}`) ||
                selectedCategories.includes(item.kateqoriya_adı);
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div
                    className={`flex items-center justify-between py-3 pr-4 hover:bg-gray-100  dark:hover:bg-[#202020] cursor-pointer
                    }`}
                  >
                    <Link
                      to={`/products/${item.kateqoriya_adı}`}
                      onClick={() => handleCategoryChange(item.kateqoriya_adı)}
                      className="group block rounded-lg   p-[5px] transition duration-300 ease-in-out"
                    >
                             {/* ${
                          isActive
                            ? "text-blue-600 font-semibold "
                            : "text-[#1a1a1a] font-normal"}   */}
                      <li
                        className={`text-sm lg:text-base flex items-center gap-3 rounded-lg
                    
                             `}
                      >
                        <span className="text-[#f1892f] group-hover:text-[#f27314] text-lg">
                          <item.icon />
                        </span>

                        <span>{item.kateqoriya_adı}</span>
                      </li>
                    </Link>
                    <MdOutlineKeyboardArrowRight    className="w-7 h-7 object-contain dark:text-[#fff]"/>

                  </div>

                  {/* Dropdown content */}
                  {(activeDropdown === index ||
                    (mobileMenuOpen && isActive)) && (
                    <div className="lg:absolute lg:left-full lg:top-0 w-full lg:w-[calc(100vw)] max-w-[1050px] p-4 bg-white dark:bg-[#202020] border border-gray-300 shadow-lg z-30 h-[500px] rounded-lg">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {item.subkateqoriyalar.map(
                          (subkateqoriya, subIndex) => {
                            const isSubActive = currentPath.includes(
                              `/products/${item.kateqoriya_adı}/${subkateqoriya.subkateqoriya_adı}`
                            );
                            return (
                              <Link
                                to={`/products/${item.kateqoriya_adı}/${subkateqoriya.subkateqoriya_adı}`}
                                key={subIndex}
                                className={`px-3 py-2 text-xs lg:text-sm ${
                                  isSubActive
                                    ? "bg-blue-100 text-[#FF7518] font-semibold"
                                    : "text-[#333] dark:text-[#fff]  hover:bg-gray-700 hover:text-[#FF7518]"
                                } transition-all duration-300 ease-in-out cursor-pointer rounded-md `}
                              >
                                {subkateqoriya.subkateqoriya_adı}
                              </Link>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </ul>
        </div>


        {/* RIGHTBOX */}
        <div className="w-full lg:w-[81%] relative z-10">
      <Slider />
    </div>
      </div>
    </div>
  );
}