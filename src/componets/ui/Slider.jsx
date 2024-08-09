import React, { useState, useEffect } from 'react';

// Slider configuration
const sliderConfig = {
  slideWidth: 892, // Slide width in pixels
  autoSlideInterval: 4000, // Auto slide interval in milliseconds
  slides: [
    {
      imgSrc: "./assets/img/apple.svg",
      series: "iPhone 14 Seriyası",
      discount: "10%-ə qədər Endirim",
      buttonText: "İndi Al",
      buttonLink: "#",
      mainImgSrc: "./assets/img/phone.png",
    },
    {
      imgSrc: "./assets/img/apple.svg",
      series: "iPhone 13 Seriyası",
      discount: "15%-ə qədər Endirim",
      buttonText: "İndi Al",
      buttonLink: "#",
      mainImgSrc: "./assets/img/phone.png",
    },
    {
      imgSrc: "./assets/img/apple.svg",
      series: "iPhone 15 Seriyası",
      discount: "20%-ə qədər Endirim",
      buttonText: "İndi Al",
      buttonLink: "#",
      mainImgSrc: "./assets/img/phone.png",
    },
  ]
};

// Slider Component
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderConfig.slides.length);
    }, sliderConfig.autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative text-white bg-black w-full max-w-[892px] h-[344px] overflow-hidden z-10">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        id="sliderAdvert"
        style={{ transform: `translateX(-${currentSlide * sliderConfig.slideWidth}px)` }}
      >
        {sliderConfig.slides.map((slide, index) => (
          <div key={index} style={{ width: sliderConfig.slideWidth }}>
            <img src={slide.mainImgSrc} alt={slide.series} />
            <div>
              <img src={slide.imgSrc} alt={slide.series} />
              <h2>{slide.series}</h2>
              <p>{slide.discount}</p>
              <a href={slide.buttonLink} className="button">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {sliderConfig.slides.map((_, index) => (
          <div
            key={index}
            className={`dot size-[12px] rounded-full cursor-pointer ${index === currentSlide ? 'bg-white' : 'bg-gray-200'}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
