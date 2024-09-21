import { Link } from "react-router-dom";
import data from "../../data/categoriesData";
import Slider from "./Slider";

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
                        to={`/products/${item.kateqoriya_adı}/${subkateqoriya.subkateqoriya_adı}`}
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
        <Slider></Slider>
      </div>
    </section>
  );
}
