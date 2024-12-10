import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TitleSubtitle from "./TitleSubtitle";
import { useContextApp } from "../../context/AppContext";
import ProductItem from "./ProductItem";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

export default function BestSellers() {
  const { sortedSellerProducts } = useContextApp();
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="sales-container relative mt-20">
      <TitleSubtitle subtitle="Bu ay" title="Ən çox satılanlar">
        <div className="space-x-2 flex items-center">
          <button
            onClick={handlePrevClick}
            className="bg-[#F5F5F5] w-10 h-10 md:w-12 md:h-12 rounded-full text-black flex justify-center items-center cursor-pointer"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-[#F5F5F5] w-10 h-10 md:w-12 md:h-12 rounded-full text-black flex justify-center items-center cursor-pointer"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </TitleSubtitle>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="w-full"
      >
        {sortedSellerProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
