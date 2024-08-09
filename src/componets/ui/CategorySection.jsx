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
                    src="/public/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px]  max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Köynək
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Jaket
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Cins Şalvar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şalvar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şortik
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Palto
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Bluza
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pencək
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pijama
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gecəlik
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Hündürdaban
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Ayaqqabısı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sandal
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çəkmə
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Corab
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Bel Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qol Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pul Kisəsi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Bədən Baxımı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəriyə Qulluq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Baxımı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ətir
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Makiyaj
                  </span>
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
                    src="/public/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şalvar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Cins Şalvar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Köynək
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Jaket
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pencək
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şortik
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ayaqqabı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çəkmə
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uzunboğaz
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Ayaqqabısı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sandal
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çəkmə
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Corab
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Bel Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Smin-weatshirts
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kepka
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Papaq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kəmər
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Günəş Eynəyi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qalustuk
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pul Kisəsi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saat
                  </span>
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
                    src="/public/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Telefon
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kompüter
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Planşet
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Xbox
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Playstation
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ağıllı Saat
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ağıllı Qolbaq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şarj Cihazları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qulaqlıqlar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Klaviatura
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Siçan
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ram
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ekran Kartı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Foto və Kamera
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Videokamera
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yaddaş Kartı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Printer və Skaner
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Televiziya
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ağıllı Televizor
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    TV Pultları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Proyektor
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qəbuledici
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Peyk
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    HDMI Kabel
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gərginlikdən Qorunan Rozetkalar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Televizor Ekran Qoruyucusu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dondurucu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Qurudan
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Təraş Maşını
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Paltaryuyan Maşın
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qabyuyan Maşın
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quruducu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kombi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kondisioner
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Mikrodalğalı Soba
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Mikser və Mikser Dəsti
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Tost Maşını
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Blender Dəsti
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çay Maşını
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qəhvə Maşını
                  </span>
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
                    src="/public/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px]  max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Oyuncaq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Oyuncaq Traktor
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Akkumulyatorla İşləyən Avtomobil
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kukla
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Divar Saatı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Güzgü
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pərdə
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Divan Dəsti
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kreslo
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İşıqlandırma
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Mətbəx Şkafı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çaydan
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qab Dəsti
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Nahar Dəsti
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəsmal və Dəsmal Dəsti
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Hamam Dəsti
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qadın Xalatı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kişi Xalatı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Blazers
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yataq Otağı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yorğan
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yataq Örtüyü
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yastıq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Alt Üst Dəst
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Musiqi Alətləri və Avadanlıqları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Hobbi ləvazimatları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    LED İşıq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Velosiped
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dumbbell &amp; Çəki
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pilates və Yoga
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Əlcəkləri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pilates topu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Su Butulkaları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Termoslar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Roman və Ədəbiyyat Kitabları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şəxsi İnkişaf və Psixologiya Kitabları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İmtahana Hazırlıq Kitabları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dini kitablar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Su Butulkaları
                  </span>
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
                    src="/public/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yuyucu Toz
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qab Yuyucu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Otaq Ətri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Hamam Təmizləyiciləri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Tualet Kağızı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kağız Dəsmal
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saça Qulluq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ağız Baxımı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəriyə Qulluq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Elektrikli Diş Fırçaları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Təraş Məhsulları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Körpə Üçün Əlavə Qidalanma
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəsmallar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Kosmetikası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Qidaları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Körpə Təmizləyici Pambıq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Pudrası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Şampunu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çay
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qəlyanaltı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quru Yemək
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qəhvə
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Makaron
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Duz və Ədviyyat
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şəkər
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Süd
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Bitki Çayları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quru Meyvə
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şokolad
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Biskvit
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çörək Məmulatları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şirniyyat Məmulatları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qoz-Fındıq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yulaf
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Maye Yağ
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Zibil Qutusu
                  </span>
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
                    src="/public/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Köynəyi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gödəkçə və Jilet
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yağış Paltarı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Büstqalteri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Paltosu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Papağı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Termal Geyim
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Ayaqqabısı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qaçış Ayaqqabıları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gəzinti Ayaqqabısı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Başmaq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sandalet
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Hovuz Başlığı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman Zalı Üçün Avadanlıqlar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Elastik Bant
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Mat
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İp Atlama
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Boks Əlcəyi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Skeytbord
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Skeyt
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Düşərgə Alətləri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Alpinizm və Dırmanma
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Fəaliyyət Kamerası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Su İdmanı Avadanlıqları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dalğıc Avadanlıqları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Balıqçılıq Ləvazimatları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Oxatma
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çadır
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pilates Topları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Protein tozu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kreatin
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Protein çubuğu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Top
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Basketbol Topu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Futbol Topu
                  </span>
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
                    src="/public/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İdman ayaqqabısı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dabanlı ayaqqabılar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gündəlik Ayaqqabılar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çəkmələr
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sandalet
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Başmaq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Xəstəxana terlikləri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kovboy çəkmələri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qar çəkmə
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Yağış Çəkmələri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kişi ayaqqabıları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gündəlik Ayaqqabılar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Klassik Ayaqqabılar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qaçış Ayaqqabıları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Basketbol Ayaqqabıları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Ev terlikləri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gəzinti ayaqqabısı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Ayaqqabıları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Uşaq Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sırt Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Məktəb Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Noutbuk Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qadın Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Süpürgə Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Poçtalyon Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Balıqçı Çubuğu Çantası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saat
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Günəş eynəyi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pul kisəsi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kəmər
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şapka
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qalustuk
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    bilərzik
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Boyunbağı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Zərgərlik hədiyyəsi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Gümüş boyunbağı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Çamadan
                  </span>
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
                    src="/public/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Göz Makiyajı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəri Makiyajı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dodaq Makiyajı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Makiyaj Dəsti
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dırnaq Lakı və aseton
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pomada
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dodaq Qələmi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Tuş
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Göz Layneri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    BB &amp; CC Krem
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Konturlar və Palitralar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Bronzer
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pudra
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Süni Dırnaqlar
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəriyə Qulluq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Üz Kremi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Üz Təmizləmə
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Üz Maskası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Günəş Kremi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dəri Serumu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Toniklər
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Nəmləndiricilər
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Makiyaj Təmizləyicisi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Əl Kremləri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Şampun
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Serumu və Maska
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Boyası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Köpüyü
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saça Qulluq Yağı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Saç Kremi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Daraq
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Duş Gelləri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Dezodorant
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Diş Fırçası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Diş Pastası
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Törpülər
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Diş Ağardıcı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Kirpik Qıvıran
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Manikür və Pedikür Dəstləri
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Epilyasiya və Təraş
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Epilyator
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Təraş Köpüyü
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qulluq Yağları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Qatı Sabun
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Maye Sabun
                  </span>
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
                    src="/public/right.svg"
                    className="object-cover cursor-pointer"
                  />
                </figure>
              </div>
              {/* Dropdown content */}
              <div className="absolute left-full top-0  min-w-[300px] max-w-[985px] p-[5px] bg-white border border-gray-300 shadow-lg group-hover:block hidden z-30">
                <div className=" grid grid-rows-10 grid-flow-col auto-cols-max">
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Yeməyi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt Yeməyi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quş Məhsulları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Akvarium Məhsulları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Vitamini
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt Yastığı
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Qutusu və Daşıma Çantaları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Oyuncaqları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt Oyuncaqları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişiklərin Yaş Yeməyi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişiklərin Müalicəsi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İtlərin Müalicəsi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik şampunu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt şampunu
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Su və Qida Qabları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Quş yemi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Pişik Çarpayıları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    İt Çarpayıları
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Balıq Yemi
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Chinos
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Knitwear
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Overcoats
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Raincoats
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Joggers
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Henleys
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Sweatshirts
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Cargos
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Turtlenecks
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Blazers
                  </span>
                  <span className="px-4 py-2 min-w-[200px] text-[12px] text-[#000000] hover:bg-gray-100 cursor-pointer">
                    Suits
                  </span>
                </div>
              </div>
            </div>
          </ul>
        </div>
        {/* RIGHTBOX */}
        <div className="relative text-white bg-black w-full max-w-[892px] h-[344px] overflow-hidden z-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            id="sliderAdvert"
          >
            {/* Slides will be dynamically inserted here by JavaScript */}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            <div className="dot size-[12px] rounded-full bg-gray-200 cursor-pointer" />
            <div className="dot size-[12px] rounded-full bg-gray-200 cursor-pointer" />
            <div className="dot size-[12px] rounded-full bg-gray-200 cursor-pointer" />
            {/* Add more dots here as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
