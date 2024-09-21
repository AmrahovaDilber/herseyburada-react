export default function Services() {
  const services = [
    {
      imgSrc: "/icon-delivery.svg",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      imgSrc: "/icon-headphone.svg",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      imgSrc: "/icon-delivery.svg",
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3  mt-[50px] mb-[80px] gap-[20px] lg:gap-[40px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center cursor-pointer p-4"
            >
              <div className="bg-[#C1C1C1] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center">
                <figure className="w-[40px] h-[40px] lg:w-[58px] lg:h-[58px] bg-[#000000] rounded-full flex items-center justify-center">
                  <img
                    src={service.imgSrc}
                    className="object-cover"
                    alt={service.title}
                  />
                </figure>
              </div>
              <p className="font-semibold text-[14px] sm:text-[18px] lg:text-[20px] text-[#000000] mt-[16px] lg:mt-[24px] mb-[8px]">
                {service.title}
              </p>
              <p className="font-normal text-[12px] sm:text-[14px] lg:text-[16px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
