export function AboutSection() {
  return (
    <div className="flex justify-between mb-[140px] rounded-lg ">
      <div className="w-[525px]">
        <h1 className="font-semibold text-[54px] tracking-[6%] mb-[40px] text-[#ff9130]">
          Bizim hekayəmiz
        </h1>
        <p className="mb-[24px] text-gray-700 leading-relaxed">
          <span className="font-semibold text-[#ff9130]">HərşeyBurada</span> — 2024-cü ildə qurulmuş və müasir texnologiyalarla təchiz edilmiş yeni nəsil onlayn alış-veriş platformasıdır. Məqsədimiz, müştərilərimizə geniş çeşiddə məhsullar təqdim edərək, rahat və sürətli alış-veriş təcrübəsi yaşatmaqdır. Biz bu layihəni təqdim edərək, hədəflərimizi sizinlə bölüşmək istəyirik.
        </p>
        <ul className="list-disc pl-5 mb-[24px] text-gray-700">
          <li>Minlərlə məhsul seçimi ilə hər kəsə uyğun təkliflər.</li>
          <li>İstifadəçilər üçün asan, təhlükəsiz və sürətli alış-veriş imkanı.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-[#ff9130]">HərşeyBurada</span>, müştərilərinə ev əşyalarından modaya, elektronikadan gündəlik məhsullara qədər geniş məhsul çeşidi ilə mükəmməl alış-veriş təcrübəsi təqdim etməyi hədəfləyir.
        </p>
      </div>
      <figure className="w-[650px] h-[609px] rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
        <img className="h-full w-full object-cover" src="/about.jpg" alt="about" />
      </figure>
    </div>
  );
}
