import { servicesData } from "../../data/categoriesData";

export default function Services() {
  return (
    <div className="px-4 sm:px-8 lg:px-12">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3  mt-[50px] mb-[80px] gap-[20px] lg:gap-[50px]">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center cursor-pointer p-4"
            >
              <div className="bg-[#C1C1C1] hover:scale-110 transition ease-in-out w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center">
                <figure className="w-[40px] h-[40px] lg:w-[58px] lg:h-[58px] bg-[#000000] rounded-full flex items-center justify-center">
                  <img
                    src={service.imgSrc}
                    className="object-cover"
                    alt={service.title}
                  />
                </figure>
              </div>
              <p className="font-semibold text-[14px] sm:text-[18px] lg:text-[18px] text-[#000000] mt-[16px] lg:mt-[24px] mb-[8px] relative    ">
                {service.title}
              </p>
              <p className="font-normal text-[12px] sm:text-[14px] lg:text-[16px] w-[400px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
