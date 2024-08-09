export function AboutSection() {
    return (
      <div className="flex justify-between mb-[140px]">
        <div className="w-[525px]">
          <h1 className="font-semibold text-[54px] tracking-[6%] mb-[40px]">
            Bizim hekayəmiz
          </h1>
          <p className="mb-[24px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive has
            10,500 sallers and 300 brands and serves 3 millioons customers across
            the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a very
            fast. Exclusive offers a diverse assotment in categories ranging from
            consumer.
          </p>
        </div>
        <figure className="w-[705px] h-[609px]">
          <img className="h-full w-full object-cover" src="./assets/img/about.jpg" alt="about" />
        </figure>
      </div>
    );
  }