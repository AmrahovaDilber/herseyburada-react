import Products from "./Products";
import ProductsSidebar from "./ProductsSidebar";

function Filter() {
  return (
    <div className="flex h-[100vh]">
      {/* Sidebar */}
      <ProductsSidebar></ProductsSidebar>
      {/* Main Content */}
      <div className="flex-1 ml-8">
        {/* Results Summary and Sorting */}

        {/* Product Listing */}
        <Products></Products>
      </div>
    </div>
  );
}

export default Filter;

{
  /* <div className="flex justify-between items-center mb-8 border border-gray-300 shadow-lg p-4 rounded-lg bg-white">
          <div className="text-gray-600 flex items-center">
            <img src="/grid.svg" alt="Grid Icon" className="mr-2" />
            <span className="font-medium">
              72 məhsuldandan 1-20-a qədər nəticələr göstərilir
            </span>
          </div>
          <div className="relative">
            <button
              id="filterButton"
              className="bg-white border border-gray-300 rounded-md py-2 px-4 flex items-center space-x-2"
            >
              <span>Populyar</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 ease-in-out transform rotate-0 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <ul
              id="dropdownMenu"
              className="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10"
            >
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Ən ucuz
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Ən bahalı
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer active">
                Populyar
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Ən böyük endirimli
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Yeniliklər
              </li>
            </ul>
          </div>
        </div> */
}
{
  /* Pagination */
}
//  <Pagination />
