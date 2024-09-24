import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slider() {
  return (
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
      autoplay={{ delay: 3000 }} 
      className="w-full"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative text-white  bg-black w-full h-[344px] overflow-hidden z-10">
          <div className="flex space-x-[40px]">
            <div className="w-[294px] flex flex-col pt-[58px] pl-[64px]">
              <div className="flex space-x-[14px] mb-[10px] items-center">
                <div className="w-[40px] h-[49px]">
                  <img src="/apple.svg" className="object-cover" alt="apple" />
                </div>
                <p className="font-normal text-[16px] text-[#FAFAFA]">
                  iPhone 14 Seriyası
                </p>
              </div>
              <p className="text-[48px] text-[#FAFAFA] font-semibold w-[294px]">
                10%-ə qədər Endirim
              </p>
            </div>

            <div className="w-[496px] h-[310px] pt-[16px]">
              <img src="/iphone.png" className="object-cover" alt="phone" />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative text-white  bg-black w-full m h-[344px] overflow-hidden z-10">
          <div className="flex space-x-[40px]">
            <div className="w-[294px] flex flex-col pt-[58px] pl-[64px]">
              <div className="flex space-x-[14px] mb-[10px] items-center">
                <div className="w-[40px] h-[49px]">
                  <img src="/apple.svg" className="object-cover" alt="apple" />
                </div>
                <p className="font-normal text-[16px] text-[#FAFAFA]">
                  iPhone 14
                </p>
              </div>
              <p className="text-[48px] text-[#FAFAFA] font-semibold w-[294px]">
                10%-ə qədər Endirim
              </p>
            </div>

            <div className="w-[496px] h-[310px] pt-[16px]">
              <img src="/iphone.png" className="object-cover" alt="phone" />
            </div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
}
