export function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-36 rounded-lg">
      <div className="w-full md:w-[525px] mb-8 md:mb-0">
        <h1 className="font-semibold text-[32px] md:text-[54px] tracking-[6%] mb-10 text-[#ff9130]">
          Bizim hekayəmiz
        </h1>
        <p className="mb-6 text-gray-700 leading-relaxed">
          <span className="font-semibold text-[#ff9130]">HərşeyBurada</span> — 2024-cü ildə qurulmuş və müasir texnologiyalarla təchiz edilmiş yeni nəsil onlayn alış-veriş platformasıdır. Məqsədimiz, müştərilərimizə geniş çeşiddə məhsullar təqdim edərək, rahat və sürətli alış-veriş təcrübəsi yaşatmaqdır. Biz bu layihəni təqdim edərək, hədəflərimizi sizinlə bölüşmək istəyirik.
        </p>
        <ul className="list-disc pl-5 mb-6 text-gray-700">
          <li>Minlərlə məhsul seçimi ilə hər kəsə uyğun təkliflər.</li>
          <li>İstifadəçilər üçün asan, təhlükəsiz və sürətli alış-veriş imkanı.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-[#ff9130]">HərşeyBurada</span>, müştərilərinə ev əşyalarından modaya, elektronikadan gündəlik məhsullara qədər geniş məhsul çeşidi ilə mükəmməl alış-veriş təcrübəsi təqdim etməyi hədəfləyir.
        </p>
      </div>
      <figure className="w-full md:w-[650px] h-[350px] md:h-[609px] rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
        <img className="h-full w-full object-cover" src="/about.jpg" alt="about" />
      </figure>
    </div>
  );
}
