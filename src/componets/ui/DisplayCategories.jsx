import { useEffect, useState } from "react";
import { fetchCategories } from "../../api/api";
import { Link, useLocation } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

const iconMapping = {
  IoWomanSharp: IoIcons.IoWomanSharp,
  IoIosMan: IoIcons.IoIosMan,
  IoMdPhonePortrait: IoIcons.IoMdPhonePortrait,
  FaHome: FaIcons.FaHome,
  FaStore: FaIcons.FaStore,
  MdOutlineSportsTennis: MdIcons.MdOutlineSportsTennis,
  FaCar: FaIcons.FaCar,
  GiLips: GiIcons.GiLips,
};

const DisplayCategories = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const currentPath = location.pathname;
  const { selectedCategories, handleCategoryChange } = useContextApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error in DisplayCategories:", error.message);
      }
    };

    getCategories();
  }, []);

  return (
    <ul
      className={`${
        mobileMenuOpen ? "block" : "hidden"
      } relative group lg:block bg-transparent shadow-md lg:shadow-none rounded-lg lg:rounded-none`}
    >
      {categories.map((item, index) => {
        const isActive =
          currentPath.includes(`/products/${item.categoryName}`) ||
          selectedCategories.includes(item.categoryName);


        const IconComponent = iconMapping[item.icon];

        return (
          <div
            key={index}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div
              className={`flex items-center justify-between py-3 pr-4 hover:bg-gray-100 dark:hover:bg-[#202020] cursor-pointer`}
            >
              <Link
                to={`/products/${item.categoryName}`}
                onClick={() => handleCategoryChange(item.categoryName)}
                className="group block rounded-lg p-[5px] transition duration-300 ease-in-out"
              >
                <li
                  className={`text-sm lg:text-base flex items-center gap-3 rounded-lg`}
                >
                  {IconComponent && (
                    <span className="text-[#f1892f] group-hover:text-[#f27314] text-lg">
                      <IconComponent />
                    </span>
                  )}

                  <span>{item.categoryName}</span>
                </li>
              </Link>
              <MdOutlineKeyboardArrowRight className="w-7 h-7 object-contain dark:text-[#fff]" />
            </div>

            {/* Dropdown content */}
            {(activeDropdown === index || (mobileMenuOpen && isActive)) && (
              <div className="lg:absolute lg:left-full lg:top-0 w-full lg:w-[calc(100vw)] max-w-[1050px] p-4 bg-white dark:bg-[#202020] border border-gray-300 shadow-lg z-30 h-[500px] rounded-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {item.subkateqoriyalar?.map((subkateqoriya, subIndex) => {
                    const isSubActive = currentPath.includes(
                      `/products/${item.categoryName}/${subkateqoriya.subkateqoriya_adı}`
                    );
                    return (
                      <Link
                        to={`/products/${item.categoryName}/${subkateqoriya.subkateqoriya_adı}`}
                        key={subIndex}
                        className={`px-3 py-2 text-xs lg:text-sm ${
                          isSubActive
                            ? "bg-blue-100 text-[#FF7518] font-semibold"
                            : "text-[#333] dark:text-[#fff] hover:bg-gray-700 hover:text-[#FF7518]"
                        } transition-all duration-300 ease-in-out cursor-pointer rounded-md`}
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
  );
};

export default DisplayCategories;
