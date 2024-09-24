import { useState } from "react";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterBySize from "./FilterBySize";
import FilterProductSubCategories from "./FilterProductCategories ";

export default function ProductsSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      {/* Hamburger Menu Icon */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 text-gray-700 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 w-[244px] h-[100vh] overflow-y-auto md:sticky top-0 space-y-6 border border-gray-200 shadow-md rounded-lg p-4 bg-white z-50 transition-transform duration-300 ease-in-out`}
      >
        <FilterProductSubCategories />
        <FilterByPrice />
        <FilterByColor />
        <FilterBySize />
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
