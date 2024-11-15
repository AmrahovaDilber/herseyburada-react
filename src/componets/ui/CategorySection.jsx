import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import data from "../../data/categoriesData";
import Slider from "./Slider";
import { useContextApp } from "../../context/AppContext";

export default function CategorySection() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { selectedCategories, handleCategoryChange } = useContextApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <section className=" mx-auto ">
      <div className="mt-8 lg:mt-[40px] mb-8 lg:mb-[100px] flex flex-col lg:flex-row">
        {/* LEFTBOX */}
        <div className="w-full lg:w-[417px] lg:mr-[36px] mb-6 lg:mb-0">
          <button
            className="lg:hidden w-full bg-[#FF7518] text-white py-2 px-4 rounded mb-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "Close Categories" : "Open Categories"}
          </button>
          <ul className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block bg-transparent shadow-md lg:shadow-none rounded-lg lg:rounded-none`}>
            {data.kateqoriyalar.map((item, index) => {
              const isActive = currentPath.includes(`/products/${item.kateqoriya_adı}`) ||
                selectedCategories.includes(item.kateqoriya_adı);
              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className={`flex items-center justify-between py-3 pr-4 hover:bg-gray-100 cursor-pointer ${
                    isActive ? 'bg-blue-100' : ''
                  }`}>
                    <Link 
                      to={`/products/${item.kateqoriya_adı}`}
                      onClick={() => handleCategoryChange(item.kateqoriya_adı)}
                    >
                      <li className={`text-sm lg:text-base ${
                        isActive ? 'text-blue-600 font-semibold' : 'text-[#000000] font-normal'
                      }`}>
                        {item.kateqoriya_adı}
                      </li>
                    </Link>
                    <img
                      src="/right.svg"
                      className="w-4 h-4 object-contain"
                      alt="Right arrow"
                    />
                  </div>
                  
                  {/* Dropdown content */}
                  {(activeDropdown === index || (mobileMenuOpen && isActive)) && (
                    <div className="lg:absolute lg:left-full lg:top-0 w-full lg:w-[calc(100vw-280px)] max-w-[980px] p-4 bg-white border border-gray-300 shadow-lg z-30 rounded-lg">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {item.subkateqoriyalar.map((subkateqoriya, subIndex) => {
                          const isSubActive = currentPath.includes(`/products/${item.kateqoriya_adı}/${subkateqoriya.subkateqoriya_adı}`);
                          return (
                            <Link
                              to={`/products/${item.kateqoriya_adı}/${subkateqoriya.subkateqoriya_adı}`}
                              key={subIndex}
                              className={`px-3 py-2 text-xs lg:text-sm ${
                                isSubActive
                                  ? 'bg-blue-100 text-[#FF7518] font-semibold'
                                  : 'text-[#333] hover:bg-gray-100 hover:text-[#FF7518]'
                              } transition-all duration-300 ease-in-out cursor-pointer rounded-md shadow-sm`}
                            >
                              {subkateqoriya.subkateqoriya_adı}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
        
        {/* RIGHTBOX */}
        <div className="max-w-[930px] lg:flex-grow">
          <Slider />
        </div>
      </div>
    </section>
  );
}