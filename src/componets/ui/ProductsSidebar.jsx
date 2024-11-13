import { useState } from "react";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterBySize from "./FilterBySize";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import FilterProductSubCategories from "./FilterProductCategories ";

export default function ProductsSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 fixed left-0   text-gray-700 focus:outline-none"
      >
        <HiOutlineMenuAlt3 className="w-7 h-7" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0 " : "-translate-x-full"
        }  md:translate-x-0 w-[244px]  h-[100vh] overflow-y-auto md:sticky top-[64px] sm:top-[70px] space-y-6 border border-gray-200 shadow-md rounded-lg p-4 bg-white  transition-transform duration-300 ease-in-out`}
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
    </>
  );
}
