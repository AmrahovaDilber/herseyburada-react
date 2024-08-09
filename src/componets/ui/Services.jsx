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
      <div>
        <section>
          <div className="w-[940px] mx-auto mt-[100px] mb-[120px] flex justify-between">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center cursor-pointer"
              >
                <div className="bg-[#C1C1C1] size-[80px] rounded-full flex items-center justify-center">
                  <figure className="rounded-full size-[58px] bg-[#000000] flex items-center justify-center">
                    <img src={service.imgSrc} className="object-cover" alt={service.title} />
                  </figure>
                </div>
                <p className="font-semibold text-[20px] text-[#000000] mt-[24px] mb-[8px]">
                  {service.title}
                </p>
                <p className="font-normal">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  