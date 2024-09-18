import { Link } from "react-router-dom";
import data from "../../data/categoriesData";

export default function CategorySection() {
  return (
    <section>
      <div className="mt-[40px] mb-[100px] flex justify-between">
        {/* LEFTBOX */}
        <div className="mr-[16px] w-[217px] relative h-[344px]">
          <ul>
            {data.kateqoriyalar.map((item, index) => (
              <div
                key={index}
                className="relative group flex items-center justify-between py-[13px] hover:bg-gray-100 px-[5px]"
              >
                <div className="flex justify-between items-center cursor-pointer w-[217px]">
                  <Link to={`/products/${item.kateqoriya_adı}`}>
                    <li className="text-[16px] text-center text-[#000000] font-normal">
                      {item.kateqoriya_adı}
                    </li>
                  </Link>

                  <figure>
                    <img
                      src="/right.svg"
                      className="object-cover cursor-pointer"
                    />
                  </figure>
                </div>

                {/* Dropdown content */}
                <div className="absolute left-[217px] top-0 w-[1000px] p-[10px] bg-white border border-gray-300 shadow-lg hidden group-hover:block z-30 rounded-lg">
                  <div className="grid grid-cols-4 gap-6">
                    {item.subkateqoriyalar.map((subkateqoriya, subIndex) => (
                      <Link
                        to={`/subcategories/${subkateqoriya.subkateqoriya_adı}`}
                        key={subIndex}
                        className="px-4 py-3 w-full text-[14px] text-[#333] hover:bg-gray-100 hover:text-[#007BFF] transition-all duration-300 ease-in-out cursor-pointer rounded-md shadow-sm"
                      >
                        {subkateqoriya.subkateqoriya_adı}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>

        {/* RIGHTBOX */}
        <div className="relative text-white bg-black w-full max-w-[892px] h-[344px] overflow-hidden z-10">
          <div className="flex space-x-[40px]">
            <div className="w-[294px] flex flex-col pt-[58px] pl-[64px]">
              <div className="flex space-x-[14px] mb-[10px] items-center">
                <div className="w-[40px] h-[49px]">
                  <img src="/apple.svg" className="object-cover" />
                </div>
                <p className="font-normal text-[16px] text-[#FAFAFA]">
                  iPhone 14 Seriyası
                </p>
              </div>
              <p className="text-[48px] text-[#FAFAFA] font-semibold w-[294px]">
                10%-ə qədər Endirim
              </p>
              {/* <div className="flex items-center mt-[22px] space-x-2">
                <button className="underline text-[16px] text-#FAFAFA font-medium">
                  İndi Al
                </button>
                <div className="size-[24px]">
                  <img
                    className="object-cover"
                    src="/icons_arrow-right.svg"
                  />
                </div>
              </div> */}
            </div>

            <div className="w-[496px] h-[310px] pt-[16px]">
              <img src="/iphone.png" className="object-cover" alt="phone" />
            </div>
          </div>
          <div className="flex space-x-3 items-center w-[110px] mx-auto">
            <div className="size-[12px] rounded-full bg-gray-200"></div>
            <div className="size-[12px] rounded-full bg-gray-200"></div>
            <div className="size-[12px] rounded-full bg-gray-200"></div>
            <div className="size-[12px] rounded-full bg-gray-200"></div>
            <div className="size-[12px] rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
