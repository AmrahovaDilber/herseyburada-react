export function AboutSection() {
  return (
    <div className="flex justify-between mb-[140px] rounded-lg ">
      <div className="w-[525px]">
        <h1 className="font-semibold text-[54px] tracking-[6%] mb-[40px] text-[#ff9130]">
          Bizim hekayəmiz
        </h1>
        <p className="mb-[24px] text-gray-700 leading-relaxed">
          Launched in 2015, <span className="font-semibold text-[#ff9130]">Exclusive</span> is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data, and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3 million customers across
          the region.
        </p>
        <ul className="list-disc pl-5 mb-[24px] text-gray-700">
          <li>More than 1 Million products, growing rapidly.</li>
          <li>Diverse assortment in categories ranging from consumer products.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Exclusive offers a diverse assortment in categories ranging from
          consumer electronics to fashion, providing a comprehensive shopping
          experience for everyone.
        </p>
      </div>
      <figure className="w-[650px] h-[609px] rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
        <img className="h-full w-full object-cover" src="/about.jpg" alt="about" />
      </figure>
    </div>
  );
}
