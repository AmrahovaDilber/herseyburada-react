function Filter() {
  return (
    <div className="flex">
      {/* Filters Section */}
      <div className="w-[244px] h-[100vh] overflow-y-auto sticky top-0 space-y-6 border border-gray-200 shadow-md rounded-lg p-4 bg-white z-0">
        <div>
          <h2 className="font-bold mb-2">Product Categories</h2>
          <ul className="space-y-1 h-[200px] overflow-y-auto">
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> Men
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> Women
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> Kids
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> Bags
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> Belts
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />{" "}
                Wallets
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />{" "}
                Watches
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />{" "}
                Accessories
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> Winter
                Wear
              </label>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Filter by Price</h2>
          <div className="space-y-2">
            <p>Price: $0 - $2000</p>
            <input type="range" min={0} max={2000} className="w-[200px]" />
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2">Filter by Color</h2>
          <ul className="space-y-1 h-[170px] overflow-y-auto">
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <span className="bg-red-600 w-4 h-4 rounded mr-2" /> Red (10)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <span className="bg-blue-600 w-4 h-4 rounded mr-2" />
                Blue (14)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <span className="bg-orange-500 w-4 h-4 rounded mr-2" />
                Orange (8)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <span className="bg-black w-4 h-4 rounded mr-2" /> Black (9)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <span className="bg-green-600 w-4 h-4 rounded mr-2" />
                Green (4)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <span className="bg-yellow-500 w-4 h-4 rounded mr-2" />
                Yellow (2)
              </label>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Filter by Size</h2>
          <ul className="space-y-1 h-[170px] overflow-y-auto">
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> S (6)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> M (20)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> L (7)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> XL
                (16)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> 2XL
                (10)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> 3XL
                (2)
              </label>
            </li>
            <li className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" /> 4XL
                (2)
              </label>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content Section */}
      <div className="flex-1 ml-8">
        {/* Results Summary and Sorting */}
        <div className="flex justify-between items-center mb-8 border border-gray-300 shadow-lg p-4 rounded-lg bg-white">
          <div className="text-gray-600 flex">
            <img src="assets/img/grid.svg" className="mr-[8px]" />
            <span className="font-medium">
              72 məhsuldandan 1-20-a qədər nəticələr göstərilir
            </span>
          </div>
          <div className="relative">
            <div className="flex items-center">
              <span className="mr-2">Əvvələ:</span>
              <button
                id="filterButton"
                className="bg-white border border-gray-300 rounded-md py-2 px-4 flex items-center"
              >
                <span>Populyar</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-400 ease-in-out transform"
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
            </div>
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
          {/*HƏR ŞEY BURADA BAŞLAYIR, BURDAN AŞAĞI BEŞ SIRA MIHSUL LİSTİNGİ GEDİR*/}
          {/*1336-CI LİNYAYA QƏDƏR*/}
          <div>
            <div className="relative flex items-center justify-center h-[250px] bg-[#F5F5F5] relative">
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[190px] h-[180px]">
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] shrink-0 absolute top-[12px] right-[12px] flex items-center justify-center">
                <img
                  src="./assets/img/heart.svg"
                  className="object-cover shrink-0"
                />
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
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
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
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
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
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
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
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
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
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
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
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
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
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
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
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
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
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
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
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
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
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
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
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
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
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
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
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
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
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
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
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </div>
              <div className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
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
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                  <div className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </div>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-end space-x-2 text-white mt-[36px]">
          <button className="text-gray-400">←</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            1
          </button>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">
            2
          </button>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">
            3
          </button>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">
            4
          </button>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">
            5
          </button>
          <button className="text-gray-400">→</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
