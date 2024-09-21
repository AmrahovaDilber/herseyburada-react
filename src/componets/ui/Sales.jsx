import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/swiper-bundle.css"; // Ensure you import Swiper's CSS
import { useContextApp } from "../../context/AppContext";
import ProductItem from "./ProductItem";
import TitleSubtitle from "./TitleSubtitle";
import { useRef } from "react";

export default function Sales() {
  const { sortedDiscountedProducts } = useContextApp();
  const slicedArr = sortedDiscountedProducts.slice(0, 4);

  const btnLeft = useRef(null)
  const btnRight=useRef(null)
  return (
    <div>
      <TitleSubtitle subtitle="Trendde" title="Endirimler">
        <div className="space-x-[8px] flex items-center">
          <figure ref={btnLeft}  className="bg-[#F5F5F5] disabled:opacity-20 size-[46px] rounded-full text-black flex justify-center items-center cursor-pointer">
            <img src="/icons_arrow-left.svg" alt="Previous" />
          </figure>
          <figure ref={btnRight} className="bg-[#F5F5F5] disabled:opacity-20 size-[46px] rounded-full text-black flex justify-center items-center cursor-pointer">
            <img src="/icons_arrow-right.svg" alt="Next" />
          </figure>
        </div>
      </TitleSubtitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={35}
        // navigation={true}
        // navigation={{
        //   prevEl: btnLeft.current,
        //   nextEl: btnRight.current,
        // }}
        modules={[Navigation]}
        className="mySwiper"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = btnLeft.current;
          swiper.params.navigation.nextEl = btnRight.current;
     }}
      >
        {slicedArr.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem key={index} product={product} />
          </SwiperSlide>
        ))}  
      </Swiper>
      <div className="mx-auto w-[234px] my-[60px]">
        {/* <button className="h-[56px] w-[234px] bg-[#FF7518] hover:bg-[#e07575] rounded-md text-[#FAFAFA] text-[16px] font-medium text-center">
          Hamısını göstər
        </button> */}
      </div>
    </div>
  );
}
