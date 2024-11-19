export function AboutSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-16 lg:mb-36 rounded-lg px-4 lg:px-0 gap-[40px]">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-wide mb-6 lg:mb-10 text-[#ff9130] relative after:content-[''] after:block after:w-24 sm:after:w-40 lg:after:w-[300px] after:h-[3px] lg:after:h-[4px] after:bg-gradient-to-r after:from-[#ff9130] after:to-[#eff88c] after:mt-2 lg:after:mt-3">
          Bizim hekayəmiz
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed text-base sm:text-lg">
          <span className="font-semibold text-[#ff9130]">HərşeyBurada</span> — 2024-cü ildə qurulmuş və müasir texnologiyalarla təchiz edilmiş yeni nəsil onlayn alış-veriş platformasıdır. Məqsədimiz, müştərilərimizə geniş çeşiddə məhsullar təqdim edərək, rahat və sürətli alış-veriş təcrübəsi yaşatmaqdır. Biz bu layihəni təqdim edərək, hədəflərimizi sizinlə bölüşmək istəyirik.
        </p>
        <ul className="list-disc pl-5 mb-6 text-gray-700 text-base sm:text-lg">
          <li>Minlərlə məhsul seçimi ilə hər kəsə uyğun təkliflər.</li>
          <li>İstifadəçilər üçün asan, təhlükəsiz və sürətli alış-veriş imkanı.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          <span className="font-semibold text-[#ff9130]">HərşeyBurada</span>, müştərilərinə ev əşyalarından modaya, elektronikadan gündəlik məhsullara qədər geniş məhsul çeşidi ilə mükəmməl alış-veriş təcrübəsi təqdim etməyi hədəfləyir.
        </p>
      </div>
      <figure className="w-full lg:w-1/2 h-[250px] sm:h-[350px] lg:h-[450px] xl:h-[609px] rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
        <img
          className="h-full w-full object-cover"
          src="/about.jpg"
          alt="about"
        />
      </figure>
    </div>
  );
}
