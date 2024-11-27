import { useState } from "react";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterBySize from "./FilterBySize";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import FilterProductSubCategories from "./FilterProductCategories ";

export default function ProductsSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 fixed top-18 left-2 text-gray-700 dark:text-gray-200 focus:outline-none z-40"
        aria-label="Toggle Sidebar"
      >
        <HiOutlineMenuAlt3 className="w-7 h-7" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-[100vh] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-[244px] overflow-y-auto md:sticky top-0 space-y-6 border border-gray-200 dark:border-gray-700 shadow-md p-4 bg-white dark:bg-[#202020] z-50 transition-transform duration-300 ease-in-out`}
      >
        {/* Filters */}
        <FilterProductSubCategories />
        <FilterByPrice />
        <FilterByColor />
        <FilterBySize />
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        ></div>
      )}
    </>
  );
}
