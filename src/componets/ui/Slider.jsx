import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import banner1 from "../../../public/banner1.png";
import banner2 from "../../../public/banner2.png";
import banner3 from "../../../public/banner3.png";
import banner4 from "../../../public/banner4.png";

import "swiper/css";
import "swiper/css/pagination";
import data from "../../data/categoriesData";

export default function Slider() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto md:h-[480px]">
      
      <div className="col-span-1 lg:col-span-3 h-[400px] lg:h-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          className="w-full h-full"
          autoplay={{ delay: 3000 }}
        >
        
          {data.kateqoriyalar.slice(0, 1).map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              <Link to={`/products/${item.kateqoriya_adı}`}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/girl2.png"
                    alt="Discount Banner"
                    className="absolute inset-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg opacity-80 z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-5"></div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 md:p-8 z-10">
                    <div className="max-w-xs sm:max-w-md lg:max-w-lg">
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white drop-shadow-lg">
                        Qadın Məhsullarına Böyük Endirim!
                      </h1>
                      <p className="text-sm sm:text-base mb-4 text-white drop-shadow-lg">
                        Seçilmiş qadın məhsullarında 50%-ə qədər endirim!
                      </p>
                      <button className="bg-white text-violet-600 px-3 py-2 sm:px-5 sm:py-2 rounded-full font-medium hover:bg-gray-100">
                        Daha Çox Məlumat →
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}

   

          <SwiperSlide className="h-full">
            <Link to="/products/Kişi">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/man3.png"
                  alt="Discount Banner for Men"
                  className="absolute inset-0 w-full h-full object-cover object-right rounded-bl-lg rounded-br-lg z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-gray-900/50 to-transparent z-5"></div>
                <div className="absolute bottom-1/2 right-0 transform translate-y-1/2 p-4 md:p-8 z-10 text-right">
                  <div className="max-w-xs sm:max-w-md lg:max-w-lg">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 text-amber-300 drop-shadow-md">
                      Kişi Məhsullarında Xüsusi Təkliflər!
                    </h1>
                    <p className="text-sm sm:text-base mb-4 text-amber-200 drop-shadow-sm">
                      Seçilmiş kişi məhsullarında 40%-ə qədər endirim!
                    </p>
                    <button className="bg-amber-600 text-white px-3 py-2 sm:px-5 sm:py-2 rounded-lg font-semibold hover:bg-amber-500">
                      Daha Çox Məlumat →
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

  
      <div className="hidden lg:grid grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 gap-4 h-[200px] lg:h-full">
        <div className="relative h-full">
          <Link to="/products/Qadın">
            <img
              src={banner1}
              alt="Ad 1"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </Link>
        </div>
        <div className="relative h-full">
          <Link to="/cartpage">
            <img
              src={banner2}
              alt="Ad 2"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </Link>
        </div>
        <div className="relative h-full">
          <Link to="/products/Elektronika">
            <img
              src={banner3}
              alt="Ad 3"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
