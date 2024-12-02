import { IoWomanSharp } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { GiLips } from "react-icons/gi";
const data = {
  kateqoriyalar: [
    {
      kateqoriya_id: 1,
      kateqoriya_adı: "Qadın",
      icon: IoWomanSharp,
      subkateqoriyalar: [
        {
          subkateqoriya_id: 1,
          subkateqoriya_adı: "Bluz",
          məhsullar: [
            {
              product_id: 1,
              product_name: "Şifon Bluz",
              price: 50.0,
              slug: "sifon_bluz",
              original_price: 70.0,
              discount: 10,
              salesCount: 150,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/03/09/464351/9a71f373-cc54-4b9a-9f26-f6fe33a44aa6_size900x1350_quality100_cropTop.jpg",
              description: "Yay üçün yüngül və rahat şifon bluz.",
              colors: ["Sarı"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment: "Çox gözəl və rahatdır.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment: "Materialı keyfiyyətlidir.",
                },
                {
                  review_id: 3,
                  rating: 5.0,
                  comment: "Mükəmməl keyfiyyət, çox məmnunam.",
                },
                {
                  review_id: 4,
                  rating: 3.5,
                  comment:
                    "Fiyatına görə yaxşıdır, amma bəzi hissələri zəifdir.",
                },
                {
                  review_id: 5,
                  rating: 4.2,
                  comment: "Çox rahat və şık görünür.",
                },
                {
                  review_id: 6,
                  rating: 4.8,
                  comment: "Hər şey superdir, heç bir problem yoxdur.",
                },
                {
                  review_id: 7,
                  rating: 3.0,
                  comment: "Rəng fotodakı kimi deyil, amma yenə də yaxşıdır.",
                },
                {
                  review_id: 8,
                  rating: 4.7,
                  comment: "Tez çatdırıldı və gözləntilərimdən daha yaxşıdır.",
                },
                {
                  review_id: 9,
                  rating: 4.3,
                  comment: "Çox rahat, hər gün istifadə edirəm.",
                },
                {
                  review_id: 10,
                  rating: 2.5,
                  comment: "Dikiləri bəzən zəifdir, amma istifadə edilə bilər.",
                },
                {
                  review_id: 11,
                  rating: 4.9,
                  comment: "Məhsul keyfiyyətlidir, hər kəsə tövsiyə edirəm.",
                },
                {
                  review_id: 12,
                  rating: 3.8,
                  comment: "Çox gözəl görünür, amma bir az ağırdır.",
                },
                {
                  review_id: 13,
                  rating: 4.1,
                  comment: "Fiyatına görə keyfiyyəti çox yaxşıdır.",
                },
              ],
            },

            {
              product_id: 2,
              product_name: "Rahat Bluz",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/03/09/464426/1baeeeea-e475-4a97-86f4-3d7ac02bcff7_size900x1350_quality100_cropTop.jpg",
              description: "Gündəlik istifadə üçün ideal rahat bluz.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 3,
                  rating: 5.0,
                  comment: "Hər gün geyinmək üçün əla!",
                },
                {
                  review_id: 4,
                  rating: 4.5,
                  comment: "Rəngi gözəldir, amma ölçü kiçikdir.",
                },
              ],
              slug: "rahat-bluz",
            },
            {
              product_id: 3,
              product_name: "Klassik Bluz",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/02/26/464578/ed014a5b-9a5f-4894-aa7d-1ccfb974e0b9_size900x1350_quality100_cropTop.jpg",
              description: "Klassik kəsimlə hazırlanmış bluz.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 5,
                  rating: 5.0,
                  comment: "Klassik stil, hər cür geyimlə uyğun gəlir.",
                },
                {
                  review_id: 6,
                  rating: 4.5,
                  comment: "Geyimi çox rahatdır.",
                },
              ],
              slug: "klassik-bluz",
            },
            {
              product_id: 4,
              product_name: "Sport Bluz",
              price: 65.0,
              original_price: 85.0,
              discount: 20,
              salesCount: 120,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/03/10/463871/ca3c7c2c-d1df-4d0d-947b-609614fa21c0_size900x1350_quality100_cropTop.jpg",
              description: "İdman və gündəlik istifadə üçün ideal bluz.",
              colors: ["Qara"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 7,
                  rating: 5.0,
                  comment: "İdman zamanı çox rahatdır.",
                },
                {
                  review_id: 8,
                  rating: 4.0,
                  comment: "Bəyəndim, amma biraz sıxdır.",
                },
              ],
              slug: "sport-bluz",
            },
            {
              product_id: 5,
              product_name: "Qadın Bluz - Qara",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/04/24/469044/5d1f172d-8a7e-4009-9814-0cfb25d8982b_size900x1350_quality100_cropTop.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Qara"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-bluz-qara",
            },
            {
              product_id: 6,
              product_name: "Qadın Bluz - Qırmızı",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/06/25/476959/c46b4da4-9370-47cb-900a-e8387fadb9f6_size900x1350_quality100_cropTop.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Qırmızı"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-bluz-qirmizi",
            },
            {
              product_id: 7,
              product_name: "Qadın Bluz Qirmizi",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/02/12/463996/4500e7f1-5ab5-45a4-82a2-45be7c3881c4_size900x1350_quality100_cropTop.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Qırmızı"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-bluz-qirmizi",
            },
            {
              product_id: 8,
              product_name: "Qadın Bluz - Sarı",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/08/15/481380/99e21cec-5047-4743-905d-01ad00868c62_size900x1350_quality100_cropTop.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Sarı"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-bluz-sari",
            },
            {
              product_id: 9,
              product_name: "Qadın Bluz - Yaşıl",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/08/15/481659/5d71ad75-4787-4c0e-9227-fecefe97577f_size900x1350_quality100_cropTop.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Yaşıl"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-bluz-yasil",
            },
            {
              product_id: 10,
              product_name: "Qadın Bluz - Yaşıl Tünd",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2023/02/06/405941/208e3ad5-d58e-4b50-afd5-a578dffefdac_size900x1350_quality100_cropTop.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Yaşıl Tünd"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-bluz-yasil-tund",
            },
            {
              product_id: 11,
              product_name: "Qadın Bluz - Açıq Mavi",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/03/29/469057/96852243-7c3e-48a3-a8a0-388d1195f4e7_size900x1350_quality100_cropTop.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Açıq Mavi"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-bluz-aciq-mavi",
            },

            {
              product_id: 12,
              product_name: "Qadın Bluz - Tünd Yaşıl",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://akn-lmb-adl.a-cdn.akinoncdn.com/products/2024/03/07/464670/37d76b34-1847-44dd-ba1d-c5401c4c7eea_size900x1350_quality100_cropTop.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Yaşıl"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-bluz-tund-yasil",
            },
            {
              product_id: 13,
              product_name: "Qadın Bluz - Tünd Mavi",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://cdn.dsmcdn.com/ty988/product/media/images/jpim-outputs/assets/product/media/images/20230820/13/405367009/979940253/2/2_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Mavi"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-bluz-tund-mavi",
            },
            {
              product_id: 14,
              product_name: "Tül Astarlı Asimetrik Yaka Bluz",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://cdn.dsmcdn.com/ty1519/product/media/images/prod/PIM/20240903/10/ece7366a-1187-4c25-bf2b-94b25c889c44/1_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Mavi"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "petrol-asimetrik-yaka-bluz",
            },
            {
              product_id: 15,
              product_name:
                "Qadın Sandy Kumaş Çapraz Büzgü Detaylı Uzun Kollu Bluz",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://cdn.dsmcdn.com/ty1523/product/media/images/prod/QC/20240819/17/7336f9f7-bf29-3167-be92-a0ef63717845/1_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Mavi"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-sandy-kumas-buzgu-bluz",
            },
            {
              product_id: 16,
              product_name: "Turuncu Fitilli Triko Bluz",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "    https://cdn.dsmcdn.com/ty333/product/media/images/20220218/12/53018736/135589345/2/2_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Narinci"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "turuncu-fitilli-triko-bluz",
            },
            {
              product_id: 17,
              product_name:
                "Turuncu Kare Yaka Korse Görünümlü Fitilli Kadın Crop Bluz",
              price: 70.0,
              original_price: 90.0,
              discount: 22,
              salesCount: 140,
              image_url:
                "   https://cdn.dsmcdn.com/ty946/product/media/images/20230608/1/383057233/965419607/1/1_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Narinci"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "turuncu-kare-yaka-korse-gorunumlu-fitilli-kadin-crop-bluz",
            },
            {
              product_id: 18,
              product_name: "Kadın Kırmızı Omuzları Açık Büzgü Detaylı Bluz",
              price: 80.0,
              original_price: 100.0,
              discount: 20,
              salesCount: 100,
              image_url:
                "https://cdn.dsmcdn.com/ty1239/product/media/images/prod/PIM/20240402/21/ab061de2-6758-4048-ad61-8da1eb49f01d/1_org_zoom.jpg",
              description: "Büzgü detaylı, omuzları açık kırmızı bluz.",
              colors: ["Qırmızı"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "kadin-kirmizi-omuzlari-acik-buzgu-detayli-bluz",
            },
            {
              product_id: 19,
              product_name:
                "Qadın Kırmızı Fermuarlı Dik Yaka Fitilli Triko Bluz",
              price: 90.0,
              original_price: 120.0,
              discount: 25,
              salesCount: 100,
              image_url:
                "    https://cdn.dsmcdn.com/ty983/product/media/images/20230808/14/401258721/987672830/2/2_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Qırmızı"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-kirmizi-fermuarli-dik-yaka-fitilli-triko-bluz-bv00093",
            },
            {
              product_id: 20,
              product_name: "Qadın Ajurlu Triko Bluz",
              price: 85.0,
              original_price: 110.0,
              discount: 23,
              salesCount: 120,
              image_url:
                "https://cdn.dsmcdn.com/ty1332/product/media/images/prod/QC/20240515/17/4c7d4bf8-a367-38ee-8991-9ffdb482d60d/1_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Narinci"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-ajurlu-triko-bluz",
            },
            {
              product_id: 21,
              product_name:
                "Qadın Kırmızı Sandy Kumaş Çapraz Büzgü Detaylı Kısa Kol Şık Bluz",
              price: 70.0,
              original_price: 90.0,
              discount: 22,
              salesCount: 150,
              image_url:
                " https://cdn.dsmcdn.com/ty1354/product/media/images/prod/QC/20240609/20/75ba33e9-5c7e-3684-a699-a90c3067ccbf/1_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Qırmızı"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-kirmizi-sandy-kumas-buzgu-detayli-kisa-kol-bluz",
            },
            {
              product_id: 22,
              product_name: "Çıxma Detaylı Fitilli Örme Bluz",
              price: 70.0,
              original_price: 90.0,
              salesCount: 150,
              image_url:
                "https://cdn.dsmcdn.com/ty1464/product/media/images/prod/QC/20240806/01/2dda1ae8-93aa-311a-b3d1-2048509d49f4/1_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Ağ"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "cixma-detayli-fitilli-orme-bluz",
            },
            {
              product_id: 23,
              product_name: "Qadın Ağ Parmak Detaylı Body",
              price: 75.0,
              original_price: 95.0,
              salesCount: 120,
              image_url:
                " https://cdn.dsmcdn.com/ty619/product/media/images/20221201/14/225404351/636769191/1/1_org_zoom.jpg",
              description: "Rahat və şık parmak detaylı body.",
              colors: ["Ağ"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-ag-parmak-detayli-body",
            },
            {
              product_id: 24,
              product_name: "Qadın Ağ Cut Out Detaylı Fitilli Örme Bluz",
              price: 80.0,
              original_price: 100.0,
              salesCount: 110,
              image_url:
                "https://cdn.dsmcdn.com/ty866/product/media/images/20230505/14/340388812/928173859/2/2_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Ağ"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "qadin-ag-cut-out-detayli-fitilli-orne-bluz",
            },
            {
              product_id: 25,
              product_name: "Ağ Kare Yaka Viskon Örme Bluz",
              price: 75.0,
              original_price: 95.0,
              salesCount: 90,

              image_url:
                " https://cdn.dsmcdn.com/ty1304/product/media/images/prod/PIM/20240508/14/dea95a2b-9d17-404b-98f9-0353b9f12e5e/1_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Ağ"],
              sizes: ["S", "M", "L"],
              reviews: [
                { review_id: 2, rating: 5.0, comment: "Çox rahat və şıx!" },
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Rəngi çox gözəl, amma ölçü kiçik.",
                },
              ],
              slug: "ag-kare-yaka-viskon-orne-bluz",
            },
            {
              product_id: 26,
              product_name:
                "Haki Kayık Yaka Fitilli Esnek Regular Fit Uzun Kollu Düğme Detaylı Örme Bluz",
              price: 75.0,
              original_price: 95.0,
              salesCount: 80,
              image_url:
                " https://cdn.dsmcdn.com/ty996/product/media/images/prod/PIM/20230913/06/dfb9065f-9232-469a-b863-93d21b8569fb/1_org_zoom.jpg",
              description: "Rəngarəng və rahat bluz.",
              colors: ["Yaşıl"],
              sizes: ["S", "M", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 5.0,
                  comment: "Çox rahatdır, hər zaman geyinirəm!",
                },
                {
                  review_id: 2,
                  rating: 4.0,
                  comment: "Gözəl dizayn, amma düymələr biraz dar.",
                },
              ],

              slug: "haki-kayik-yaka-fitilli-esnek-uzun-kollu-bluz",
            },
          ],
        },

        {
          subkateqoriya_id: 2,
          subkateqoriya_adı: "Qadın Ust Geyimi",
          məhsullar: [
            {
              product_id: 100,
              product_name: " Geniş Cepli Crop Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://img2-ipekyol.mncdn.com/mnresize/1200/-//ipekyol/products/FW2425/Koleksiyon/IW6240005052001.jpg",
              description: "Geniş cepli crop ceket",
              colors: ["Qara"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "qadin-jaket-genis-cepli-crop-ceket",
            },
            {
              product_id: 101,
              product_name: "Düğme Aksesuarlı Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://img2-ipekyol.mncdn.com/mnresize/1200/-//ipekyol/products/FW2425/Koleksiyon/IW6240005086001.jpg",
              description: "Düğme aksesuarlı ceket",
              colors: ["Qara"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "qadin-jaket-dugme-aksesuariyla",
            },
            {
              product_id: 102,
              product_name: " Diyagonal Metal Fermuarlı Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://img2-ipekyol.mncdn.com/mnresize/1200/-//ipekyol/products/FW2425/Koleksiyon/IW6240005090001.JPG",
              description: "Diyagonal metal fermuarlı ceket",
              colors: ["Qara"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "qadin-jaket-diyagonal-metal-fermuar",
            },
            {
              product_id: 103,
              product_name: " Keten Kruvaze Blazer",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://img2-ipekyol.mncdn.com/mnresize/1200/-//ipekyol/products/SS24/Koleksiyon/IS1240106040096.JPG",
              description: "Keten kruvaze blazer",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "qadin-jaket-keten-kruvaze-blazer",
            },
            {
              product_id: 104,
              product_name: "Kuşaklı Kruvaze Blazer",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://img2-ipekyol.mncdn.com/mnresize/1200/-//ipekyol/products/SS24/Koleksiyon/IS1240106012070.jpg",
              description: "Kuşaklı kruvaze blazer",
              colors: ["Yaşıl"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "qadin-jaket-kusakli-kruvaze-blazer",
            },
            {
              product_id: 105,
              product_name: "Çoxfunksiyalı Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://img2-ipekyol.mncdn.com/mnresize/1200/-//ipekyol/products/FW2425/Koleksiyon/IW6240005090001.JPG",
              description: "Çoxfunksiyalı ceket",
              colors: ["Qara"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "qadin-jaket-coxfunksiyali",
            },

            {
              product_id: 106,
              product_name: "Kemerli Oversize Crop Deri Ceket",
              price: 90.0,
              original_price: 120.0,
              discount: 0,
              salesCount: 60,
              image_url:
                "https://cdn.dsmcdn.com/ty1253/product/media/images/prod/SPM/PIM/20240411/20/f88ca68e-eafd-37b1-b5fa-b1ec3ffb9cbb/1_org_zoom.jpg",
              description: "Çoxfunksiyalı ceket",
              colors: ["Qara"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "kemerli-oversize-crop-deri-ceket",
            },
            {
              product_id: 107,
              product_name: "Unisex Siyah Oversize Bomber Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1554/product/media/images/ty1554/prod/QC/20240918/20/34ea9285-ad6f-31b9-b2db-db4fae29b4bd/1_org_zoom.jpg",
              description: "Çoxfunksiyalı ceket.",
              colors: ["Qara"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "unisex-siyah-oversize-bomber-ceket",
            },
            {
              product_id: 108,
              product_name: "Siyah Çengel Detaylı Tasarım Blazer Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1336/product/media/images/prod/QC/20240520/13/a20f3d77-cd7e-3d8f-9e79-045a175c5d76/1_org_zoom.jpg",
              description: "Çoxfunksiyalı ceket.",
              colors: ["Qara"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "siyah-cengel-detayli-tasarim-blazer-ceket",
            },
            {
              product_id: 109,
              product_name:
                "Limited Edition Mint Regular Astarlı Dokuma Blazer Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1090/product/media/images/prod/PIM/20231215/14/9e4f41fa-cfbb-45dd-81bd-4e08fe535bbf/1_org_zoom.jpg",
              description: "Çoxfunksiyalı ceket.",
              colors: ["Yaşıl"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "limited-edition-mint-regular-astarli-dokuma-blazer-ceket",
            },

            {
              product_id: 110,
              product_name: "Unisex Siyah Oversize Bomber Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1554/product/media/images/ty1554/prod/QC/20240918/20/34ea9285-ad6f-31b9-b2db-db4fae29b4bd/1_org_zoom.jpg",
              description: "Çoxfunksiyalı ceket",
              colors: ["Qara"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "qadin-jaket-coxfunksiyali",
            },

            {
              product_id: 111,
              product_name:
                "Qadın Kırık Beyaz Hakim Yaka Çift Cepli Dalgıç Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1512/product/media/images/prod/PIM/20240829/18/e7917c0e-fbc0-41b0-bfcd-c67a6a1b84d6/1_org_zoom.jpg",
              description: "Çoxfunksiyalı ceket.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "qadin-kirik-beyaz-hakim-yaka-cift-cepli-dalgic-ceket",
            },
            {
              product_id: 112,
              product_name: "Jeans Qadın Bomber Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1566/product/media/images/ty1554/prod/QC/20240918/12/5fca1e35-8a05-324c-a5d2-a91c4e2ea858/1_org_zoom.jpg",
              description: "Çoxfunksiyalı ceket.",
              colors: ["Yaşıl"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "jeans-qadin-bomber-jaket",
            },
            {
              product_id: 113,
              product_name: "Tək Düğmeli Blazer Model Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1148/product/media/images/prod/SPM/PIM/20240126/19/6305fe87-63f7-3d77-89c9-c2d2ee6be395/1_org_zoom.jpg",
              description: "Çoxfunksiyalı ceket.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "tek-duymeli-blazer-model-jaket",
            },
            {
              product_id: 114,
              product_name: "Ağ Çizgili Oversize Blazer Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1447/product/media/images/prod/QC/20240729/01/f75b9b06-2334-3df0-ac28-61dd0a80f990/1_org_zoom.jpg",
              description: "Çoxfunksiyalı ceket.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "ag-cizgili-oversize-blazer-jaket",
            },
            {
              product_id: 115,
              product_name: "Göy Mavisi Qadın Palto",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1306/product/media/images/prod/PIM/20240510/13/b9de2f33-6112-42af-b165-e984f6e25122/1_org_zoom.jpg",
              description: "Çoxfunksiyalı palto.",
              colors: ["Mavi"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "goy-mavisi-qadin-palto",
            },
            {
              product_id: 116,
              product_name: "Kaban Oversize",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1463/product/media/images/prod/QC/20240805/16/b1ff574b-216d-314a-b3ba-2ee368d5dbdb/1_org_zoom.jpg",
              description: "Çoxfunksiyalı kaban.",
              colors: ["Qırmızı"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "kaban-oversize",
            },
            {
              product_id: 117,
              product_name: "Uzun Dəri Kaban",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1536/product/media/images/prod/QC/20240827/06/70d72d2d-0017-3f8e-90bf-aabe0bb9b5a8/1_org_zoom.jpg",
              description: "Çoxfunksiyalı kaban.",
              colors: ["Mavi"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "uzun-deri-kaban",
            },
            {
              product_id: 118,
              product_name: "Düğmeli Uzun Dəri Kaban",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1567/product/media/images/ty1556/prod/QC/20240918/15/9fe09332-598b-3989-bf18-9cff561d7688/1_org_zoom.jpg",
              description: "Çoxfunksiyalı kaban.",
              colors: ["Mavi"],
              sizes: ["M", "L"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "dugmeli-uzun-deri-kaban",
            },

            {
              product_id: 119,
              product_name:
                "Bordo Regular Astarlı Kruvaze Kapama Dokuma Blazer Ceket",
              price: 80.0,
              original_price: 100.0,
              discount: 0,
              salesCount: 90,
              image_url:
                "https://cdn.dsmcdn.com/ty1468/product/media/images/prod/PIM/20240807/01/60345dc3-a350-4692-8f47-f66767b029f7/1_org_zoom.jpg",
              description: "Çoxfunksiyalı kaban.",
              colors: ["Qırmızı"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 12,
                  rating: 4.5,
                  comment: "Çox rahat və isti.",
                },
                {
                  review_id: 13,
                  rating: 4.2,
                  comment:
                    "Keyfiyyətli material, amma qiyməti bir az yüksəkdir.",
                },
              ],
              slug: "bordo-regular-astarli-kruvaze-kapama-dokuma-blazer-ceket",
            },
          ],
        },
        {
          subkateqoriya_id: 3,
          subkateqoriya_adı: "Salvar",
          məhsullar: [
            {
              product_id: 200,
              product_name: "Yüksək Bel Palazzo Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty1482/product/media/images/prod/QC/20240815/12/7c71e3ea-2810-33ed-85da-9b75c948fe3d/1_org_zoom.jpg",
              description:
                "Qadın Bol Paça Yüksək Bel Rahat Esnek Trend Palazzo Dokuma Pantolon",
              colors: ["Yaşıl"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "mavi-yuksek-bel-palazzo-salvar",
            },
            {
              product_id: 201,
              product_name: "Havuç Kalıbı Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty1130/product/media/images/prod/PIM/20240110/06/ca521c98-f83a-4583-89d3-b52b2e2b60e4/1_org_zoom.jpg",
              description:
                "Haki Pamuklu Havuç Kalıp Şerit Detaylı Dokuma Pantolon",
              colors: ["Yaşıl"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "haki-havuc-kalibi-salvar",
            },
            {
              product_id: 202,
              product_name: "Parlaq Keten Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty1474/product/media/images/prod/QC/20240622/11/4892261c-2621-3b78-969b-497bb953c1d8/1_org_zoom.jpg",
              description: "Parlak Keten Cepli Beli Lastikli Pantolon - Haki",
              colors: ["Yaşıl"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "parlaq-keten-salvar",
            },
            {
              product_id: 203,
              product_name: "Mavi Yüksək Bel Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.sorsware.com/oxxo/ContentImages/Product/23y/23YOX-AMELIATALL/yuksek-bel-wide-leg-pantolon_light-denim-mavi_1_buyuk.jpg",
              description: "Mavi Yüksək Bel Wide Leg Pantolon",
              colors: ["Mavi"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "mavi-yuksek-bel-salvar",
            },
            {
              product_id: 204,
              product_name: "Mavi Düz Kəsim Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.sorsware.com/oxxo/ContentImages/Product/22y/22YOX-ELAINE/yuksek-bel-straight-fit-denim-pantolon_rodeo-denim-mavi_1_detay.jpg",
              description: "Mavi Düz Kəsim Denim Pantolon",
              colors: ["Mavi"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "mavi-duz-kesim-salvar",
            },
            {
              product_id: 205,
              product_name: "Narıncı Rahat Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.sorsware.com/oxxo/ContentImages/Product/21y/21YOX-PAVBELPAN21Y/carrot-fit-bagcikli-pantolon_aragonite-turuncu_1_detay.jpg",
              description: "Narıncı Rahat Yumşaq Teksturalı Şalvar",
              colors: ["Narıncı"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "narinci-rahat-salvar",
            },
            {
              product_id: 206,
              product_name: "Narıncı Skinny Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.sorsware.com/oxxo/ContentImages/Product/19y/19YOX-WELMIDPAN19Y/orta-bel-dar-paca-pantolon_antik-arizona-turuncu_1_detay.jpg",
              description: "Narıncı Orta Bel Skinny Pantolon",
              colors: ["Narıncı"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "narinci-skinny-salvar",
            },
            {
              product_id: 207,
              product_name: "Narıncı Jogger Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.sorsware.com/oxxo/ContentImages/Product/22y/22YOX-NEMSPANJOG2/yumusak-dokulu-jogger-pantolon--tencel-_antik-tangerine-tango-turuncu_1_detay.jpg",
              description: "Narıncı Jogger Pantolon",
              colors: ["Narıncı"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "narinci-jogger-salvar",
            },
            {
              product_id: 208,
              product_name: "Haki Cargo Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.sorsware.com/oxxo/ContentImages/Product/23y/23YOX-YEARO/yüksek-bel-cargo-pantolon_haki_1_detay.jpg",
              description: "Haki Yüksek Bel Cargo Pantolon",
              colors: ["Yaşıl"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "haki-cargo-salvar",
            },
            {
              product_id: 209,
              product_name: "Gri Casual Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty1474/product/media/images/prod/QC/20240814/10/773f1a8d-4389-3489-bf6e-1db99dcf3f92/1_org_zoom.jpg",
              description: "Gri Casual Havuç Kalıbı Pantolon",
              colors: ["Gri"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "gri-casual-salvar",
            },
            {
              product_id: 210,
              product_name: "Qara Düz Kəsim Şalvar",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty1537/product/media/images/ty1536/prod/QC/20240911/18/e6aecfa4-08d6-3842-af91-78bbc59e3c36/1_org_zoom.jpg",
              description: "Qara Düz Kəsim Slim Fit Pantolon",
              colors: ["Qara"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
              slug: "qara-duz-kesim-salvar",
            },
            {
              product_id: 211,
              product_name: "Siyah Suni Deri Pantolon",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty990/product/media/images/jpim-outputs/assets/product/media/images/20230828/11/408464523/965283557/3/3_org_zoom.jpg",
              description: "Siyah Suni Deri Wide Leg Cep Detaylı Örme Pantolon",
              colors: ["Qara"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
            },
            {
              product_id: 212,
              product_name: "Beyaz Palazzo Pantolon",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty1526/product/media/images/prod/QC/20240905/23/f426d926-332b-32f5-8e35-c2df5e6333f7/1_org_zoom.jpg",
              description: "Kadın Pileli Kumaş yüksek bel Palazzo Pantolon",
              colors: ["Ağ"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
            },
            {
              product_id: 213,
              product_name: "Korse Detaylı Pantolon",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty733/product/media/images/20230216/9/282033805/644547521/1/1_org_zoom.jpg",
              description: "Siyah Korse Detaylı Dokuma Pantolon",
              colors: ["Qara"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
            },
            {
              product_id: 214,
              product_name: "Kırmızı Bol Paça Pantolon",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty1298/product/media/images/prod/PIM/20240506/14/5afac34d-efc3-4b3e-af80-0eba8360566c/1_org_zoom.jpg",
              description:
                "Kadın Kırmızı Yüksek Bel Önü Çimalı Bol Paça Likralı Pantolon ALC-X9979",
              colors: ["Qırmızı"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
            },
            {
              product_id: 215,
              product_name: "Kırmızı Keten Pantolon",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty1534/product/media/images/prod/QC/20240909/15/bf2b94a6-efce-3878-9775-01797b267cd5/1_org_zoom.jpg",
              description: "Kırmızı Keten Pantolon",
              colors: ["Qırmızı"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
            },
            {
              product_id: 216,
              product_name: "İspanyol Paça Kırmızı Pantolon",
              price: 60.0,
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://cdn.dsmcdn.com/ty1412/product/media/images/prod/QC/20240529/00/fe71055d-4bf6-3d7a-b43f-dc08fc628da1/1_org_zoom.jpg",
              description: "İspanyol Paça Pantolon Kırmızı",
              colors: ["Qırmızı"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.2,
                  comment: "Çox rahat və yaxşı keyfiyyət.",
                },
                {
                  review_id: 16,
                  rating: 4.0,
                  comment: "Gözəl görünür, amma bir az dar.",
                },
              ],
            },
          ],
        },

        {
          subkateqoriya_id: 8,
          subkateqoriya_adı: "Qadın Çantası",
          məhsullar: [
            {
              product_id: 300,
              product_name: "BUTIGO Qadın Çanta",
              price: 25.0,
              original_price: 50.0,
              discount: 50,
              salesCount: 80,
              image_url:
                "https://flostore.az/wp-content/uploads/2024/03/DHO-00065802-12-300x400.jpg",
              description:
                "Zərif və dayanıqlı materialdan hazırlanmış şık çiyin çantası.",
              colors: ["Qara"],
              sizes: ["ST"],
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
              slug: "butigo-qadin-canta",
            },
            {
              product_id: 301,
              product_name: "BUTIGO Qadın Çanta",
              price: 40.0,
              original_price: 70.0,
              discount: 42.86,
              salesCount: 80,
              image_url:
                "https://flostore.az/wp-content/uploads/2024/02/DHO-00064124-600x900.jpg",
              description: "Hər gün üçün uyğun olan şık çiyin çantası.",
              colors: ["Qara"],
              sizes: ["ST"],
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
              slug: "butigo-qadin-canta-2",
            },
            {
              product_id: 302,
              product_name: "BLUMBERJACK Qadın Çanta",
              price: 200.0,
              original_price: 230.0,
              discount: 13.04,
              salesCount: 80,
              image_url:
                "https://flostore.az/wp-content/uploads/2024/02/DHO-00064120-600x900.jpg",
              description:
                "Gündəlik istifadə üçün mükəmməl rahatlıqda və şık dizayna malik çiyin çantası.",
              colors: ["Qara"],
              sizes: ["ST"],
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
              slug: "blumberjack-qadin-canta",
            },
            {
              product_id: 303,
              product_name: "BLUMBERJACK Qadın Çanta",
              price: 200.0,
              original_price: 250.0,
              discount: 20,
              salesCount: 80,
              image_url:
                "https://flostore.az/wp-content/uploads/2023/04/DHO-00059276-5-1.jpg",
              description:
                "Şık və minimal dizaynlı çiyin çantası, gündəlik istifadə üçün idealdır.",
              colors: ["Ağ"],
              sizes: ["ST"],
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
              slug: "blumberjack-qadin-canta-2",
            },

            {
              product_id: 304,
              product_name: "BLUMBERJACK Qadın Çanta",
              price: 140.0,
              original_price: 200.0,
              discount: 30, // (200 - 140) / 200 * 100 = 30%
              salesCount: 80,
              image_url:
                "https://flostore.az/wp-content/uploads/2023/03/DHO-00058154-5-600x900.jpg",
              description:
                "Gündəlik istifadə üçün mükəmməl olan şık və rahat çiyin çantası.",
              colors: ["Mavi"],
              sizes: ["ST"],
              slug: "blumberjack-qadin-canta-3",
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },
            {
              product_id: 305,
              product_name: "LUMBERJACK Qadın Çanta",
              price: 130.0,
              original_price: 150.0,
              discount: 13.33, // (150 - 130) / 150 * 100 = 13.33%
              salesCount: 80,
              image_url:
                "https://flostore.az/wp-content/uploads/2023/02/DHO-00055187-4-600x900.jpg",
              description:
                "Hər gün üçün uyğun, şık və modern dizaynlı çiyin çantası.",
              colors: ["Mavi"],
              sizes: ["ST"],
              slug: "lumberjack-qadin-canta",
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },
            {
              product_id: 306,
              product_name: "LUMBERJACK Qadın Çanta",
              price: 70.0,
              original_price: 90.0,
              discount: 22.22, // (90 - 70) / 90 * 100 = 22.22%
              salesCount: 80,
              image_url:
                "https://flostore.az/wp-content/uploads/2023/02/DHO-00057612-5-600x900.jpg",
              description:
                "Şık və rəngarəng dizayna malik çiyin çantası, gündəlik istifadə üçün idealdır.",
              colors: ["Narinci"],
              sizes: ["ST"],
              slug: "lumberjack-qadin-canta-2",
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },
            {
              product_id: 307,
              product_name: "Çiyin çantası W.D.Polo ağ",
              price: 44.0,
              original_price: 80.0,
              discount: 45, // (80 - 44) / 80 * 100 = 45%
              salesCount: 80,
              image_url:
                "https://strgimgr.umico.az/sized/840/679091-222b96bdb2b5465a66ea36118ae777c5.jpg",
              description:
                "Zərif və şık dizayna malik ağ çiyin çantası, hər gün üçün mükəmməl seçim.",
              colors: ["Ağ"],
              sizes: ["ST"],
              slug: "ciyin-cantasi-wd-polo-ag",
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },
            {
              product_id: 308,
              product_name: "Fendi",
              price: 1900.0,
              original_price: 2000.0,
              discount: 5, // (2000 - 1900) / 2000 * 100 = 5%
              salesCount: 80,
              image_url:
                "https://cdn2.emporium.az/i/p/500/232717-ccfd9ceae8987b3691a9c1745df65a9e.jpg",
              description: "Dəri Sunshine kiçik çantası",
              colors: ["Narinci"],
              sizes: ["ST"],
              slug: "fendi-sunshine-kiçik-cantasi",
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },

            {
              product_id: 309,
              product_name: "Bottega Veneta",
              price: 44.0,
              original_price: 80.0,
              discount: 45, // Discount calculated as (80 - 44) / 80 * 100 = 45%
              salesCount: 80,
              image_url:
                "https://cdn2.emporium.az/i/p/500/188969-58cd51496d6e35f03443c2459a84bb47.jpg",
              description:
                "Tünd-qırmızı rəngli dəri 'Cassette' aşırma çantası, göz oxşayan dizaynla.",
              colors: ["Qırmızı"],
              sizes: ["ST"],
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },
            {
              product_id: 310,
              product_name: "Marc Jacobs",
              price: 700.0,
              original_price: 800.0,
              discount: 12.5, // Discount calculated as (800 - 700) / 800 * 100 = 12.5%
              salesCount: 80,
              image_url:
                "https://cdn2.emporium.az/i/p/500/294061-8a1306b416f4bf5cd9d13c5e4225d061.jpg",
              description:
                "The Jelly Small Tote çantası, gündəlik istifadə üçün ideal seçim.",
              colors: ["Qırmızı"],
              sizes: ["ST"],
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },
            {
              product_id: 311,
              product_name: "Tory Burch",
              price: 540.0,
              original_price: 560.0,
              discount: 3.57, // Discount calculated as (560 - 540) / 560 * 100 ≈ 3.57%
              salesCount: 80,
              image_url:
                "https://cdn2.emporium.az/i/p/500/287736-43cc5f51e5ec2ca87bd2dec1b9b4d25c.jpg",
              description:
                "Loqo detallı mini çanta, zərif və funksional aksesuar.",
              colors: ["Sarı"],
              sizes: ["ST"],
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },
            {
              product_id: 312,
              product_name: "Tory Burch",
              price: 540.0,
              original_price: 560.0,
              discount: 3.57, // Discount calculated as (560 - 540) / 560 * 100 ≈ 3.57%
              salesCount: 80,
              image_url:
                "https://cdn2.emporium.az/i/p/500/248229-1b9621dbd58313178774d5622b021198.jpg",
              description:
                "Sırıqlı dizaynlı kiçik ölçülü çiyindən asma Fleming çantası.",
              colors: ["Sarı"],
              sizes: ["ST"],
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },
            {
              product_id: 313,
              product_name: "Jimmy Choo",
              price: 140.0,
              original_price: 160.0,
              discount: 12.5, // Discount calculated as (160 - 140) / 160 * 100 = 12.5%
              salesCount: 80,
              image_url:
                "https://cdn2.emporium.az/i/p/500/258772-59d1b6e65e8afc23ce53dba8326f77dc.jpg",
              description: "Kristalla bəzədilmiş Bon Bon mini çantası.",
              colors: ["Yaşıl"],
              sizes: ["ST"],
              reviews: [
                {
                  review_id: 22,
                  rating: 4.7,
                  comment: "Gözəl dizayn və yüksək keyfiyyət.",
                },
              ],
            },
          ],
        },

        {
          subkateqoriya_id: 9,
          subkateqoriya_adı: "Kosmetika",
          məhsullar: [
            {
              product_id: 400,
              product_name: "Estée Lauder",
              price: 100.0,
              original_price: 120.0,
              discount: 16.67, // (120 - 100) / 120 * 100 ≈ 16.67%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/169119-p1f1qpkrpq3g51qne1u811c455uq7.jpg",
              description: "Double Wear qalıcı tonal kremi - 1N2 Ecru.",
              colors: ["Sarı"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 401,
              product_name: "MAC",
              price: 80.0,
              original_price: 80.0,
              discount: 0, // (80 - 80) / 80 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/266015-49b56201dbc97a18775c225d0ca4e4ba.jpg",
              description:
                "Kirşan və tonal əsas Studio Fix Powder Plus Foundation.",
              colors: ["Sarı"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 402,
              product_name: "Bobbi Brown",
              price: 60.0,
              original_price: 60.0,
              discount: 0, // (60 - 60) / 60 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/237401-b57947cf5b2f3ada78c2799b72b9ed33.jpg",
              description: "Corrector Skin Full Cover Concealer - Warm Beige.",
              colors: ["Sarı"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 403,
              product_name: "Estée Lauder",
              price: 135.0,
              original_price: 135.0,
              discount: 0, // (135 - 135) / 135 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/224277-7fa7454bf2c96c53040891f4f026ffba.jpg",
              description:
                "Pure Color Envy göz kölgəsi paleti - 01 Rebel Petals.",
              colors: ["Sarı"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 404,
              product_name: "Bobbi Brown",
              price: 65.0,
              original_price: 65.0,
              discount: 0, // (65 - 65) / 65 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/231831-b014ffedae42a65c1a56bef7fcb815c1.jpg",
              description:
                "Natural Brow Shaper universal qaş geli - Espresso​.",
              colors: ["Qara"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 405,
              product_name: "Estée Lauder",
              price: 90.0,
              original_price: 90.0,
              discount: 0, // (90 - 90) / 90 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/216894-70f41834a5bfcfdaa4efdb7892612a5f.jpg",
              description: "Nəmləndirici dodaq balzamı - 003 Sun Crystal​.",
              colors: ["Qırmızı"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 406,
              product_name: "MAC",
              price: 60.0,
              original_price: 60.0,
              discount: 0, // (60 - 60) / 60 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/288067-0fb61be53f863995a53d16280d861512.jpg",
              description:
                "M·A·Cximal Silky Matte Lipstick dodaq boyası - Ruby Woo.",
              colors: ["Qırmızı"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 407,
              product_name: "Bobbi Brown",
              price: 80.0,
              original_price: 80.0,
              discount: 0, // (80 - 80) / 80 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/282345-b0346e661d79e25ca4fcfdabf62263b6.jpg",
              description: "Ənlik - Flame.",
              colors: ["Qırmızı"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 408,
              product_name: "MAC",
              price: 50.0,
              original_price: 50.0,
              discount: 0, // (50 - 50) / 50 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/199494-5025a18a47f320f68d14ab9877bbfcbd.jpg",
              description:
                "Dodaq boyası 'Retro Matte Liquid Lipcolour' - High Drama.",
              colors: ["Qırmızı"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 409,
              product_name: "MAC",
              price: 45.0,
              original_price: 45.0,
              discount: 0, // (45 - 45) / 45 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/267751-e19408c71f9fd8e1e6aab1103945be22.jpg",
              description: "Göz kölgəsi - Mint Condition.",
              colors: ["Yaşıl"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 410,
              product_name: "MAC",
              price: 50.0,
              original_price: 50.0,
              discount: 0, // (50 - 50) / 50 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/238951-48ef0080c1f674754bec6b3592d64403.jpg",
              description: "Göz üçun Colour excess layneri - Pool Shark.",
              colors: ["Yaşıl"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 411,
              product_name: "MAC",
              price: 40.0,
              original_price: 40.0,
              discount: 0, // (40 - 40) / 40 * 100 = 0%
              salesCount: 200,
              image_url:
                "https://cdn2.emporium.az/i/p/500/223799-0abce88b7163100a844caf5324f6e201.jpg",
              description: "Mat effektli göz layneri - 'Eye kohl - Minted'.",
              colors: ["Yaşıl"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.5,
                  comment: "Rənglər çox gözəl və pigmentlidir.",
                },
              ],
            },
            {
              product_id: 412,
              product_name: "Lancôme",
              price: 65.0,
              original_price: 65.0,
              discount: 0, // (65 - 65) / 65 * 100 = 0%
              image_url:
                "https://cdn2.emporium.az/i/p/500/289145-e7be2a652d9c252d7c4714c0bba704f1.jpg",
              description: "Makiyaj təmizləyici süd Lait Galatee Confort.",
              colors: ["Ağ"],
              reviews: [
                {
                  review_id: 24,
                  rating: 5.0,
                  comment:
                    "Bu məhsul makiyajı asanlıqla təmizləyir və dərimdə heç bir qıcıqlanma yaratmır. Çox məmnunam!",
                },
                {
                  review_id: 25,
                  rating: 4.8,
                  comment:
                    "Təhlükəsiz və yüngül formula, dərim üçün mükəmməl. Yenidən alacağam!",
                },
              ],
            },
            {
              product_id: 413,
              product_name: "Lancôme",
              price: 70.0,
              original_price: 70.0,
              discount: 0, // (70 - 70) / 70 * 100 = 0%
              salesCount: 100,
              image_url:
                "https://cdn2.emporium.az/i/p/500/164067-p1evk1juv71ol9e7kqb1gbo1t527.jpg",
              description:
                "Göz makiyajını silmək üçün vasitə 'Gentle Eye Makeup Remover'.",
              colors: ["Mavi"],
              reviews: [
                {
                  review_id: 26,
                  rating: 4.7,
                  comment:
                    "Göz makiyajını rahatlıqla silir. Həqiqətən yüngül və təsirlidir.",
                },
                {
                  review_id: 27,
                  rating: 5.0,
                  comment:
                    "Bu məhsul gözlərimdəki makiyajı asanlıqla və sürətlə çıxarır. Çox sevirəm!",
                },
              ],
            },
            {
              product_id: 414,
              product_name: "Lancôme",
              price: 75.0,
              original_price: 75.0,
              discount: 0, // (75 - 75) / 75 * 100 = 0%
              salesCount: 60,
              image_url:
                "https://cdn2.emporium.az/i/p/500/165127-p1f016q2k91eli1hu21kmm5jjh0f7.jpg",
              description:
                "''Bi-Facil'' Iki hissəli göz üçün makiyaj təmizləyici vasitə.",
              colors: ["Mavi"],
              reviews: [
                {
                  review_id: 28,
                  rating: 4.9,
                  comment:
                    "Hər dəfə istifadə etdiyimdə, göz makiyajım tamamilə təmizlənir. Tərifəlayiqdir!",
                },
                {
                  review_id: 29,
                  rating: 4.6,
                  comment:
                    "İki hissəli formula göz makiyajını asanlıqla və tez bir zamanda təmizləyir. Mükəmməl!",
                },
              ],
            },
          ],
        },

        {
          subkateqoriya_id: 10,
          subkateqoriya_adı: "Aksesuarlar",
          məhsullar: [
            {
              product_id: 500,
              product_name: "Les Nereides",
              price: 80.0,
              original_price: 90.0,
              discount: 11.11, // Hesablanmış endirim
              salesCount: 150,
              image_url:
                "https://cdn2.emporium.az/i/p/500/250253-c6c7c689503a6d122516953096a9c4b4.jpg",
              description: "Pion gülü detallı boyunbaq.",
              colors: ["Ağ"],
              sizes: ["One Size"],
              reviews: [
                {
                  review_id: 1001,
                  rating: 5.0,
                  comment:
                    "Bu boyunbaq sadəcə gözəl deyil, həm də hər vəziyyətə uyğundur. Sevirəm!",
                },
                {
                  review_id: 1002,
                  rating: 4.8,
                  comment:
                    "Dizaynı və keyfiyyəti mükəmməl! Fırçalananda da parlaq qalır.",
                },
              ],
              slug: "les-nereides", // Slug əlavə edildi
            },
            {
              product_id: 501,
              product_name: "Versace",
              price: 80.0,
              original_price: 190.0,
              discount: 57.89, // Hesablanmış endirim
              salesCount: 150,
              image_url:
                "https://cdn2.emporium.az/i/p/500/251321-bb8395ab6cca9aafac60febfcb5db5b8.jpg",
              description: "Loqo detallı Medusa boyunbağısı.",
              colors: ["Qara"],
              sizes: ["One Size"],
              reviews: [
                {
                  review_id: 1003,
                  rating: 5.0,
                  comment:
                    "Zərif dizaynı ilə hər kəsin diqqətini çəkir. Hər kəsə tövsiyə edirəm!",
                },
                {
                  review_id: 1004,
                  rating: 4.7,
                  comment:
                    "Boyunbağı rahatdır və hər cür geyimlə gözəl görünür.",
                },
              ],
              slug: "versace", // Slug əlavə edildi
            },
            {
              product_id: 502,
              product_name: "Damiani",
              price: 3000.0,
              original_price: 3200.0,
              discount: 6.25, // Hesablanmış endirim
              salesCount: 150,
              image_url:
                "https://cdn2.emporium.az/i/p/500/246446-19da2470fc86ac9f10ed74fa21797e2b.jpg",
              description: "Brilyant və oniks daşlarla bəzədilmiş boyunbağı.",
              colors: ["Qırmızı"],
              sizes: ["One Size"],
              reviews: [
                {
                  review_id: 1005,
                  rating: 4.9,
                  comment:
                    "Möhtəşəm! Dəriyə qarşı yumşaqdır və parıltısı göz alıcıdır.",
                },
                {
                  review_id: 1006,
                  rating: 5.0,
                  comment:
                    "Dəyəri hər şeyə dəyər. Bu boyunbaq mükəmməl hədiyyədir!",
                },
              ],
              slug: "damiani-1", // Slug əlavə edildi
            },
            {
              product_id: 503,
              product_name: "Damiani",
              price: 3000.0,
              original_price: 3200.0,
              discount: 6.25, // Hesablanmış endirim
              salesCount: 150,
              image_url:
                "https://cdn2.emporium.az/i/p/500/246446-19da2470fc86ac9f10ed74fa21797e2b.jpg",
              description: "Brilyant və oniks daşlarla bəzədilmiş boyunbağı.",
              colors: ["Qırmızı"],
              sizes: ["One Size"],
              reviews: [
                {
                  review_id: 1005,
                  rating: 4.9,
                  comment:
                    "Möhtəşəm! Dəriyə qarşı yumşaqdır və parıltısı göz alıcıdır.",
                },
                {
                  review_id: 1006,
                  rating: 5.0,
                  comment:
                    "Dəyəri hər şeyə dəyər. Bu boyunbaq mükəmməl hədiyyədir!",
                },
              ],
              slug: "damiani-2", // Slug əlavə edildi
            },
            {
              product_id: 504,
              product_name: "Chaumet",
              price: 8000.0,
              original_price: 8235.0,
              discount: 6.25, // Hesablanmış endirim
              salesCount: 150,
              image_url:
                "https://cdn2.emporium.az/i/p/500/233359-ebbe8099dd613d47bedfcfe7f4391a68.jpg",
              description:
                "Malaxit və brilyant daşlarla bəzədilmiş Jeux De Liens boyunbağısı",
              colors: ["Yaşıl"],
              sizes: ["One Size"],
              reviews: [
                {
                  review_id: 1005,
                  rating: 4.9,
                  comment:
                    "Möhtəşəm! Dəriyə qarşı yumşaqdır və parıltısı göz alıcıdır.",
                },
                {
                  review_id: 1006,
                  rating: 5.0,
                  comment:
                    "Dəyəri hər şeyə dəyər. Bu boyunbaq mükəmməl hədiyyədir!",
                },
              ],
              slug: "chaumet", // Slug əlavə edildi
            },
          ],
        },
      ],
    },

    {
      kateqoriya_id: 2,
      kateqoriya_adı: "Kişi",
      icon: IoIosMan,
      subkateqoriyalar: [
        {
          subkateqoriya_id: 1,
          subkateqoriya_adı: "Kişi Ust Geyimi",
          məhsullar: [
            {
              product_id: 1000,
              product_name: "Kişi Tünd Yaşıl Mont",
              price: 45.0,
              slug: "kisi_tund_yasil_mont",
              original_price: 60.0,
              discount: 15,
              salesCount: 120,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/09/19/1082469/6002ec58-76a8-4710-a30b-d5ce5888856d_size796x1198_quality100_cropCenter.jpg",
              description: "Yay üçün rahat və dəbli kişi tünd yaşıl mont.",
              colors: ["Yaşıl"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment: "Rahat material və gözəl dizayn.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment: "Rəngləri çox bəyəndim.",
                },
              ],
            },
            {
              product_id: 1001,
              product_name: "Kişi Gödəkçə",
              price: 90.0,
              slug: "kisi_ağ_godekce",
              original_price: 120.0,
              discount: 30,
              salesCount: 200,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/21/1092681/f30e4159-9fc6-46f9-a194-5bd2092fffaa_size796x1198_quality100_cropCenter.jpg",
              description: "Qış üçün isti və rahat kişi gödəkçəsi.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                {
                  review_id: 3,
                  rating: 5.0,
                  comment: "Çox isti saxlayır, qış üçün əla seçimdir.",
                },
                {
                  review_id: 4,
                  rating: 4.8,
                  comment: "Keyfiyyəti çox yaxşıdır.",
                },
              ],
            },
            {
              product_id: 1002,
              product_name: "Polo Kişi Paltosu",
              price: 70.0,
              slug: "polo_kisi_paltosu",
              original_price: 85.0,
              discount: 15,
              salesCount: 95,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/01/1062437/2e68d9f4-3acc-47bc-8742-b13597290b3a_size796x1198_quality100_cropCenter.jpg",
              description: "Payız üçün yüngül və rahat kişi paltosu.",
              colors: ["Yaşıl"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 5,
                  rating: 4.3,
                  comment: "Yaxşı oturur, rahat geyimdir.",
                },
                {
                  review_id: 6,
                  rating: 4.0,
                  comment: "İsti və yüngül.",
                },
              ],
            },
            {
              product_id: 1003,
              product_name: "Polo Göy Mont",
              price: 55.0,
              slug: "polo_goy_mont",
              original_price: 70.0,
              discount: 15,
              salesCount: 170,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/08/1081467/d8892814-52e7-4c61-8244-95b317a34768_size796x1198_quality100_cropCenter.jpg",
              description: "Gündəlik istifadə üçün rahat kişi mont.",
              colors: ["Mavi"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 7,
                  rating: 4.2,
                  comment: "Çox rahat və keyfiyyətlidir.",
                },
                {
                  review_id: 8,
                  rating: 4.0,
                  comment: "Sadə dizaynı çox bəyəndim.",
                },
              ],
            },
            {
              product_id: 1004,
              product_name: "Boz Kişi Paltosu",
              price: 40.0,
              slug: "boz_kisi_paltosu",
              original_price: 55.0,
              discount: 15,
              salesCount: 140,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/04/1065111/3078c5b1-15ef-4928-a6ff-6ed937e44435_size796x1198_quality100_cropCenter.jpg",
              description: "Payız üçün rahat və eleqant boz kişi paltosu.",
              colors: ["Boz"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 9,
                  rating: 4.5,
                  comment: "Materialı çox rahatdır, keyfiyyətlidir.",
                },
                {
                  review_id: 10,
                  rating: 4.2,
                  comment: "Gündəlik istifadə üçün əlverişlidir.",
                },
              ],
            },
            {
              product_id: 1005,
              product_name: "Kişi Gödəkçəsi",
              price: 110.0,
              slug: "kisi_cins_godekcesi",
              original_price: 140.0,
              discount: 30,
              salesCount: 75,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/30/1081512/d14c82d6-d022-4fcb-94c8-7bd3a73ae983_size796x1198_quality100_cropCenter.jpg",
              description: "Dəbli və eleqant kişi gödəkçəsi.",
              colors: ["Mavi"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 11,
                  rating: 4.7,
                  comment: "Dizaynı çox zövqlüdür, eleqant bir seçimdir.",
                },
                {
                  review_id: 12,
                  rating: 4.3,
                  comment:
                    "Sərin havalar üçün əladır, gündəlik istifadəyə uyğundur.",
                },
              ],
            },
            {
              product_id: 1006,
              product_name: "Qara Kişi Paltosu",
              price: 65.0,
              slug: "qara_kisi_paltosu",
              original_price: 80.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/09/19/1081636/05e252cd-acf3-4f95-b6e3-d07dc9f9f244_size780x1170_quality100_cropCenter.jpg",
              description: "Klassik görünüşlü qara kişi paltosu.",
              colors: ["Qara"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 13,
                  rating: 4.6,
                  comment: "Çox zərif və rahatdır.",
                },
                {
                  review_id: 14,
                  rating: 4.4,
                  comment: "İş üçün mükəmməl seçimdir.",
                },
              ],
            },
            {
              product_id: 1007,
              product_name: "Kişi Bej Dəri Gödəkçə",
              price: 80.0,
              slug: "kisi_bej_deri_godekce",
              original_price: 100.0,
              discount: 20,
              salesCount: 110,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/07/1093377/af6678e3-543c-4752-8a15-ddd244719d29_size796x1198_quality100_cropCenter.jpg",
              description: "Yay axşamları üçün bej rəngli kişi dəri gödəkçəsi.",
              colors: ["Bej"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                {
                  review_id: 15,
                  rating: 4.1,
                  comment: "Rahat və şık görünüş.",
                },
                {
                  review_id: 16,
                  rating: 4.3,
                  comment: "Yay üçün ideal geyimdir.",
                },
              ],
            },
            {
              product_id: 1008,
              product_name: "Kişi Qara Dəri Gödəkçə",
              price: 60.0,
              slug: "kisi_qara_deri_godekce",
              original_price: 75.0,
              discount: 15,
              salesCount: 185,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/09/19/1067422/cffa8109-9111-4664-ab08-472b370abb25_size796x1198_quality100_cropCenter.jpg",
              description: "Kapüşonlu və rahat qara kişi dəri gödəkçəsi.",
              colors: ["Qara"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 17,
                  rating: 4.8,
                  comment: "Çox rahatdır, qış üçün əla.",
                },
                {
                  review_id: 18,
                  rating: 4.5,
                  comment: "Şık və gündəlik geyim üçün uyğundur.",
                },
              ],
            },
            {
              product_id: 1009,
              product_name: "Kişi Ceket",
              price: 100.0,
              slug: "kisi_ceket",
              original_price: 130.0,
              discount: 30,
              salesCount: 95,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/09/23/1062879/4d8af8c3-d070-453f-a466-e4f0828197df_size796x1198_quality100_cropCenter.jpg",
              description:
                "Eleqant kişi ceketi, rəsmi tədbirlər üçün uyğundur.",
              colors: ["Boz"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                {
                  review_id: 19,
                  rating: 4.5,
                  comment: "Gözəl görünüşə malikdir.",
                },
                {
                  review_id: 20,
                  rating: 4.2,
                  comment: "Rəsmi tədbirlər üçün idealdır.",
                },
              ],
            },
            {
              product_id: 1010,
              product_name: "Kişi Sarı Jilet",
              price: 75.0,
              slug: "kisi_sarı_jilet",
              original_price: 90.0,
              discount: 15,
              salesCount: 130,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2023/09/14/919961/4d21d828-d7f3-4970-a381-8977cbffec01_size780x1170_quality100_cropCenter.jpg",
              description: "Rəsmi görüşlər üçün klassik kişi jileti.",
              colors: ["Sarı"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                {
                  review_id: 21,
                  rating: 4.7,
                  comment: "Çox zərif və rahatdır.",
                },
                {
                  review_id: 22,
                  rating: 4.6,
                  comment: "İş görüşləri üçün uyğundur.",
                },
              ],
            },
            {
              product_id: 1011,
              product_name: "Kişi Qış Gödəkçəsi",
              price: 150.0,
              slug: "kisi_qis_godekcesi",
              original_price: 180.0,
              discount: 30,
              salesCount: 90,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/01/1062439/ea675d2b-b04c-40c8-8755-06813641c42e_size780x1170_quality100_cropCenter.jpg",
              description:
                "Qışın soyuq günləri üçün qalın və rahat kişi gödəkçəsi.",
              colors: ["Qırmızı"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                {
                  review_id: 23,
                  rating: 4.8,
                  comment: "Qış üçün mükəmməl seçimdir.",
                },
                {
                  review_id: 24,
                  rating: 4.7,
                  comment: "İsti saxlayır və rahatdır.",
                },
              ],
            },
            {
              product_id: 1012,
              product_name: "Kişi İdman Jileti",
              price: 65.0,
              slug: "kisi_idman_jileti",
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/01/1062410/401f693f-3500-4de1-abfc-6476c27b4c5d_size780x1170_quality100_cropCenter.jpg",
              description: "İdman fəaliyyəti üçün yüngül kişi jileti.",
              colors: ["Mavi"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 25,
                  rating: 4.3,
                  comment: "Yüngül və rahatdır.",
                },
                {
                  review_id: 26,
                  rating: 4.0,
                  comment: "Sport fəaliyyəti üçün uyğundur.",
                },
              ],
            },
            {
              product_id: 1013,
              product_name: "Kişilər Xaki Jilet",
              price: 80.0,
              slug: "kisi_xaki_jilet",
              original_price: 100.0,
              discount: 20,
              salesCount: 85,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/10/1081508/84da5bf7-c53c-4340-a051-32797fe180fd_size796x1198_quality100_cropCenter.jpg",
              description: "Qış üçün isti və rahat kişi xaki rəngli jileti.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                { review_id: 27, rating: 4.5, comment: "İsti və rahatdır." },
                {
                  review_id: 28,
                  rating: 4.2,
                  comment: "Qış üçün əla seçimdir.",
                },
              ],
            },
            {
              product_id: 1014,
              product_name: "Kişi Püstə Yaşıl Jilet",
              price: 70.0,
              slug: "kisi_puste_yasil_jilet",
              original_price: 85.0,
              discount: 15,
              salesCount: 115,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/09/04/1046652/eefdce72-77b6-49e6-b5a9-c236e7172478_size796x1198_quality100_cropCenter.jpg",
              description:
                "Gündəlik istifadə üçün dəbli kişi püstə yaşıl rəngli jileti.",
              colors: ["Sarı"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 29, rating: 4.4, comment: "Çox dəblidir." },
                {
                  review_id: 30,
                  rating: 4.1,
                  comment: "Materialı keyfiyyətlidir.",
                },
              ],
            },
            {
              product_id: 1015,
              product_name: "Bordo Kişi Jileti",
              price: 85.0,
              slug: "bordo_kisi_jileti",
              original_price: 100.0,
              discount: 15,
              salesCount: 160,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/07/30/1045614/a40094ba-8293-4b39-ae41-0df303f55945_size796x1198_quality100_cropCenter.jpg",
              description:
                "Kapüşonlu və rahat bordo rəngli kişi jileti, gündəlik istifadə üçün uyğundur.",
              colors: ["Qırmızı"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 31,
                  rating: 4.7,
                  comment: "Gözəl oturur, gündəlik geyim üçün idealdır.",
                },
                {
                  review_id: 32,
                  rating: 4.6,
                  comment: "Kapüşonlu olduğu üçün daha praktikdir.",
                },
              ],
            },
            {
              product_id: 1016,
              product_name: "Kişi Boz Jilet",
              price: 60.0,
              slug: "kisi_boz_jilet",
              original_price: 75.0,
              discount: 15,
              salesCount: 105,
              image_url: "https://example.com/kisi_boz_jilet.jpg",
              description: "Yüngül və rahat kişi jileti.",
              colors: ["Boz"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 33, rating: 4.2, comment: "Rahat və yüngül." },
                { review_id: 34, rating: 4.0, comment: "Dəbli və gözəldir." },
              ],
            },
            {
              product_id: 1017,
              product_name: "Kişi Jilet",
              price: 50.0,
              slug: "kisi_jilet",
              original_price: 65.0,
              discount: 15,
              salesCount: 140,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/09/03/1046689/5e1c19a3-5730-4289-8a61-c4b9f348db85_size796x1198_quality100_cropCenter.jpg",
              description: "Rahat və gündəlik istifadə üçün uyğun kişi jileti.",
              colors: ["Narinci"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                { review_id: 35, rating: 4.5, comment: "Rahat və sadədir." },
                {
                  review_id: 36,
                  rating: 4.3,
                  comment: "Yaxşı material və dizayn.",
                },
              ],
            },
            {
              product_id: 1018,
              product_name: "Kişi Paltosu",
              price: 95.0,
              slug: "kisi_paltosu",
              original_price: 110.0,
              discount: 15,
              salesCount: 75,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2023/10/27/919986/a4f10ba6-c664-445c-9fb3-799b7bba57f8_size796x1198_quality100_cropCenter.jpg",
              description:
                "Eleqant və dəbli kişi paltosu, rəsmi tədbirlər üçün uyğundur.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                {
                  review_id: 37,
                  rating: 4.6,
                  comment: "Rəsmi tədbirlər üçün uyğundur.",
                },
                { review_id: 38, rating: 4.4, comment: "Zərif və eleqantdır." },
              ],
            },
            {
              product_id: 1019,
              product_name: "Kişi Narinci Kurtka",
              price: 120.0,
              slug: "kisi_narinci_kurtka",
              original_price: 150.0,
              discount: 30,
              salesCount: 50,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/10/1094021/0aa1e09d-91fb-48ad-b4ef-718eb26597e7_size796x1198_quality100_cropCenter.jpg",
              description: "Yaz üçün yüngül və rahat kişi kurtkası.",
              colors: ["Narinci"],
              sizes: ["M", "L", "XL"],
              reviews: [
                { review_id: 39, rating: 4.5, comment: "Yüngül və rahatdır." },
                {
                  review_id: 40,
                  rating: 4.3,
                  comment: "Materialı çox keyfiyyətlidir.",
                },
              ],
            },
            {
              product_id: 1020,
              product_name: "Kişi Polo Palto",
              price: 130.0,
              slug: "kisi_polo_palto",
              original_price: 160.0,
              discount: 30,
              salesCount: 60,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/11/1066446/b557e022-931e-4b7a-ad35-dc6db3c4cfa3_size796x1198_quality100_cropCenter.jpg",
              description: "Qış üçün isti və rahat kişi polo palto.",
              colors: ["Qara"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                {
                  review_id: 41,
                  rating: 4.8,
                  comment: "Çox isti və rahatdır.",
                },
                {
                  review_id: 42,
                  rating: 4.7,
                  comment: "Qış üçün ideal seçimdir.",
                },
              ],
            },
            {
              product_id: 1021,
              product_name: "Kişi Emporium Kurtka",
              price: 70.0,
              slug: "kisi_emporium_kurtka",
              original_price: 85.0,
              discount: 15,
              salesCount: 130,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/08/1092848/84f53d54-9f6a-4f7d-94b1-38c08ea2753d_size796x1198_quality100_cropCenter.jpg",
              description: "Dəbli və rahat kişi Emporium Kurtka.",
              colors: ["Boz"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 43,
                  rating: 4.6,
                  comment: "Dizaynı çox gözəldir.",
                },
                {
                  review_id: 44,
                  rating: 4.4,
                  comment: "Rahat və gündəlik istifadə üçün əladır.",
                },
              ],
            },
            {
              product_id: 1022,
              product_name: "Kişi Mavi Kurtka",
              price: 85.0,
              slug: "kisi_mavi_kurtka",
              original_price: 100.0,
              discount: 15,
              salesCount: 170,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/09/30/1060911/a727d3a3-4b56-4b88-ab1e-9871dcc4af2c_size796x1198_quality100_cropCenter.jpg",
              description: "Gündəlik istifadə üçün rahat və şık kişi kurtkası.",
              colors: ["Mavi"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                {
                  review_id: 45,
                  rating: 4.7,
                  comment: "Çox rahat və şıkdır.",
                },
                {
                  review_id: 46,
                  rating: 4.5,
                  comment: "Yumşaq və rahatdır, gündəlik istifadəyə ideal.",
                },
              ],
            },
            {
              product_id: 1023,
              product_name: "Kişi Qırmızı Palto",
              price: 65.0,
              slug: "kisi_qirmizi_palto",
              original_price: 80.0,
              discount: 15,
              salesCount: 100,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/01/1062520/bd39d770-6020-4ed5-8b7a-20bb89f06cee_size796x1198_quality100_cropCenter.jpg",
              description: "Yay üçün ideal, şık və rahat kişi palto.",
              colors: ["Qırmızı"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 47,
                  rating: 4.4,
                  comment: "Yumşaq və gözəl dizaynı var.",
                },
                {
                  review_id: 48,
                  rating: 4.2,
                  comment: "Çox rahat və yay üçün mükəmməl.",
                },
              ],
            },
            {
              product_id: 1024,
              product_name: "Kişi Yaşıl Kurtka",
              price: 90.0,
              slug: "kisi_yasil_kurtka",
              original_price: 110.0,
              discount: 20,
              salesCount: 80,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/10/01/1062437/2e68d9f4-3acc-47bc-8742-b13597290b3a_size796x1198_quality100_cropCenter.jpg",
              description:
                "Kışda istifadə üçün ideal, isti və rahat kişi kurtkası.",
              colors: ["Yaşıl"],
              sizes: ["M", "L", "XL", "XXL"],
              reviews: [
                {
                  review_id: 49,
                  rating: 4.5,
                  comment: "Çox rahat və isti saxlayır.",
                },
                {
                  review_id: 50,
                  rating: 4.3,
                  comment: "Yüksək keyfiyyətli və gündəlik geyim üçün əladır.",
                },
              ],
            },
            {
              product_id: 1025,
              product_name: "Kişi Kəşmir Palto",
              price: 105.0,
              slug: "kisi_kesmir_palto",
              original_price: 130.0,
              discount: 25,
              salesCount: 95,
              image_url:
                "https://cdn2.emporium.az/i/p/500/304749-ba1ba9098590f573db1a4350473cddde.jpg",
              description: "Yaz ayları üçün yüngül və rahat kişi kəşmir palto.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 51,
                  rating: 4.6,
                  comment: "Yaz üçün mükəmməl seçimdir.",
                },
                {
                  review_id: 52,
                  rating: 4.4,
                  comment: "Çox rahat və müasir dizayna sahibdir.",
                },
              ],
            },
            {
              product_id: 1026,
              product_name: "Kişilər üçün qış gödəkçəsi AVVA",
              price: 40.0,
              slug: "kisi_qis_godekcesi_avva",
              original_price: 310.0,
              discount: 30,
              salesCount: 150,
              image_url:
                "https://strgimgr.umico.az/sized/280/976453-34a781012b1339ae21819b25c397ed8a.jpg",
              description: "Sadə və rahat kişi gödəkçəsi.",
              colors: ["Qara"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 53,
                  rating: 4.2,
                  comment: "Çox rahat və gündəlik geyim üçün əladır.",
                },
                {
                  review_id: 54,
                  rating: 4.0,
                  comment: "Sadə və şık, gündəlik istifadə üçün idealdır.",
                },
              ],
            },
            {
              product_id: 1027,
              product_name: "Kişilər qış gödəkçəsi AVVA narıncı",
              price: 120.0,
              slug: "kisi_qis_godekcesi_avva_narinci",
              original_price: 145.0,
              discount: 25,
              salesCount: 60,
              image_url:
                "https://strgimgr.umico.az/sized/280/976496-2a0b21662955c0c6fc66794d24866198.jpg",
              description: "Ofis və rəsmi tədbirlər üçün dəbli kişi gödəkçəsi.",
              colors: ["Narinci"],
              sizes: ["M", "L"],
              reviews: [
                {
                  review_id: 55,
                  rating: 4.7,
                  comment: "Dəbli və rahatdır.",
                },
                {
                  review_id: 56,
                  rating: 4.5,
                  comment: "İş üçün əla seçimdir.",
                },
              ],
            },
            {
              product_id: 1028,
              product_name: "Kişilər üçün qış gödəkçəsi AVVA qırmızı",
              price: 85.0,
              slug: "kisi_qis_godekcesi_avva_qirmizi",
              original_price: 100.0,
              discount: 15,
              salesCount: 70,
              image_url:
                "https://strgimgr.umico.az/sized/840/976493-254e0683a1602743a114aef4ca62416c.jpg",
              description: "Rəsmi tədbirlər üçün klassik kişi gödəkçəsi.",
              colors: ["Qırmızı"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 57,
                  rating: 4.5,
                  comment: "Klassik və eleqantdır.",
                },
                {
                  review_id: 58,
                  rating: 4.3,
                  comment: "Dəbli dizayn və keyfiyyətli material.",
                },
              ],
            },

            {
              product_id: 1029,
              product_name: "Kişi Polo Qara Mont",
              price: 55.0,
              slug: "kisi_polo_qara_mont",
              original_price: 70.0,
              discount: 15,
              salesCount: 250,
              image_url:
                "https://25d163.a-cdn.akinoncloud.com/products/2024/11/05/1081474/7d763c7f-e698-4ab4-b9cf-81c8d2717d86_size796x1198_quality100_cropCenter.jpg",
              description: "Rahat və gündəlik istifadə üçün kişi polo mont.",
              colors: ["Qara"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 59,
                  rating: 4.6,
                  comment: "Sadə və rahat.",
                },
                {
                  review_id: 60,
                  rating: 4.3,
                  comment: "Yaxşı materialdır, davamlıdır.",
                },
              ],
            },
          ],
        },
        {
          subkateqoriya_id: 2,
          subkateqoriya_adı: "Kişi Ayaqqabı",
          məhsullar: [
            {
              product_id: 1100,
              product_name: "Kişilər üçün Sliper",
              price: 49.99,
              slug: "kisi_sliper",
              original_price: 65.0,
              discount: 23,
              salesCount: 150,
              image_url:
                "https://strgimgr.umico.az/sized/280/314188-764f7c68a110c61d86de869a9c6a92f7.jpg",
              description: "Yaz fəslinə uyğun rahat və şık kişi sliperləri.",
              colors: ["Qara"],
              sizes: ["S", "M"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment: "Çox rahat və şık bir dizayn.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment: "Rəngləri çox gözəldir, keyfiyyəti mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1101,
              product_name: "Dəri idman ayaqqabısı",
              price: 42.5,
              slug: "dəri_idman_ayaqqabıs",
              original_price: 58.0,
              discount: 27,
              salesCount: 130,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/181043-196fb0d1afb83ad4e442fc8e6d6b641e.JPG",
              description: "Yaz aylarında rahat və trendy sliponlar.",
              colors: ["Qara"],
              sizes: ["M", "L"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment: "Çox rahat material, ayaqda çox yüngüldür.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rənglər çox bəyənildi, gündəlik istifadə üçün idealdır.",
                },
              ],
            },
            {
              product_id: 1102,
              product_name: "Kişi Krosovka",
              price: 55.0,
              slug: "kisi_krosovka",
              original_price: 75.0,
              discount: 27,
              salesCount: 110,
              image_url:
                "https://strgimgr.umico.az/sized/280/943742-ba6d2589b3a60547b2d5595ecfa7eec6.jpg",
              description: "Hər bir aktiv kişi üçün uyğun krosovka.",
              colors: ["Ağ"],
              sizes: ["L"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment: "Materialı çox keyfiyyətli, rahat hiss edirəm.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment: "Həqiqətən gözəl dizaynı var, ayaqda çox rahatdır.",
                },
              ],
            },
            {
              product_id: 1103,
              product_name: "Kişi Trekinq Botları",
              price: 64.99,
              slug: "kisi_treking_botlari",
              original_price: 85.0,
              discount: 24,
              salesCount: 140,
              image_url:
                "https://strgimgr.umico.az/sized/280/635838-9146f543ad08bff75a1553fca8394ade.jpg",
              description:
                "Dağlıq və sərt şəraitlər üçün ideal trekinq botları.",
              colors: ["Boz"],
              sizes: ["S", "L", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment: "Çox rahat və əla material.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment: "Həqiqətən sərt şəraitlərdə belə rahatdır.",
                },
              ],
            },
            {
              product_id: 1104,
              product_name: "Kişi Krosovka (Ağ)",
              price: 49.99,
              slug: "kisi_krosovka_ag",
              original_price: 70.0,
              discount: 28,
              salesCount: 125,
              image_url:
                "https://strgimgr.umico.az/sized/280/943742-ba6d2589b3a60547b2d5595ecfa7eec6.jpg",
              description:
                "Şəhər həyatına uyğun, rahat və müasir kişi krosovkası.",
              colors: ["Ağ"],
              sizes: ["S", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1105,
              product_name: "Kişilər üçün Derbi",
              price: 45.99,
              slug: "kisi_derbi",
              original_price: 65.0,
              discount: 29,
              salesCount: 150,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/180544-50cbe477ed73a20c66c6c67ceebf8a7d.JPG",
              description:
                "Şəhər həyatına uyğun, rahat və müasir kişi krosovkası.",
              colors: ["Mavi"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1106,
              product_name: "PROSHOT Kişi Gündəlik Ayaqqabı",
              price: 47.5,
              slug: "kisi_proshot_ayaqqabi",
              original_price: 68.0,
              discount: 30,
              salesCount: 135,
              image_url:
                "https://flostore.az/wp-content/uploads/2024/10/DHO-00070759-300x400.jpg",
              description:
                "Şəhər həyatına uyğun, rahat və müasir kişi krosovkası.",
              colors: ["Boz"],
              sizes: ["S", "L", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1107,
              product_name: "Sergio Rossi",
              price: 225.0,
              slug: "sergio_rossi_krosovka",
              original_price: 650.0,
              discount: 50,
              salesCount: 130,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/180316-cc65fdbcc5f36cbeb5954a50e87d60c6.JPG",
              description: "Loqo dizaynlı idman ayaqqabısı.",
              colors: ["Ağ"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1108,
              product_name: "Fratelli Rossetti",
              price: 225.0,
              slug: "fratelli_rossetti_lofer",
              original_price: 650.0,
              discount: 50,
              salesCount: 140,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/t-154215-126608-p1d5ceof871atv3fkvel46rcs09.JPG",
              description: "Toxuma dizaynlı lofer.",
              colors: ["Mavi"],
              sizes: ["S", "L"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1109,
              product_name: "Tod's",
              price: 215.0,
              slug: "tods_loefer",
              original_price: 630.0,
              discount: 50,
              salesCount: 150,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/178505-64bc5d4cced438c6e5a06311dc911140.JPG",
              description: "Rezin alt hissəli zamşa lofer.",
              colors: ["Qırmızı"],
              sizes: ["M", "L", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1110,
              product_name: "Sergio Rossi",
              price: 215.0,
              slug: "sergio_rossi_loefer",
              original_price: 630.0,
              discount: 50,
              salesCount: 145,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p360/500/179308-4e2b6f088334754bf1d6569c2cdb15c3.JPG",
              description: "Enli alt hissəli zamşa idman ayaqqabıları",
              colors: ["Yaşıl"],
              sizes: ["S", "L", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1111,
              product_name: "Gucci",
              price: 215.0,
              slug: "gucci_krossovka",
              original_price: 427.0,
              discount: 50,
              salesCount: 135,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/160419-98378f639a6dc45dfd6263b7470db89e.JPG",
              description: "Qırmızı rəngli loqo detallı krossovka",
              colors: ["Qırmızı"],
              sizes: ["M", "L"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1112,
              product_name: "Isaia",
              price: 215.0,
              slug: "isaia_krossovka",
              original_price: 497.0,
              discount: 50,
              salesCount: 105,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p360/500/180812-8f6da7ff5a703f2d9be0c052eff4143b.JPG",
              description: "Qırmızı rəngli loqo detallı krossovka",
              colors: ["Yaşıl"],
              sizes: ["S", "M"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
            {
              product_id: 1113,
              product_name: "Isaia",
              price: 250.0,
              slug: "isaia_deri_loefer",
              original_price: 500.0,
              discount: 50,
              salesCount: 135,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p360/500/180244-9fee9b4420beea463778ddf82f2c890c.JPG",
              description: "Dəri lofer",
              colors: ["Qırmızı"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment:
                    "Çox rahatdır, həm gündəlik, həm də idman üçün istifadə edilə bilər.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment:
                    "Rəng və dizaynı çox bəyəndim, gündəlik istifadə üçün mükəmməldir.",
                },
              ],
            },
          ],
        },
        {
          subkateqoriya_id: 3,
          subkateqoriya_adı: "Kişi Aksesuarlari",
          məhsullar: [
            {
              product_id: 1200,
              product_name: "Gucci qalstuk",
              price: 59.99,
              slug: "gucci-silk-tie",
              original_price: 79.0,
              discount: 24,
              salesCount: 230,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/180631-1e31c9e6044ac0cf6869e65cfdcf7e3f.JPG",
              description: "Naxışlı, yüksək keyfiyyətli ipək qalstuk.",
              colors: ["Qara"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.5,
                  comment: "Çox şık və rahatdır, iş görüşləri üçün ideal.",
                },
                {
                  review_id: 2,
                  rating: 5.0,
                  comment: "Rəngi və dizaynı mükəmməldir, çox bəyənildi.",
                },
              ],
            },
            {
              product_id: 1201,
              product_name: "Pal Zileri",
              price: 69.99,
              slug: "pal-zileri-tie",
              original_price: 85.0,
              discount: 18,
              salesCount: 180,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/110290-241504_1555936946800.4126748p908.JPG",
              description: "Boz rəngli, naxışlı ipək qalstuk.",
              colors: ["Boz"],
              sizes: ["M", "L"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.2,
                  comment:
                    "Naxışlar çox gözəldir, amma qiyməti bir az yüksəkdir.",
                },
                {
                  review_id: 2,
                  rating: 4.8,
                  comment:
                    "Keyfiyyəti çox yüksəkdir, alqışlanacaq bir məhsuldur.",
                },
              ],
            },
            {
              product_id: 1202,
              product_name: "Celio İpək bant",
              price: 39.99,
              slug: "celio-silk-band",
              original_price: 59.0,
              discount: 33,
              salesCount: 250,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/156326-4d175a2b6690ac34ba4ded00c31f9273.JPG",
              description: "Çox rahat və şık ipək bant.",
              colors: ["Qırmızı"],
              sizes: ["S", "M"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.4,
                  comment: "Çox zərif və şık, mükəmməl dizayn.",
                },
                {
                  review_id: 2,
                  rating: 4.9,
                  comment:
                    "Bantın keyfiyyəti çox yaxşıdır, həqiqətən tövsiyə edirəm.",
                },
              ],
            },
            {
              product_id: 1203,
              product_name: "Etro Dəri kəmər",
              price: 79.99,
              slug: "etro-leather-belt",
              original_price: 100.0,
              discount: 20,
              salesCount: 110,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/179511-b765c9d108a3ea6ac1b484ce3baeee9c.JPG",
              description:
                "Yüksək keyfiyyətli dəri kəmər, gündəlik istifadə üçün mükəmməl.",
              colors: ["Qara"],
              sizes: ["L", "XL"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.7,
                  comment:
                    "Çox yaxşı keyfiyyət, həm gündəlik həm də rəsmi geyimlər üçün uyğun.",
                },
                {
                  review_id: 2,
                  rating: 5.0,
                  comment:
                    "Həqiqətən mükəmməl bir məhsul, çox uzun müddət istifadə etdiyim bir kəmərdir.",
                },
              ],
            },
            {
              product_id: 1204,
              product_name: "Paul & Shark kepka",
              price: 55.99,
              slug: "paul-shark-cap",
              original_price: 70.0,
              discount: 20,
              salesCount: 200,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/178017-3bd08945fd5c0aadeaa28ab4ce34b115.jpg",
              description: "Şık və rahat Paul & Shark loqolu kepka.",
              colors: ["Ağ"],
              sizes: ["M", "L"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.5,
                  comment: "Rahat və şık dizaynı ilə hər mühitə uyğun.",
                },
                {
                  review_id: 2,
                  rating: 4.3,
                  comment: "Yaxşı keyfiyyət, amma biraz daha böyük olmalıydı.",
                },
              ],
            },
            {
              product_id: 1205,
              product_name: "Altea İpək qalstuk",
              price: 65.99,
              slug: "altea-silk-tie",
              original_price: 90.0,
              discount: 27,
              salesCount: 60,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/180066-3c2969bdbd0d9064e6d8832ec31b9d36.JPG",
              description:
                "Rəngarəng və zərif dizaynla hazırlanmış ipək qalstuk.",
              colors: ["Sarı"],
              sizes: ["S", "M"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.3,
                  comment: "Çox gözəl rəng və keyfiyyətli material.",
                },
                {
                  review_id: 2,
                  rating: 4.7,
                  comment: "Mükəmməl qalstuk, rəngi və dizaynı çox bəyənildi.",
                },
              ],
            },
          ],
        },
        {
          subkateqoriya_id: 4,
          subkateqoriya_adı: "Kişi Koynek",
          məhsullar: [
            {
              product_id: 1300,
              product_name: "Gucci qalstuk",
              price: 59.99,
              slug: "gucci-silk-tie",
              original_price: 79.0,
              discount: 24,
              salesCount: 230,
              image_url:
                "https://cdn2.premiumoutlet.az/i/p/500/180631-1e31c9e6044ac0cf6869e65cfdcf7e3f.JPG",
              description: "Naxışlı, yüksək keyfiyyətli ipək qalstuk.",
              colors: ["Qara"],
              sizes: ["S", "M", "L"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.5,
                  comment: "Çox şık və rahatdır, iş görüşləri üçün ideal.",
                },
                {
                  review_id: 2,
                  rating: 5.0,
                  comment: "Rəngi və dizaynı mükəmməldir, çox bəyənildi.",
                },
              ],
            },
          ],
        },

        // {
        //   subkateqoriya_id: 9,
        //   subkateqoriya_adı: "Eynək",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 11,
        //   subkateqoriya_adı: "Pul Kisəsi",
        //   məhsullar: [],
        // },
      ],
    },

    {
      kateqoriya_id: 3,
      kateqoriya_adı: "Elektronika",
      icon: IoMdPhonePortrait,
      subkateqoriyalar: [
        {
          subkateqoriya_id: 50,
          subkateqoriya_adı: "Telefon ve Kompüter",
          məhsullar: [
            {
              product_id: 2201,
              product_name: "LENOVO IdeaPad 1 15IGL7 82V700CURK",
              price: 1500.0,
              slug: "oyun_noutbuku",
              original_price: 1800.0,
              discount: 20,
              salesCount: 200,
              image_url:
                "https://aztechshop.az/image/cache/webp/catalog/Lenovo/LENOVO%20IdeaPad%201%2015IGL7%20Cloud%20Grey%20(7)sayt%20-533x398.webp",
              description: "Oyun sevənlər üçün yüksək performanslı noutbuk.",
              colors: ["Qara"],
              sizes: ["15.6 düym", "17.3 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Mükəmməl performans və qrafika.",
                },
                {
                  review_id: 2,
                  rating: 4.2,
                  comment: "Puluna görə yaxşıdır.",
                },
              ],
            },
            {
              product_id: 2202,
              product_name: "Notbuk Chuwi GemiBook Plus K1",
              price: 1200.0,
              slug: "ultrabuk",
              original_price: 1400.0,
              discount: 15,
              salesCount: 180,
              image_url:
                "https://aztechshop.az/image/cache/webp/catalog/Lenovo/Lenovo%20Ideapad%20Slim%203%20(1)Sayt-1000x832.webp",
              description: "Peşəkarlar üçün yüngül və daşınan ultrabuk.",
              colors: ["Qara"],
              sizes: ["13.3 düym", "14 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.5,
                  comment: "Səyahət və iş üçün mükəmməldir.",
                },
                {
                  review_id: 2,
                  rating: 4.7,
                  comment: "Sərfəli dizayn və sürətli performans.",
                },
              ],
            },
            {
              product_id: 2203,
              product_name: "Notbuk Acer A315-59-30Z5",
              price: 1000.0,
              slug: "cevrile_bilen_noutbuk",
              original_price: 1200.0,
              discount: 17,
              salesCount: 220,
              image_url:
                "https://aztechshop.az/image/cache/webp/catalog/Lenovo/LENOVO%20IdeaPad%20Slim%205%20Cloud%20Grey%20NoFinger(12)Sayt-533x398.webp",
              description: "Sensor ekranlı çoxfunksiyalı 2-1 noutbuk.",
              colors: ["Ağ"],
              sizes: ["14 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.3,
                  comment: "Həm iş, həm də əyləncə üçün çox rahatdır.",
                },
                {
                  review_id: 2,
                  rating: 4.1,
                  comment: "Yaxşı batareya ömrü və performans.",
                },
              ],
            },
            {
              product_id: 2204,
              product_name:
                "https://www.bakuelectronics.az/assets/cache_image/products/95872/a66716qumcjh8xbkr8zsxef313hq2ljz-%E2%80%94-kopiya_429x419far_efe.jpg",
              price: 1300.0,
              slug: "biznes_noutbuku",
              original_price: 1500.0,
              discount: 13,
              salesCount: 150,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/95872/a66716qumcjh8xbkr8zsxef313hq2ljz-%E2%80%94-kopiya_429x419far_efe.jpg",
              description:
                "Ehtiyatlı təhlükəsizlik xüsusiyyətləri ilə etibarlı noutbuk.",
              colors: ["Qara"],
              sizes: ["15 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.6,
                  comment: "Biznes və çox iş üçün əla.",
                },
                {
                  review_id: 2,
                  rating: 4.4,
                  comment: "Təhlükəsiz və sürətli.",
                },
              ],
            },

            {
              product_id: 2205,
              product_name: "TELEFON XIAOMI 14 ULTRA ",
              price: 300.0,
              slug: "budce_smartfonu",
              original_price: 350.0,
              discount: 14,
              salesCount: 500,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/150908/xiaomi-14-ultra-16gb512gb-6_260x204_adf.jpg",
              description: "Əsas xüsusiyyətlərlə əlverişli smartfon.",
              colors: ["Qara"],
              sizes: ["6.1 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.0,
                  comment: "Puluna görə yaxşıdır.",
                },
                {
                  review_id: 2,
                  rating: 3.8,
                  comment: "Sadə, amma etibarlı.",
                },
              ],
            },
            {
              product_id: 2206,
              product_name: "Smartfon Samsung Galaxy S24",
              price: 1000.0,
              slug: "flahqman_smartfon",
              original_price: 1200.0,
              discount: 17,
              salesCount: 320,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/141434/samsung-galaxy-s24-1_260x204_adf.jpg",
              description: "Müasir xüsusiyyətlərə sahib premium smartfon.",
              colors: ["Qara"],
              sizes: ["6.7 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.9,
                  comment: "Kamera və ekran əla.",
                },
                {
                  review_id: 2,
                  rating: 4.7,
                  comment: "Yüksək performans.",
                },
              ],
            },
            {
              product_id: 2207,
              product_name: "Smartfon POCO M6 PRO ",
              price: 700.0,
              slug: "kompakt_smartfon",
              original_price: 800.0,
              discount: 12,
              salesCount: 280,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/142093/smartfon-xiaomi-poco-m6-pro-12gb512-gb-blue-1_260x204_adf.jpg",
              description:
                "Yüksək səviyyəli texniki xüsusiyyətləri olan kiçik smartfon.",
              colors: ["Mavi"],
              sizes: ["5.8 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.4,
                  comment: "Kompakt ölçüdə yüksək performans.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment: "Bir əl ilə istifadə üçün ideal.",
                },
              ],
            },
            {
              product_id: 2208,
              product_name: "Smartfon Xiaomi Redmi A1+",
              price: 900.0,
              slug: "oyun_smartfonu",
              original_price: 1100.0,
              discount: 18,
              salesCount: 340,
              image_url:
                "https://texnomart.az/wp-content/uploads/2022/10/texnomart-Xiaomi-Redmi-A1-Black-vsaubc09q8jpmeyrtn7x.jpg",
              description:
                "Yüksək tazələmə sürəti ilə oyun üçün optimallaşdırılmış smartfon.",
              colors: ["Qara"],
              sizes: ["6.5 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.7,
                  comment: "Oyun üçün möhtəşəm performans.",
                },
                {
                  review_id: 2,
                  rating: 4.6,
                  comment: "Oyun zamanı batareya bütün gün dayanır.",
                },
              ],
            },
            {
              product_id: 2209,
              product_name: "Smartfon Huawei Y70 64GB Blue",
              price: 800.0,
              slug: "styluslu_smartfon",
              original_price: 950.0,
              discount: 16,
              salesCount: 290,
              image_url:
                "https://texnomart.az/wp-content/uploads/2022/07/texnomart-Huawei-Y70-Blue-ag95vsif87m4wnxb1qr6-300x300.jpg",
              description:
                "İnteqrasiya edilmiş stylus ilə məhsuldarlıq üçün smartfon.",
              colors: ["Mavi"],
              sizes: ["6.4 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.5,
                  comment: "Qeydlər üçün stylus çox faydalıdır.",
                },
                {
                  review_id: 2,
                  rating: 4.3,
                  comment: "İş və yaradıcılıq tapşırıqları üçün əla.",
                },
              ],
            },
            {
              product_id: 2210,
              product_name: "Smartfon Samsung Galaxy S22",
              price: 2000.0,
              slug: "is_stansiyasi_noutbuku",
              original_price: 2400.0,
              discount: 17,
              salesCount: 100,
              image_url:
                "https://texnomart.az/wp-content/uploads/2022/07/texnomart-Xiaomi-Redmi-10A-Blue-qwgfpla0hivyes7omk81-300x300.jpg",
              description:
                "Güclü qrafik və hesablama gücünə malik iş stansiyası noutbuku.",
              colors: ["Mavi"],
              sizes: ["17 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Güclü performans və mükəmməl ekran.",
                },
                {
                  review_id: 2,
                  rating: 4.6,
                  comment: "Yüksək yükləmə altında belə dayanıqlıdır.",
                },
              ],
            },
            {
              product_id: 2211,
              product_name: "Notbuk Acer Aspire",
              price: 1100.0,
              slug: "multimedia_noutbuku",
              original_price: 1300.0,
              discount: 15,
              salesCount: 180,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/147206/acer-aspire-5-1_429x419far_efe.jpg",
              description:
                "Film izləmək və musiqi dinləmək üçün ideal multimedia noutbuku.",
              colors: ["Boz"],
              sizes: ["15.6 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.3,
                  comment: "Ekran keyfiyyəti əladır.",
                },
                {
                  review_id: 2,
                  rating: 4.2,
                  comment: "Səs çıxışı çox yaxşıdır.",
                },
              ],
            },

            {
              product_id: 2212,
              product_name: "Samsung Galaxy Tab A9 Planşet",
              price: 600.0,
              slug: "samsung-galaxy-tab-a9-planset",
              original_price: 700.0,
              discount: 14,
              salesCount: 400,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/158312/samsung-galaxy-tab-a9-1_260x204_adf.jpg",
              description:
                "Həm iş, həm də əyləncə üçün nəzərdə tutulmuş Samsung Galaxy Tab A9 planşeti.",
              colors: ["Ağ"],
              sizes: ["10.1 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.4,
                  comment: "Ekran keyfiyyəti və performans yaxşıdır.",
                },
                {
                  review_id: 2,
                  rating: 4.1,
                  comment: "Yüngül və daşınması asandır.",
                },
              ],
            },
            {
              product_id: 2213,
              product_name: "Samsung Galaxy Tab S6 Lite Uşaqlar üçün Planşet",
              price: 250.0,
              slug: "samsung-galaxy-tab-s6-lite-usaqlar-ucun-planset",
              original_price: 300.0,
              discount: 17,
              salesCount: 320,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/148191/samsung-galaxy-tab-s6-lite-wi-fi-3_260x204_cd6.png",
              description:
                "Uşaqlar üçün təhlükəsiz və əyləncəli Samsung Galaxy Tab S6 Lite planşeti.",
              colors: ["Qara"],
              sizes: ["8 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.5,
                  comment: "Uşaqlar üçün əla seçimdir.",
                },
                {
                  review_id: 2,
                  rating: 4.3,
                  comment: "Təhsil üçün yaxşı proqramlar var.",
                },
              ],
            },
            {
              product_id: 2214,
              product_name: "HP Pavilion Laptop",
              price: 1300.0,
              slug: "hp-pavilion-laptop",
              original_price: 1600.0,
              discount: 19,
              salesCount: 120,
              image_url:
                "https://irshad.az/cdn-cgi/image/width=315/storage/products/99636/a0ny5ea.png",
              description:
                "Performans və istifadə rahatlığı üçün nəzərdə tutulmuş HP Pavilion noutbuku.",
              colors: ["Ağ"],
              sizes: ["15.6 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.5,
                  comment: "Gündəlik işlər üçün əla seçimdir.",
                },
                {
                  review_id: 2,
                  rating: 4.6,
                  comment: "Yaxşı performans və ekran keyfiyyəti.",
                },
              ],
            },
            {
              product_id: 2215,
              product_name: "ASUS ROG Zephyrus G16 OLED",
              price: 2000.0,
              slug: "asus-rog-zephyrus-g16-oled",
              original_price: 2400.0,
              discount: 17,
              salesCount: 95,
              image_url:
                "https://irshad.az/cdn-cgi/image/width=315/storage/products/99633/asus-rog-zephyrus-g16.jpg",
              description:
                "Güclü oyun təcrübəsi üçün nəzərdə tutulmuş ASUS ROG Zephyrus G16 OLED noutbuku.",
              colors: ["Ağ"],
              sizes: ["16 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Oyun üçün yüksək performans təqdim edir.",
                },
                {
                  review_id: 2,
                  rating: 4.7,
                  comment: "OLED ekran mükəmməl görüntü verir.",
                },
              ],
            },

            {
              product_id: 2216,
              product_name: "Smartfon Infinix Note 40 Pro",
              price: 2000.0,
              slug: "infinix-note-40-pro",
              original_price: 2400.0,
              discount: 17,
              salesCount: 95,
              image_url:
                "https://strgimgr.umico.az/sized/280/934365-6e52ec08edcdaada2356dc0909513263.jpg",
              description:
                "Infinix Note 40 Pro, yüksək performanslı və şık dizaynlı smartfondur.",
              colors: ["Boz"],
              sizes: ["6.8 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Yüksək performanslı və uzun batareya ömrü.",
                },
                {
                  review_id: 2,
                  rating: 4.7,
                  comment: "Kamera keyfiyyəti çox yaxşıdır.",
                },
              ],
            },
            {
              product_id: 2217,
              product_name: "Smartfon Xiaomi Redmi Note 12",
              price: 1700.0,
              slug: "xiaomi-redmi-note-12",
              original_price: 2000.0,
              discount: 15,
              salesCount: 120,
              image_url:
                "https://strgimgr.umico.az/sized/280/482552-13d88063226a34b2317c72b5204d333d.jpg",
              description:
                "Xiaomi Redmi Note 12, güclü performans və mükəmməl dizayn təklif edir.",
              colors: ["Qara"],
              sizes: ["6.67 düym"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.6,
                  comment: "Qiymətə görə yaxşı performans.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment: "Ekran və kamera keyfiyyəti əladır.",
                },
              ],
            },
          ],
        },
        {
          subkateqoriya_id: 51,
          subkateqoriya_adı: "Saat",
          məhsullar: [
            {
              product_id: 2300,
              product_name: "Smart saat Smart Watch HK9 Ultra 2 Black",
              price: 1500.0,
              slug: "smart-watch-hk9-ultra-2-black",
              original_price: 1800.0,
              discount: 17,
              salesCount: 200,
              image_url:
                "https://strgimgr.umico.az/sized/280/644331-1c031ac78caa69ff8434ef7f38a8296e.jpg",
              description:
                "Yüksək performanslı smart saat, sağlamlıq izləmə və bildiriş funksiyaları ilə.",
              colors: ["Qara"],
              sizes: ["44 mm"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Dəqiq funksiyalar və yüksək keyfiyyət.",
                },
                {
                  review_id: 2,
                  rating: 4.2,
                  comment: "Puluna görə yaxşıdır.",
                },
              ],
            },
            {
              product_id: 2301,
              product_name: "Smart saat Smart Watch HK9 Pro Plus Black",
              price: 1500.0,
              slug: "smart-watch-hk9-pro-plus-black",
              original_price: 1800.0,
              discount: 17,
              salesCount: 180,
              image_url:
                "https://strgimgr.umico.az/sized/280/812148-c88b982ec13be2c24930389b368e2eb5.jpg",
              description:
                "Pro versiyası olan bu smart saat, əlavə sağlamlıq və fitnes funksiyaları təklif edir.",
              colors: ["Qara"],
              sizes: ["46 mm"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.7,
                  comment: "Əla batareya ömrü və funksionallıq.",
                },
                {
                  review_id: 2,
                  rating: 4.4,
                  comment: "Ekran keyfiyyəti yüksəkdir.",
                },
              ],
            },
            {
              product_id: 2302,
              product_name: "Qol saatı Lacoste LC",
              price: 1200.0,
              slug: "lacoste-lc",
              original_price: 1500.0,
              discount: 20,
              salesCount: 150,
              image_url:
                "https://strgimgr.umico.az/sized/280/683922-9975c5de06cf80f95be3aa0a9be58032.jpg",
              description:
                "Şık və sadə dizaynlı Lacoste qol saatı, gündəlik istifadə üçün idealdır.",
              colors: ["Yaşıl"],
              sizes: ["40 mm"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.6,
                  comment: "Zərif dizayn və keyfiyyətli material.",
                },
                {
                  review_id: 2,
                  rating: 4.3,
                  comment: "Gözəl görünüş, amma funksionallıq sadədir.",
                },
              ],
            },
            {
              product_id: 2303,
              product_name: "Qol saatı Naviforce NF5032 SWRG",
              price: 1300.0,
              slug: "naviforce-nf5032-swrg",
              original_price: 1600.0,
              discount: 19,
              salesCount: 170,
              image_url:
                "https://strgimgr.umico.az/sized/840/775798-560ccea4c1c6f0759af601d570c4065e.jpg",
              description:
                "Naviforce qol saatı, suya davamlı və çox funksiyalı dizaynı ilə seçilir.",
              colors: ["Ağ"],
              sizes: ["42 mm"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.7,
                  comment: "Yaxşı keyfiyyət və çox yönlü istifadə.",
                },
                {
                  review_id: 2,
                  rating: 4.4,
                  comment: "Davamlı və suya qarşı müqavimətlidir.",
                },
              ],
            },
            {
              product_id: 2304,
              product_name: "Qol saatı NaviForce NF9193 RGBB",
              price: 1400.0,
              slug: "naviforce-nf9193-rgbb",
              original_price: 1700.0,
              discount: 18,
              salesCount: 190,
              image_url:
                "https://strgimgr.umico.az/sized/280/579827-66df605d7ce966feea019d362b20eeb5.jpg",
              description:
                "Naviforce NF9193, dəbli dizaynı və yüksək keyfiyyəti ilə fərqlənir.",
              colors: ["Qara"],
              sizes: ["45 mm"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Çox funksiyalı və dəbli dizayn.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment: "Material keyfiyyəti əladır.",
                },
              ],
            },
          ],
        },

        {
          subkateqoriya_id: 52,
          subkateqoriya_adı: "Qulaqlıqlar",
          məhsullar: [
            {
              product_id: 2400,
              product_name: "Simsiz qulaqlıq P9 Black",
              price: 1500.0,
              slug: "wireless-earphones-p9-black",
              original_price: 1800.0,
              discount: 17,
              salesCount: 200,
              image_url:
                "https://strgimgr.umico.az/sized/280/659146-650d2d477940b0fd3d92505d2a052968.jpg",
              description:
                "Yüksək performanslı simsiz qulaqlıqlar, uzun müddətli batareya ömrü və rahat uyğunluq.",
              colors: ["Qara"],
              sizes: ["N/A"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Dəqiq funksiyalar və yüksək keyfiyyət.",
                },
                {
                  review_id: 2,
                  rating: 4.2,
                  comment: "Puluna görə mükəmməl seçim.",
                },
              ],
            },
            {
              product_id: 2401,
              product_name: "Simsiz qulaqlıqlar P47 Blue",
              price: 1500.0,
              slug: "wireless-earphones-p47-blue",
              original_price: 1800.0,
              discount: 17,
              salesCount: 200,
              image_url:
                "https://strgimgr.umico.az/sized/280/257563-0a7a7d02e68258584f2a38e1a1be0dfe.jpg",
              description:
                "Güclü bass, mükəmməl səs keyfiyyəti və uzun müddətli rahatlıq.",
              colors: ["Mavi"],
              sizes: ["N/A"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Mükəmməl səs keyfiyyəti!",
                },
                {
                  review_id: 2,
                  rating: 4.3,
                  comment: "Həqiqətən rahatdır.",
                },
              ],
            },
            {
              product_id: 2402,
              product_name: "Simsiz qulaqlıq HUAWEI FreeBuds",
              price: 1500.0,
              slug: "huawei-freebuds",
              original_price: 1800.0,
              discount: 17,
              salesCount: 200,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/152175/huawei-freebuds-6i-purple-5_429x419far_efe.jpg",
              description:
                "HUAWEI FreeBuds, optimal səs keyfiyyəti, ağıllı səs idarəsi və səs izolyasiyası.",
              colors: ["Ağ"],
              sizes: ["N/A"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Sesi mükəmməl tənzimləyir.",
                },
                {
                  review_id: 2,
                  rating: 4.5,
                  comment: "Çox rahat və yüngüldür.",
                },
              ],
            },
            {
              product_id: 2403,
              product_name: "Simsiz qulaqlıq HUAWEI FreeBuds SE",
              price: 1500.0,
              slug: "huawei-freebuds-se",
              original_price: 1800.0,
              discount: 17,
              salesCount: 200,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/142159/huawei-freebuds-se-2-8_429x419far_efe.jpg",
              description:
                "Yüksək səs keyfiyyəti, səs izolyasiyası və uzun müddətli batareya ömrü.",
              colors: ["Ağ"],
              sizes: ["N/A"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Çox funksiyalı və istifadə üçün rahat.",
                },
                {
                  review_id: 2,
                  rating: 4.4,
                  comment: "Süper səs keyfiyyəti!",
                },
              ],
            },
            {
              product_id: 2404,
              product_name: "Simsiz qulaqlıq HUAWEI FreeBuds SE 2",
              price: 1500.0,
              slug: "huawei-freebuds-se-2",
              original_price: 1800.0,
              discount: 17,
              salesCount: 200,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/142145/huawei-freebuds-se-2-2_429x419far_efe.jpg",
              description:
                "Yüksək səs keyfiyyəti, rahat istifadə və yüksək performans.",
              colors: ["Mavi"],
              sizes: ["N/A"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Mükəmməl və keyfiyyətli.",
                },
                {
                  review_id: 2,
                  rating: 4.3,
                  comment: "Səs izolyasiyası çox yaxşıdır.",
                },
              ],
            },
            {
              product_id: 2405,
              product_name: "Simsiz qulaqlıq YISON B3 BLACK",
              price: 1500.0,
              slug: "huawei-freebuds-se-2",
              original_price: 1800.0,
              discount: 17,
              salesCount: 200,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/135992/YISON%20WIRELESS%20ON-EAR%20HEADPHONE%20B3%20BLACK_429x419far_efe.jpg",
              description:
                "Yüksək səs keyfiyyəti, rahat istifadə və yüksək performans.",
              colors: ["Qara"],
              sizes: ["N/A"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Mükəmməl və keyfiyyətli.",
                },
                {
                  review_id: 2,
                  rating: 4.3,
                  comment: "Səs izolyasiyası çox yaxşıdır.",
                },
              ],
            },
            {
              product_id: 2406,
              product_name: "Simsiz qulaqlıq YISON B3 BLACK",
              price: 1500.0,
              slug: "huawei-freebuds-se-2",
              original_price: 1800.0,
              discount: 17,
              salesCount: 200,
              image_url:
                "https://www.bakuelectronics.az/assets/cache_image/products/135992/YISON%20WIRELESS%20ON-EAR%20HEADPHONE%20B3%20BLACK_429x419far_efe.jpg",
              description:
                "Yüksək səs keyfiyyəti, rahat istifadə və yüksək performans.",
              colors: ["Qara"],
              sizes: ["N/A"],
              reviews: [
                {
                  review_id: 1,
                  rating: 4.8,
                  comment: "Mükəmməl və keyfiyyətli.",
                },
                {
                  review_id: 2,
                  rating: 4.3,
                  comment: "Səs izolyasiyası çox yaxşıdır.",
                },
              ],
            },
          ],
        },
        {
          subkateqoriya_id: 4,
          subkateqoriya_adı: "Klaviatura",
          məhsullar: [],
        },
        // {
        //   subkateqoriya_id: 8,
        //   subkateqoriya_adı: "Siçan",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 9,
        //   subkateqoriya_adı: "Ram",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 10,
        //   subkateqoriya_adı: "Ekran Kartı",
        //   məhsullar: [],
        // },
        {
          subkateqoriya_id: 5,
          subkateqoriya_adı: "Foto və Kamera",
          məhsullar: [],
        },
        // {
        //   subkateqoriya_id: 12,
        //   subkateqoriya_adı: "Printer və Skaner",
        //   məhsullar: [],
        // },
        {
          subkateqoriya_id: 6,
          subkateqoriya_adı: "Televiziya",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 7,
          subkateqoriya_adı: "Qabyuyan Maşın",
          məhsullar: [],
        },
        // {
        //   subkateqoriya_id: 8,
        //   subkateqoriya_adı: "Quruducu",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 19,
        //   subkateqoriya_adı: "Kombi",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 20,
        //   subkateqoriya_adı: "Kondisioner",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 21,
        //   subkateqoriya_adı: "Mikrodalğalı Soba",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 22,
        //   subkateqoriya_adı: "Mikser və Mikser Dəsti",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 14,
        //   subkateqoriya_adı: "Saç Qurudan",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 15,
        //   subkateqoriya_adı: "Təraş Maşını",
        //   məhsullar: [],
        // },
        // {
        //   subkateqoriya_id: 16,
        //   subkateqoriya_adı: "Paltaryuyan Maşın",
        //   məhsullar: [],
        // }
      ],
    },

    {
      kateqoriya_id: 4,
      kateqoriya_adı: "Ev & Yaşam",
      icon: FaHome,
      subkateqoriyalar: [
        {
          subkateqoriya_id: 1,
          subkateqoriya_adı: "Oyuncaq",
          məhsullar: [
            {
              product_id: 21,
              product_name: "LEGO Technic Car",
              price: 950.0,
              original_price: 1000.0,
              discount: 5,
              image_url: "https://example.com/products/lego-car.jpg",
              description:
                "LEGO Technic seriyasından yüksək detallı avtomobil oyuncağı.",
              colors: ["Red", "Blue"],
              sizes: ["L"],
              reviews: [
                {
                  review_id: 3,
                  rating: 4.5,
                  comment: "Çox əyləncəli və detallı bir modeldir.",
                },
              ],
            },
          ],
        },
        {
          subkateqoriya_id: 2,
          subkateqoriya_adı: "Divar Saatı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 3,
          subkateqoriya_adı: "Güzgü",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 4,
          subkateqoriya_adı: "Pərdə",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 5,
          subkateqoriya_adı: "Divan Dəsti",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 6,
          subkateqoriya_adı: "Kreslo",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 7,
          subkateqoriya_adı: "İşıqlandırma",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 8,
          subkateqoriya_adı: "Mətbəx Şkafı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 9,
          subkateqoriya_adı: "Çaydan",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 10,
          subkateqoriya_adı: "Dəsmal və Dəsmal Dəsti",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 11,
          subkateqoriya_adı: "Hamam Dəsti",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 12,
          subkateqoriya_adı: "Blazers",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 13,
          subkateqoriya_adı: "Yataq Otağı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 14,
          subkateqoriya_adı: "Yorğan",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 15,
          subkateqoriya_adı: "Yataq Örtüyü",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 16,
          subkateqoriya_adı: "Yastıq",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 17,
          subkateqoriya_adı: "Velosiped",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 18,
          subkateqoriya_adı: "Termoslar",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 19,
          subkateqoriya_adı: "Kitablar",
          məhsullar: [],
        },
      ],
    },

    {
      kateqoriya_id: 5,
      kateqoriya_adı: "Supermarket",
      icon: FaStore,
      subkateqoriyalar: [
        {
          subkateqoriya_id: 1,
          subkateqoriya_adı: "Meyvə və tərəvəz",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 2,
          subkateqoriya_adı: "Sosis və Kolbasalar",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 3,
          subkateqoriya_adı: "Süd məhsulları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 4,
          subkateqoriya_adı: "Şirniyyat Məmulatları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 5,
          subkateqoriya_adı: "Şokolad",
          məhsullar: [],
        },

        {
          subkateqoriya_id: 6,
          subkateqoriya_adı: "Çay&Qəhvə",
          məhsullar: [],
        },

        {
          subkateqoriya_id: 7,
          subkateqoriya_adı: "Çörək Məmulatları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 8,
          subkateqoriya_adı: "Yağlar",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 9,
          subkateqoriya_adı: "Ev təmizliyi",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 10,
          subkateqoriya_adı: "Saça Qulluq",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 11,
          subkateqoriya_adı: "Ağız Baxımı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 12,
          subkateqoriya_adı: "Dəriyə Qulluq",
          məhsullar: [],
        },

        {
          subkateqoriya_id: 13,
          subkateqoriya_adı: "Dəsmallar",
          məhsullar: [],
        },

        {
          subkateqoriya_id: 14,
          subkateqoriya_adı: "Uşaqlar üçün",
          məhsullar: [],
        },
      ],
    },
    {
      kateqoriya_id: 6,
      kateqoriya_adı: "İdman & Əyləncə",
      icon: MdOutlineSportsTennis,
      subkateqoriyalar: [
        {
          subkateqoriya_id: 1,
          subkateqoriya_adı: "İdman Köynəyi",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 2,
          subkateqoriya_adı: "Gödəkçə və Jilet",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 3,
          subkateqoriya_adı: "Yağış Paltarı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 4,
          subkateqoriya_adı: "İdman Büstqalteri",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 5,
          subkateqoriya_adı: "İdman Paltosu",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 6,
          subkateqoriya_adı: "İdman Papağı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 7,
          subkateqoriya_adı: "İdman Ayaqqabısı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 8,
          subkateqoriya_adı: "İdman Zalı Üçün Avadanlıqlar",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 10,
          subkateqoriya_adı: "Mat",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 11,
          subkateqoriya_adı: "İp Atlama",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 12,
          subkateqoriya_adı: "Boks Əlcəyi",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 13,
          subkateqoriya_adı: "Düşərgə Alətləri",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 13,
          subkateqoriya_adı: "Alpinizm və Dırmanma",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 15,
          subkateqoriya_adı: "Su İdmanı Avadanlıqları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 16,
          subkateqoriya_adı: "Dalğıc Avadanlıqları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 17,
          subkateqoriya_adı: "Balıqçılıq Ləvazimatları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 19,
          subkateqoriya_adı: "Çadır",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 20,
          subkateqoriya_adı: "Pilates Topları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 21,
          subkateqoriya_adı: "Protein tozu",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 22,
          subkateqoriya_adı: "Top",
          məhsullar: [],
        },
      ],
    },
    {
      kateqoriya_id: 6,
      kateqoriya_adı: "Avtomobil Məhsulları",
      icon: FaCar,
      subkateqoriyalar: [
        {
          subkateqoriya_id: 1,
          subkateqoriya_adı: "İdman Köynəyi",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 2,
          subkateqoriya_adı: "Gödəkçə və Jilet",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 3,
          subkateqoriya_adı: "Yağış Paltarı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 4,
          subkateqoriya_adı: "İdman Büstqalteri",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 5,
          subkateqoriya_adı: "İdman Paltosu",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 6,
          subkateqoriya_adı: "İdman Papağı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 7,
          subkateqoriya_adı: "İdman Ayaqqabısı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 8,
          subkateqoriya_adı: "İdman Zalı Üçün Avadanlıqlar",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 10,
          subkateqoriya_adı: "Mat",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 11,
          subkateqoriya_adı: "İp Atlama",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 12,
          subkateqoriya_adı: "Boks Əlcəyi",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 13,
          subkateqoriya_adı: "Düşərgə Alətləri",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 13,
          subkateqoriya_adı: "Alpinizm və Dırmanma",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 15,
          subkateqoriya_adı: "Su İdmanı Avadanlıqları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 16,
          subkateqoriya_adı: "Dalğıc Avadanlıqları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 17,
          subkateqoriya_adı: "Balıqçılıq Ləvazimatları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 19,
          subkateqoriya_adı: "Çadır",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 20,
          subkateqoriya_adı: "Pilates Topları",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 21,
          subkateqoriya_adı: "Protein tozu",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 22,
          subkateqoriya_adı: "Top",
          məhsullar: [],
        },
      ],
    },
    {
      kateqoriya_id: 7,
      kateqoriya_adı: "Gözəllik Məhsulları",
      icon: GiLips,
      subkateqoriyalar: [
        {
          subkateqoriya_id: 1,
          subkateqoriya_adı: "İdman Köynəyi",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 2,
          subkateqoriya_adı: "Gödəkçə və Jilet",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 3,
          subkateqoriya_adı: "Yağış Paltarı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 4,
          subkateqoriya_adı: "İdman Büstqalteri",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 5,
          subkateqoriya_adı: "İdman Paltosu",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 6,
          subkateqoriya_adı: "İdman Papağı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 7,
          subkateqoriya_adı: "İdman Ayaqqabısı",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 8,
          subkateqoriya_adı: "İdman Zalı Üçün Avadanlıqlar",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 10,
          subkateqoriya_adı: "Mat",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 11,
          subkateqoriya_adı: "İp Atlama",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 12,
          subkateqoriya_adı: "Boks Əlcəyi",
          məhsullar: [],
        },

        {
          subkateqoriya_id: 17,
          subkateqoriya_adı: "Balıqçılıq Ləvazimatları",
          məhsullar: [],
        },

        {
          subkateqoriya_id: 21,
          subkateqoriya_adı: "Protein tozu",
          məhsullar: [],
        },
        {
          subkateqoriya_id: 22,
          subkateqoriya_adı: "Top",
          məhsullar: [],
        },
      ],
    },
  ],
};

export const statsData = [
  {
    iconSrc: "/store.svg",
    value: "10.5k",
    description: "Saytımızda aktiv satıcılar",
  },
  { iconSrc: "/store.svg", value: "33k", description: "Aylıq məhsul satışı" },
  {
    iconSrc: "/store.svg",
    value: "45.5k",
    description: "Saytımızda aktiv müştərilər",
  },
  {
    iconSrc: "/store.svg",
    value: "25k",
    description: "Saytımızda illik ümumi satış",
  },
];

export const servicesData = [
  {
    imgSrc: "/icon-delivery.svg",
    title: "PULSUZ VƏ SÜRƏTLİ ÇATDIRILMA",
    description: "Bütün $140-dan yuxarı sifarişlər üçün pulsuz çatdırılma",
  },
  {
    imgSrc: "/icon-headphone.svg",
    title: "24/7 MÜŞTƏRİ XİDMƏTİ",
    description: "Dostyana 24/7 müştəri dəstəyi",
  },
  {
    imgSrc: "/icon-delivery.svg",
    title: "PULUN GERİ QAYTARILMA ZƏMANƏTİ",
    description: "Pulunuzu 30 gün ərzində geri qaytarırıq",
  },
];

export const contactInfo = [
  {
    icon: "fa-phone",
    title: "Bizə Zəng Edin",
    description: (
      <>
        <p>Həftənin 7 günü, 24 saat mövcuduq.</p>
        <p>Telefon: +994515489272</p>
      </>
    ),
  },
  {
    icon: "fa-envelope",
    title: "Bizə Yazın",
    description: (
      <>
        <p>Formamızı doldurun, 24 saat ərzində sizinlə əlaqə saxlayacağıq.</p>
        <p>Email: herseyburada28@gmail.com</p>
      </>
    ),
  },
];

export default data;
