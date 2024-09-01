import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterBySize from "./FilterBySize";
import FilterProductCategories from "./FilterProductCategories ";
import Pagination from "./Pagination";

function Filter() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[244px] h-[100vh] overflow-y-auto sticky top-0 space-y-6 border border-gray-200 shadow-md rounded-lg p-4 bg-white z-0">
        <FilterProductCategories />
        <FilterByPrice />
        <FilterByColor />
        <FilterBySize />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-8">
        {/* Results Summary and Sorting */}
        <div className="flex justify-between items-center mb-8 border border-gray-300 shadow-lg p-4 rounded-lg bg-white">
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
        </div>

        {/* Product Listing */}
        <div className="products border border-gray-200 grid grid-cols-3 gap-[30px] shadow-md rounded-lg p-4 bg-white">
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img src="/itemConsol.svg" className="object-cover" alt="img" />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="/heart.svg" className="object-cover shrink-0" />
              </div>
            </div>
            <div className="mt-[16px] flex flex-col">
              <p className="font-medium text-[16px] text-[#000000] mb-[8px]">
                HAVIT HV-G92 Gamepad
              </p>
              <div className="space-x-[12px] flex items-center mb-[8px]">
                <p className="text-[16px] font-medium text-[#FF7518]">$120</p>
                <p className="text-[16px] font-medium text-[#7F7F7F] line-through">
                  $160
                </p>
              </div>
              <div className="flex space-x-[8px] items-center">
                <div className="w-[100px] flex items-center space-x-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="w-[10px]">
                      <i className="text-[14px] fa-regular fa-star"></i>
                    </div>
                  ))}
                </div>
                <p className="text-[#7F7F7F] font-semibold">(88)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
}

export default Filter;
