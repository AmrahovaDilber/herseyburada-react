function ProductDetails() {
  return (
    <>
      <section className="w-[1200px] mx-auto flex justify-between mt-[50px]">
        <div className="flex gap-x-[43px]">
          <div className="flex flex-col gap-y-[16px]">
            <figure className="w-[170px] flex-1 rounded-[4px] border cursor-pointer">
              <img
                className="object-cover"
                src="https://images-na.ssl-images-amazon.com/images/I/51zyUeBrFgL._AC_UL600_SR600,600_.jpg"
                alt=""
              />
            </figure>
            <figure className="w-[170px] flex-1 rounded-[4px] border cursor-pointer">
              <img
                className="object-cover"
                src="https://cdn.mobilesyrup.com/wp-content/uploads/2021/10/xbox-canadian-controller.jpg"
                alt=""
              />
            </figure>
            <figure className="w-[170px] flex-1 rounded-[4px] border cursor-pointer">
              <img
                className="object-cover"
                src="https://m.media-amazon.com/images/I/51EfS8UJe9L._AC_UF894,1000_QL80_.jpg"
                alt=""
              />
            </figure>
            <figure className="w-[170px] flex-1 rounded-[4px] border cursor-pointer">
              <img
                className="object-cover"
                src="https://i.ebayimg.com/images/g/2pwAAOSwu55kdZEk/s-l1200.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="w-[500px] border rounded-[4px]">
            <figure>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51zyUeBrFgL._AC_UL600_SR600,600_.jpg"
                alt=""
              />
            </figure>
          </div>
        </div>
        <div className="w-[400px]">
          <div>
            <div className="text-[24px] font-[600] mb-[16px]">
              Havic HV G-92 Gamepad
            </div>
            <div className="flex items-center mb-[16px] gap-x-[16px]">
              <div className="inline-flex text-[16px] gap-x[5px]">
                <i className="fa-solid text-yellow-400 fa-star" />
                <i className="fa-solid text-yellow-400 fa-star" />
                <i className="fa-solid text-yellow-400 fa-star" />
                <i className="fa-regular fa-star" />
                <i className="fa-regular fa-star" />
              </div>
              <div className="text-[14px]">
                <span className="opacity-50 text-[14px]">(150 Reviews)</span>
              </div>
              <div className="text-[#00FF66] text-[14px] border-l-[1px]">
                <span className="ml-[16px]">In stock</span>
              </div>
            </div>
            <div className="text-[24px] mb-[24px]">$192.00</div>
            <div className="text-[14px]  mb-[24px] border-b-[1px]">
              <p className=" mb-[24px]">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install &amp; mess free
                removal Pressure sensitive.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="text-2xl">
              <p>Colours:</p>
            </div>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="color"
                defaultValue="blue"
                className="hidden peer"
              />
              <div className="w-8 h-8 rounded-full bg-[#A0BCE0] border border-black flex items-center justify-center peer-checked:p-2 peer-checked:w-8 peer-checked:h-8 peer-checked:bg-[##A0BCE0] peer-checked:border-black peer-checked:ring-2 peer-checked:ring-black cursor-pointer transition-all duration-200">
                <div className="hidden peer-checked:block w-4 h-4 rounded-full bg-[#A0BCE0]" />
              </div>
            </label>
            <label className="inline-flex items-center ml-2">
              <input
                type="radio"
                name="color"
                defaultValue="red"
                className="hidden peer"
              />
              <div className="w-8 h-8 rounded-full bg-[#E07575] border border-black flex items-center justify-center peer-checked:w-8 peer-checked:h-8 peer-checked:bg-[#E07575] peer-checked:border-black peer-checked:ring-2 peer-checked:ring-black cursor-pointer transition-all duration-200">
                <div className="hidden peer-checked:block w-4 h-4 rounded-full bg-[#E07575]" />
              </div>
            </label>
          </div>
          <div className="flex items-center mb-[24px]">
            <p className="text-xl mr-6">Size:</p>
            <div className="flex">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                htmlFor="size-xs"
                className="inline-flex items-center justify-center border w-8 h-8 rounded mr-4 cursor-pointer  hidden:w-8 peer-checked:h-8 hidden:bg-transparent hidden:border-black hidden:ring-2 hidden:ring-black cursor-pointer transition-all duration-200"
              >
                <p className="text-sm">XS</p>
              </label>
              <input type="radio" name="size" id="size-s" className="hidden" />
              <label
                htmlFor="size-s"
                className="inline-flex items-center justify-center border w-8 h-8 rounded mr-4 cursor-pointer"
              >
                <p className="text-sm">S</p>
              </label>
              <input type="radio" name="size" id="size-m" className="hidden" />
              <label
                htmlFor="size-m"
                className="inline-flex items-center justify-center border w-8 h-8 rounded mr-4 cursor-pointer"
              >
                <p className="text-sm">M</p>
              </label>
              <input type="radio" name="size" id="size-l" className="hidden" />
              <label
                htmlFor="size-l"
                className="inline-flex items-center justify-center border w-8 h-8 rounded mr-4 cursor-pointer"
              >
                <p className="text-sm">L</p>
              </label>
              <input type="radio" name="size" id="size-xl" className="hidden" />
              <label
                htmlFor="size-xl"
                className="inline-flex items-center justify-center border w-8 h-8 rounded cursor-pointer"
              >
                <p className="text-sm">XL</p>
              </label>
            </div>
          </div>
          <div className="flex gap-[16px] justify-between items-center">
            <div className="w-[159px] h-[44px] rounded-[4px] overflow-hidden flex items-center justify-center">
              <div
                className="inline-flex items-center justify-center w-[40px] h-[44px] border cursor-pointer"
                id="decrease"
              >
                <p className="text-[24px]">-</p>
              </div>
              <div className="inline-flex items-center justify-center h-[44px] grow border">
                <span className="text-[24px]" id="count" />
              </div>
              <div
                className="inline-flex items-center justify-center w-[40px] h-[44px] bg-[#FF7518] text-white cursor-pointer"
                id="increase"
              >
                <p className="text-[24px]">+</p>
              </div>
            </div>
            <div className="w-[165px] py-[10px] flex justify-center bg-[#FF7518] text-white rounded-[4px]">
              <button>
                <a href="./cart.html">Buy Now</a>
              </button>
            </div>
            <button className="size-[40px] rounded-[4px] border inline-flex items-center justify-center">
              <i className="text-[20px] fa-regular fa-heart" id="like" />
            </button>
          </div>
          <div className="w-full h-[180px] border rounded-[4px] mt-[40px]">
            <div className="flex items-center gap-x-[16px] py-[24px] px-[16px] border-b-[1px]">
              <div>
                <i className="flex items-center justify-center pt-[5px] fa-solid fa-truck text-[30px]" />
              </div>
              <div>
                <h4 className="text-[16px] font-[500]">Free Delivery</h4>
                <p className="text-[12px] font-[500]">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-[16px] py-[24px] px-[16px]">
              <div>
                <img src="./assets/img/Icon-return.svg" alt="" />
              </div>
              <div>
                <h4 className="text-[16px] font-[500]">Return Delivery</h4>
                <p className="text-[12px] font-[500]">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-[#E3E3E3] w-[1200px] mx-auto mt-[120px] mb-[120px]">
        <div className="flex flex-col mb-[40px]">
          <div className="flex items-center space-x-[10px] mb-[24px]">
            <div className="w-[20px] h-[40px] bg-[#FF7518] rounded-md" />
            <p className="text-[16px] text-[#FF7518] font-semibold">Trenddə</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-[35px]">
          <div className=" h-[360px] relative shadow-lg">
            <a
              href="./details.html"
              className="relative  flex items-center justify-center h-[250px] bg-[#F5F5F5] group"
            >
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <figure className="w-[190px] h-[180px]">
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </figure>
              <figure className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
              </figure>
              <div className="absolute bottom-0 py-[8px] hidden group-hover:flex space-x-[3px] items-center justify-center w-full bg-[#000000]">
                <figure className="size-[24px] text-white">
                  <img src="assets/img/sebet.svg" className="object-cover" />
                </figure>
                <p className="text-[#FFFF] text-[12px] font-normal">
                  Add To Cart
                </p>
              </div>
            </a>
            <div className="p-3 flex flex-col">
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
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
              </div>
            </div>
          </div>
          <div className=" h-[360px] relative shadow-lg">
            <a
              href="./details.html"
              className="relative  flex items-center justify-center h-[250px] bg-[#F5F5F5] group"
            >
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <figure className="w-[190px] h-[180px]">
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </figure>
              <figure className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
              </figure>
              <div className="absolute bottom-0 py-[8px] hidden group-hover:flex space-x-[3px] items-center justify-center w-full bg-[#000000]">
                <figure className="size-[24px] text-white">
                  <img src="assets/img/sebet.svg" className="object-cover" />
                </figure>
                <p className="text-[#FFFF] text-[12px] font-normal">
                  Add To Cart
                </p>
              </div>
            </a>
            <div className="p-3 flex flex-col">
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
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
              </div>
            </div>
          </div>
          <div className=" h-[360px] relative shadow-lg">
            <a
              href="./details.html"
              className="relative  flex items-center justify-center h-[250px] bg-[#F5F5F5] group"
            >
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <figure className="w-[190px] h-[180px]">
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </figure>
              <figure className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
              </figure>
              <div className="absolute bottom-0 py-[8px] hidden group-hover:flex space-x-[3px] items-center justify-center w-full bg-[#000000]">
                <figure className="size-[24px] text-white">
                  <img src="assets/img/sebet.svg" className="object-cover" />
                </figure>
                <p className="text-[#FFFF] text-[12px] font-normal">
                  Add To Cart
                </p>
              </div>
            </a>
            <div className="p-3 flex flex-col">
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
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
              </div>
            </div>
          </div>
          <div className=" h-[360px] relative shadow-lg">
            <a
              href="./details.html"
              className="relative  flex items-center justify-center h-[250px] bg-[#F5F5F5] group"
            >
              <div className="w-[55px] h-[26px] bg-[#FF7518] rounded-md absolute top-[12px] left-[12px]">
                <p className="font-normal text-[12px] text-center py-1 text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <figure className="w-[190px] h-[180px]">
                <img
                  src="./assets/img/item.svg"
                  className="object-cover"
                  alt="img"
                />
              </figure>
              <figure className="size-[34px] rounded-full bg-[#FFFFFF] absolute top-[12px] right-[12px] flex items-center justify-center">
                <img src="./assets/img/heart.svg" className="object-cover" />
              </figure>
              <div className="absolute bottom-0 py-[8px] hidden group-hover:flex space-x-[3px] items-center justify-center w-full bg-[#000000]">
                <figure className="size-[24px] text-white">
                  <img src="assets/img/sebet.svg" className="object-cover" />
                </figure>
                <p className="text-[#FFFF] text-[12px] font-normal">
                  Add To Cart
                </p>
              </div>
            </a>
            <div className="p-3 flex flex-col">
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
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                  <figure className="w-[20px]">
                    <img className="object-cover" src="./assets/img/star.svg" />
                  </figure>
                </div>
                <p className="text-[#7F7F7F] font-semibold text-[14px]">(88)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
