import { Link } from "react-router-dom";

export default function CategorySection() {
  return (
    <section>
      <div className="mt-[40px] mb-[100px] flex justify-between">
        {/* LEFTBOX */}
        <div className="mr-[16px] w-[217px] relative h-[344px]">
          <ul>
            {/* list item with dropdown */}
            <div className="flex items-center justify-between py-[8px] group hover:bg-gray-100 px-[5px]">
              <div className="flex justify-between items-center cursor-pointer w-[217px]">
                <li className="text-[16px] text-center text-[#000000] font-normal">
                  Qadın
                </li>
                <figure>
                  <img
                    src="/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px]  max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Köynək
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Jaket
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Cins Şalvar
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Şalvar
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Şortik
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Palto
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Bluza
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Pencək
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Pijama
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Gecəlik
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Hündürdaban
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    İdman Ayaqqabısı
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Sandal
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Çəkmə
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Corab
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Bel Çantası
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Qol Çantası
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Pul Kisəsi
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Bədən Baxımı
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Dəriyə Qulluq
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Saç Baxımı
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Ətir
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Makiyaj
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[8px] group hover:bg-gray-100 px-[5px]">
              <div className="flex justify-between items-center cursor-pointer w-[217px]">
                <li className="text-[16px] text-center text-[#000000] font-normal">
                  Kişi
                </li>
                <figure>
                  <img
                    src="/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Şalvar
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Cins Şalvar
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Köynək
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Jaket
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Pencək
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Şortik
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Ayaqqabı
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Çəkmə
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Uzunboğaz
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    İdman Ayaqqabısı
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Sandal
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Çəkmə
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Corab
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Bel Çantası
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Smin-weatshirts
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Kepka
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Papaq
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Kəmər
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Günəş Eynəyi
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Qalustuk
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Pul Kisəsi
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Saat
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[8px] group hover:bg-gray-100 px-[5px]">
              <div className="flex justify-between items-center cursor-pointer w-[217px]">
                <li className="text-[16px] text-center text-[#000000] font-normal">
                  Elektronika
                </li>
                <figure>
                  <img
                    src="/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Telefon
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Kompüter
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Planşet
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Xbox
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Playstation
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Ağıllı Saat
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Ağıllı Qolbaq
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Şarj Cihazları
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Qulaqlıqlar
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Klaviatura
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Siçan
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Ram
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Ekran Kartı
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Foto və Kamera
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Videokamera
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Yaddaş Kartı
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Printer və Skaner
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Televiziya
                  </Link>
                  <Link
                    to={"/"}
                    className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer"
                  >
                    Ağıllı Televizor
                  </Link>

                  <Link to={'/'} className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Qurudan
                  </Link>
                  <Link to={'/'} className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Təraş Maşını
                  </Link>
                  <Link to={'/'} className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Paltaryuyan Maşın
                  </Link>
                  <Link to={'/'} className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qabyuyan Maşın
                  </Link>
                  <Link to={'/'} className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quruducu
                  </Link>
                  <Link to={'/'} className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kombi
                  </Link>
                  <Link to={'/'} className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kondisioner
                  </Link>
                  <Link to={'/'} className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Mikrodalğalı Soba
                  </Link>
                  <Link  to={'/'} className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Mikser və Mikser Dəsti
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[8px] group hover:bg-gray-100 px-[5px]">
              <div className="flex justify-between items-center cursor-pointer w-[217px]">
                <li className="text-[16px] text-center text-[#000000] font-normal">
                  Ev&amp;Yaşam
                </li>
                <figure>
                  <img
                    src="/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px]  max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Oyuncaq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Oyuncaq Traktor
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Akkumulyatorla İşləyən Avtomobil
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kukla
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Divar Saatı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Güzgü
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pərdə
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Divan Dəsti
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kreslo
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İşıqlandırma
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Mətbəx Şkafı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çaydan
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qab Dəsti
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Nahar Dəsti
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəsmal və Dəsmal Dəsti
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Hamam Dəsti
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qadın Xalatı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kişi Xalatı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Blazers
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yataq Otağı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yorğan
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yataq Örtüyü
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yastıq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Alt Üst Dəst
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Musiqi Alətləri və Avadanlıqları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Hobbi ləvazimatları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    LED İşıq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Velosiped
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dumbbell &amp; Çəki
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pilates və Yoga
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Əlcəkləri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pilates topu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Su Butulkaları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Termoslar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Roman və Ədəbiyyat Kitabları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şəxsi İnkişaf və Psixologiya Kitabları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İmtahana Hazırlıq Kitabları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dini kitablar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Su Butulkaları
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[8px] group hover:bg-gray-100 px-[5px]">
              <div className="flex justify-between items-center cursor-pointer w-[217px]">
                <li className="text-[16px] text-center text-[#000000] font-normal">
                  Supermarket
                </li>
                <figure>
                  <img
                    src="/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yuyucu Toz
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qab Yuyucu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Otaq Ətri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Hamam Təmizləyiciləri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Tualet Kağızı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kağız Dəsmal
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saça Qulluq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ağız Baxımı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəriyə Qulluq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Elektrikli Diş Fırçaları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Təraş Məhsulları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Körpə Üçün Əlavə Qidalanma
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəsmallar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Kosmetikası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Qidaları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Körpə Təmizləyici Pambıq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Pudrası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Şampunu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çay
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qəlyanaltı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quru Yemək
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qəhvə
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Makaron
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Duz və Ədviyyat
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şəkər
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Süd
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Bitki Çayları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quru Meyvə
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şokolad
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Biskvit
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çörək Məmulatları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şirniyyat Məmulatları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qoz-Fındıq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yulaf
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Maye Yağ
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Zibil Qutusu
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[8px] group hover:bg-gray-100 px-[5px]">
              <div className="flex justify-between items-center cursor-pointer w-[217px]">
                <li className="text-[16px] text-center text-[#000000] font-normal">
                  İdman&amp;Çöl
                </li>
                <figure>
                  <img
                    src="/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Köynəyi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gödəkçə və Jilet
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yağış Paltarı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Büstqalteri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Paltosu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Papağı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Termal Geyim
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Ayaqqabısı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qaçış Ayaqqabıları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gəzinti Ayaqqabısı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Başmaq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sandalet
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Hovuz Başlığı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Zalı Üçün Avadanlıqlar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Elastik Bant
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Mat
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İp Atlama
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Boks Əlcəyi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Skeytbord
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Skeyt
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Düşərgə Alətləri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Alpinizm və Dırmanma
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Fəaliyyət Kamerası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Su İdmanı Avadanlıqları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dalğıc Avadanlıqları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Balıqçılıq Ləvazimatları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Oxatma
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çadır
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pilates Topları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Protein tozu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kreatin
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Protein çubuğu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Top
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Basketbol Topu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Futbol Topu
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[8px] group hover:bg-gray-100 px-[5px]">
              <div className="flex justify-between items-center cursor-pointer w-[217px]">
                <li className="text-[16px] text-center text-[#000000] font-normal">
                  Ayaqqabı&amp;Çanta
                </li>
                <figure>
                  <img
                    src="/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman ayaqqabısı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dabanlı ayaqqabılar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gündəlik Ayaqqabılar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çəkmələr
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sandalet
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Başmaq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Xəstəxana terlikləri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kovboy çəkmələri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qar çəkmə
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yağış Çəkmələri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kişi ayaqqabıları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gündəlik Ayaqqabılar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Klassik Ayaqqabılar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qaçış Ayaqqabıları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Basketbol Ayaqqabıları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ev terlikləri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gəzinti ayaqqabısı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Ayaqqabıları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Çantası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sırt Çantası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Məktəb Çantası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Noutbuk Çantası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qadın Çantası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Süpürgə Çantası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Poçtalyon Çantası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Balıqçı Çubuğu Çantası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saat
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Günəş eynəyi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pul kisəsi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kəmər
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şapka
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qalustuk
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    bilərzik
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Boyunbağı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Zərgərlik hədiyyəsi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gümüş boyunbağı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çamadan
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[8px] group hover:bg-gray-100 px-[5px]">
              <div className="flex justify-between items-center cursor-pointer w-[217px]">
                <li className="text-[16px] text-center text-[#000000] font-normal">
                  Sağlamlıq&amp;Gözəllik
                </li>
                <figure>
                  <img
                    src="/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Göz Makiyajı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəri Makiyajı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dodaq Makiyajı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Makiyaj Dəsti
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dırnaq Lakı və aseton
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pomada
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dodaq Qələmi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Tuş
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Göz Layneri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    BB &amp; CC Krem
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Konturlar və Palitralar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Bronzer
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pudra
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Süni Dırnaqlar
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəriyə Qulluq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Üz Kremi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Üz Təmizləmə
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Üz Maskası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Günəş Kremi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəri Serumu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Toniklər
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Nəmləndiricilər
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Makiyaj Təmizləyicisi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Əl Kremləri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şampun
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Serumu və Maska
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Boyası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Köpüyü
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saça Qulluq Yağı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Kremi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Daraq
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Duş Gelləri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dezodorant
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Diş Fırçası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Diş Pastası
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Törpülər
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Diş Ağardıcı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kirpik Qıvıran
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Manikür və Pedikür Dəstləri
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Epilyasiya və Təraş
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Epilyator
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Təraş Köpüyü
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qulluq Yağları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qatı Sabun
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Maye Sabun
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[8px] group hover:bg-gray-100 px-[5px]">
              <div className="flex justify-between items-center cursor-pointer w-[217px]">
                <li className="text-[16px] text-center text-[#000000] font-normal">
                  Ev Heyvanları&amp;Bağ
                </li>
                <figure>
                  <img
                    src="/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Yeməyi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt Yeməyi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quş Məhsulları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Akvarium Məhsulları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Vitamini
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt Yastığı
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Qutusu və Daşıma Çantaları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Oyuncaqları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt Oyuncaqları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişiklərin Yaş Yeməyi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişiklərin Müalicəsi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İtlərin Müalicəsi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik şampunu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt şampunu
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Su və Qida Qabları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quş yemi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Çarpayıları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt Çarpayıları
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Balıq Yemi
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Chinos
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Knitwear
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Overcoats
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Raincoats
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Joggers
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Henleys
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sweatshirts
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Cargos
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Turtlenecks
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Blazers
                  </Link>
                  <Link className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Suits
                  </Link>
                </div>
              </div>
            </div>
          </ul>
        </div>
        {/* RIGHTBOX */}
        <div className="relative text-white bg-black w-full max-w-[892px] h-[344px] overflow-hidden z-10">
          <div className="flex space-x-[40px]">
            <div className="w-[294px] flex flex-col pt-[58px] pl-[64px]">
              <div className="flex space-x-[14px] mb-[10px] items-center">
                <div className="w-[40px] h-[49px]">
                  <img src="/apple.svg" className="object-cover" />
                </div>
                <p className="font-normal text-[16px] text-[#FAFAFA]">
                  iPhone 14 Seriyası
                </p>
              </div>
              <p className="text-[48px] text-[#FAFAFA] font-semibold w-[294px]">
                10%-ə qədər Endirim
              </p>
              {/* <div className="flex items-center mt-[22px] space-x-2">
                <button className="underline text-[16px] text-#FAFAFA font-medium">
                  İndi Al
                </button>
                <div className="size-[24px]">
                  <img
                    className="object-cover"
                    src="/icons_arrow-right.svg"
                  />
                </div>
              </div> */}
            </div>

            <div className="w-[496px] h-[310px] pt-[16px]">
              <img src="/iphone.png" className="object-cover" alt="phone" />
            </div>
          </div>
          <div className="flex space-x-3 items-center w-[110px] mx-auto">
            <div className="size-[12px] rounded-full bg-gray-200"></div>
            <div className="size-[12px] rounded-full bg-gray-200"></div>
            <div className="size-[12px] rounded-full bg-gray-200"></div>
            <div className="size-[12px] rounded-full bg-gray-200"></div>
            <div className="size-[12px] rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
