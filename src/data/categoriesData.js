const data = {
  "kateqoriyalar": [
    {
      "kateqoriya_id": 1,
      "kateqoriya_adı": "Qadın",
      "subkateqoriyalar": [
        {
          "subkateqoriya_id": 1,
          "subkateqoriya_adı": "Bluz",
          "məhsullar": [
            {
              "product_id": 1,
              "product_name": "Qadın Bluz 1",
              "price": 50.0,
              "original_price": 70.0,
              "discount": 10,
              "salesCount": 150,
              "image_url": "https://example.com/products/women-blouse1.jpg",
              "description": "Qadın üçün şık bluz.",
              "colors": ["Red", "White", "Black"],
              "sizes": ["S", "M", "L"],
              "reviews": [
                {
                  "review_id": 1,
                  "rating": 4.0,
                  "comment": "Çox gözəl bluz."
                },
                {
                  "review_id": 11,
                  "rating": 4.5,
                  "comment": "Materialı yüksək keyfiyyətlidir."
                }
              ]
            },
            {
              "product_id": 2,
              "product_name": "Qadın Bluz 2",
              "price": 60.0,
              "original_price": 80.0,
              "discount": 15,
              "salesCount": 100,
              "image_url": "https://example.com/products/women-blouse2.jpg",
              "description": "Rəngarəng və rahat bluz.",
              "colors": ["Red", "Blue"],
              "sizes": ["M", "L", "XL"],
              "reviews": [
                {
                  "review_id": 2,
                  "rating": 5.0,
                  "comment": "Çox rahat və şıx!"
                },
                {
                  "review_id": 3,
                  "rating": 4.5,
                  "comment": "Rəngi çox gözəl, amma ölçü kiçik."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 2,
          "subkateqoriya_adı": "Qadın Jaketi",
          "məhsullar": [
            {
              "product_id": 5,
              "product_name": "Qadın Jaket 1",
              "price": 80.0,
              "original_price": 100.0,
              "discount": 0,
              "salesCount": 90,
              "image_url": "https://example.com/products/women-jacket1.jpg",
              "description": "Qış üçün isti jaket.",
              "colors": ["Grey", "Navy"],
              "sizes": ["M", "L", "XL"],
              "reviews": [
                {
                  "review_id": 12,
                  "rating": 4.5,
                  "comment": "Çox rahat və isti."
                },
                {
                  "review_id": 13,
                  "rating": 4.2,
                  "comment": "Keyfiyyətli material, amma qiyməti bir az yüksəkdir."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 3,
          "subkateqoriya_adı": "Cins",
          "məhsullar": [
            {
              "product_id": 7,
              "product_name": "Cins Şalvar 1",
              "price": 60.0,
              "original_price": 80.0,
              "discount": 15,
              "salesCount": 160,
              "image_url": "https://example.com/products/jeans1.jpg",
              "description": "Rahat və şık cins şalvar.",
              "colors": ["Blue", "Black"],
              "sizes": ["S", "M", "L"],
              "reviews": [
                {
                  "review_id": 15,
                  "rating": 4.2,
                  "comment": "Çox rahat və yaxşı keyfiyyət."
                },
                {
                  "review_id": 16,
                  "rating": 4.0,
                  "comment": "Gözəl görünür, amma bir az dar."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 4,
          "subkateqoriya_adı": "Şortik",
          "məhsullar": [
            {
              "product_id": 9,
              "product_name": "Yay Şortiki",
              "price": 40.0,
              "original_price": 50.0,
              "discount": 20,
              "salesCount": 85,
              "image_url": "https://example.com/products/summer-shorts.jpg",
              "description": "Rahat və sərin yay şortiki.",
              "colors": ["White", "Khaki", "Navy"],
              "sizes": ["XS", "S", "M", "L"],
              "reviews": [
                {
                  "review_id": 18,
                  "rating": 4.3,
                  "comment": "Çox rahat, amma ölçüsü biraz böyük."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 5,
          "subkateqoriya_adı": "Qadın Paltosu",
          "məhsullar": [
            {
              "product_id": 10,
              "product_name": "Qış Paltosu",
              "price": 150.0,
              "original_price": 180.0,
              "discount": 0,
              "salesCount": 50,
              "image_url": "https://example.com/products/winter-coat.jpg",
              "description": "İsti və stilli qış paltosu.",
              "colors": ["Black", "Camel"],
              "sizes": ["S", "M", "L", "XL"],
              "reviews": [
                {
                  "review_id": 19,
                  "rating": 4.9,
                  "comment": "Mükəmməl keyfiyyət və dizayn!"
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 6,
          "subkateqoriya_adı": "Qadın Pencəyi",
          "məhsullar": [
            {
              "product_id": 11,
              "product_name": "Klassik Pencək",
              "price": 90.0,
              "original_price": 110.0,
              "discount": 5,
              "salesCount": 70,
              "image_url": "https://example.com/products/classic-blazer.jpg",
              "description": "Ofis və gündəlik istifadə üçün şık pencək.",
              "colors": ["Black", "Navy", "Grey"],
              "sizes": ["S", "M", "L"],
              "reviews": [
                {
                  "review_id": 20,
                  "rating": 4.6,
                  "comment": "Çox şık və keyfiyyətli."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 7,
          "subkateqoriya_adı": "Yataq Geyimi",
          "məhsullar": [
            {
              "product_id": 12,
              "product_name": "İpək Pijama Dəsti",
              "price": 75.0,
              "original_price": 90.0,
              "discount": 10,
              "salesCount": 100,
              "image_url": "https://example.com/products/silk-pajama-set.jpg",
              "description": "Lüks və rahat ipək pijama dəsti.",
              "colors": ["Pink", "Lavender", "Champagne"],
              "sizes": ["S", "M", "L"],
              "reviews": [
                {
                  "review_id": 21,
                  "rating": 4.8,
                  "comment": "Çox rahat və lüks hiss etdirir."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 8,
          "subkateqoriya_adı": "Qadın Çantası",
          "məhsullar": [
            {
              "product_id": 13,
              "product_name": "Dəri Çiyin Çantası",
              "price": 120.0,
              "original_price": 150.0,
              "discount": 0,
              "salesCount": 80,
              "image_url": "https://example.com/products/leather-shoulder-bag.jpg",
              "description": "Keyfiyyətli dəridən hazırlanmış şık çiyin çantası.",
              "colors": ["Black", "Brown", "Tan"],
              "sizes": ["One Size"],
              "reviews": [
                {
                  "review_id": 22,
                  "rating": 4.7,
                  "comment": "Gözəl dizayn və yüksək keyfiyyət."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 9,
          "subkateqoriya_adı": "Kosmetika",
          "məhsullar": [
            {
              "product_id": 14,
              "product_name": "Göz Kölgəsi Paleti",
              "price": 45.0,
              "original_price": 55.0,
              "discount": 18,
              "salesCount": 200,
              "image_url": "https://example.com/products/eyeshadow-palette.jpg",
              "description": "12 rəngli lüks göz kölgəsi paleti.",
              "colors": ["Multi"],
              "sizes": ["One Size"],
              "reviews": [
                {
                  "review_id": 23,
                  "rating": 4.5,
                  "comment": "Rənglər çox gözəl və pigmentlidir."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 10,
          "subkateqoriya_adı": "Aksesuarlar",
          "məhsullar": [
            {
              "product_id": 15,
              "product_name": "Kompakt Dəri Pul Kisəsi",
              "price": 35.0,
              "original_price": 45.0,
              "discount": 22,
              "salesCount": 150,
              "image_url": "https://example.com/products/compact-leather-wallet.jpg",
              "description": "İncə və funksional dəri pul kisəsi.",
              "colors": ["Black", "Red", "Navy"],
              "sizes": ["One Size"],
              "reviews": [
                {
                  "review_id": 1001,
                  "rating": 4.4,
                  "comment": "Kiçik, amma çox funksional."
                },
                {
                  "review_id": 1002,
                  "rating": 4.6,
                  "comment": "Keyfiyyətli dəri və gözəl dizayn."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kateqoriya_id": 2,
      "kateqoriya_adı": "Kişi",
      "subkateqoriyalar": [
        {
          "subkateqoriya_id": 1,
          "subkateqoriya_adı": "Şalvar",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 2,
          "subkateqoriya_adı": "Köynək",
          "məhsullar": [
            {
              "product_id": 19,
              "product_name": "Kişi Köynək 1",
              "price": 60.0,
              "original_price": 80.0,
              "discount": 15,
              "image_url": "https://example.com/products/men-shirt1.jpg",
              "description": "Kişi üçün tərz köynək.",
              "colors": ["Blue", "Gray"],
              "sizes": ["M", "L", "XL"],
              "reviews": [
                {
                  "review_id": 2,
                  "rating": 4.5,
                  "comment": "Keyfiyyətli və rahat köynək."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 3,
          "subkateqoriya_adı": "Kişi Gödəkçəsi",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 4,
          "subkateqoriya_adı": "Kişi Kostyumu",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 5,
          "subkateqoriya_adı": "Ayaqqabı",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 6,
          "subkateqoriya_adı": "Kişi Çantası",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 7,
          "subkateqoriya_adı": "Baş Geyimləri",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 8,
          "subkateqoriya_adı": "Kəmər",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 9,
          "subkateqoriya_adı": "Eynək",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 10,
          "subkateqoriya_adı": "Qalstuk",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 11,
          "subkateqoriya_adı": "Pul Kisəsi",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 12,
          "subkateqoriya_adı": "Saat",
          "məhsullar": [
            {
              "product_id": 11,
              "product_name": "Sony WH-1000XM4",
              "price": 950.0,
              "original_price": 1000.0,
              "discount": 5,
              "image_url": "https://example.com/products/product-i.jpg",
              "description": "Sony WH-1000XM4 üçün təsvir.",
              "colors": ["Black", "Silver"],
              "sizes": ["L"],
              "reviews": [
                {
                  "review_id": 3,
                  "rating": 4.5,
                  "comment": "Mükəmməl səs keyfiyyəti.",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kateqoriya_id": 3,
      "kateqoriya_adı": "Elektronika",
      "subkateqoriyalar": [
        {
          "subkateqoriya_id": 1,
          "subkateqoriya_adı": "Telefon",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 2,
          "subkateqoriya_adı": "Kompüter",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 3,
          "subkateqoriya_adı": "Planşet",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 4,
          "subkateqoriya_adı": "Saat",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 5,
          "subkateqoriya_adı": "Şarj Cihazları",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 6,
          "subkateqoriya_adı": "Qulaqlıqlar",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 7,
          "subkateqoriya_adı": "Klaviatura",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 8,
          "subkateqoriya_adı": "Siçan",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 9,
          "subkateqoriya_adı": "Ram",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 10,
          "subkateqoriya_adı": "Ekran Kartı",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 11,
          "subkateqoriya_adı": "Foto və Kamera",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 12,
          "subkateqoriya_adı": "Printer və Skaner",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 13,
          "subkateqoriya_adı": "Televiziya",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 14,
          "subkateqoriya_adı": "Saç Qurudan",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 15,
          "subkateqoriya_adı": "Təraş Maşını",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 16,
          "subkateqoriya_adı": "Paltaryuyan Maşın",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 17,
          "subkateqoriya_adı": "Qabyuyan Maşın",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 18,
          "subkateqoriya_adı": "Quruducu",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 19,
          "subkateqoriya_adı": "Kombi",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 20,
          "subkateqoriya_adı": "Kondisioner",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 21,
          "subkateqoriya_adı": "Mikrodalğalı Soba",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 22,
          "subkateqoriya_adı": "Mikser və Mikser Dəsti",
          "məhsullar": []
        }
      ]
    },
    {
      "kateqoriya_id": 4,
      "kateqoriya_adı": "Ev & Yaşam",
      "subkateqoriyalar": [
        {
          "subkateqoriya_id": 1,
          "subkateqoriya_adı": "Oyuncaq",
          "məhsullar": [
            {
              "product_id": 11,
              "product_name": "LEGO Technic Car",
              "price": 950.0,
              "original_price": 1000.0,
              "discount": 5,
              "image_url": "https://example.com/products/lego-car.jpg",
              "description": "LEGO Technic seriyasından yüksək detallı avtomobil oyuncağı.",
              "colors": ["Red", "Blue"],
              "sizes": ["L"],
              "reviews": [
                {
                  "review_id": 3,
                  "rating": 4.5,
                  "comment": "Çox əyləncəli və detallı bir modeldir."
                }
              ]
            }
          ]
        },
        {
          "subkateqoriya_id": 2,
          "subkateqoriya_adı": "Divar Saatı",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 3,
          "subkateqoriya_adı": "Güzgü",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 4,
          "subkateqoriya_adı": "Pərdə",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 5,
          "subkateqoriya_adı": "Divan Dəsti",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 6,
          "subkateqoriya_adı": "Kreslo",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 7,
          "subkateqoriya_adı": "İşıqlandırma",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 8,
          "subkateqoriya_adı": "Mətbəx Şkafı",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 9,
          "subkateqoriya_adı": "Çaydan",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 10,
          "subkateqoriya_adı": "Dəsmal və Dəsmal Dəsti",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 11,
          "subkateqoriya_adı": "Hamam Dəsti",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 12,
          "subkateqoriya_adı": "Blazers",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 13,
          "subkateqoriya_adı": "Yataq Otağı",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 14,
          "subkateqoriya_adı": "Yorğan",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 15,
          "subkateqoriya_adı": "Yataq Örtüyü",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 16,
          "subkateqoriya_adı": "Yastıq",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 17,
          "subkateqoriya_adı": "Velosiped",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 18,
          "subkateqoriya_adı": "Termoslar",
          "məhsullar": []
        },
        {
          "subkateqoriya_id": 19,
          "subkateqoriya_adı": "Kitablar",
          "məhsullar": []
        }
      ]
    },
{ "kateqoriya_id": 5,
  "kateqoriya_adı": "Supermarket",
  "subkateqoriyalar": [
    {
      "subkateqoriya_id": 1,
      "subkateqoriya_adı": "Yuyucu Toz",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 2,
      "subkateqoriya_adı": "Qab Yuyucu",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 3,
      "subkateqoriya_adı": "Otaq Ətri",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 4,
      "subkateqoriya_adı": "Hamam Təmizləyiciləri",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 5,
      "subkateqoriya_adı": "Tualet Kağızı",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 6,
      "subkateqoriya_adı": "Kağız Dəsmal",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 7,
      "subkateqoriya_adı": "Saça Qulluq",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 8,
      "subkateqoriya_adı": "Ağız Baxımı",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 9,
      "subkateqoriya_adı": "Dəriyə Qulluq",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 10,
      "subkateqoriya_adı": "Elektrikli Diş Fırçaları",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 11,
      "subkateqoriya_adı": "Təraş Məhsulları",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 12,
      "subkateqoriya_adı": "Körpə Üçün Əlavə Qidalanma",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 13,
      "subkateqoriya_adı": "Dəsmallar",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 14,
      "subkateqoriya_adı": "Uşaq Kosmetikası",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 15,
      "subkateqoriya_adı": "Uşaq Qidaları",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 16,
      "subkateqoriya_adı": "Körpə Təmizləyici Pambıq",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 17,
      "subkateqoriya_adı": "Uşaq Pudrası",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 18,
      "subkateqoriya_adı": "Uşaq Şampunu",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 19,
      "subkateqoriya_adı": "Çay",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 20,
      "subkateqoriya_adı": "Qəlyanaltı",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 21,
      "subkateqoriya_adı": "Quru Yemək",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 22,
      "subkateqoriya_adı": "Qəhvə",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 23,
      "subkateqoriya_adı": "Makaron",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 24,
      "subkateqoriya_adı": "Duz və Ədviyyat",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 25,
      "subkateqoriya_adı": "Şəkər",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 26,
      "subkateqoriya_adı": "Süd",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 27,
      "subkateqoriya_adı": "Bitki Çayları",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 28,
      "subkateqoriya_adı": "Quru Meyvə",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 29,
      "subkateqoriya_adı": "Şokolad",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 30,
      "subkateqoriya_adı": "Biskvit",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 31,
      "subkateqoriya_adı": "Çörək Məmulatları",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 32,
      "subkateqoriya_adı": "Şirniyyat Məmulatları",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 33,
      "subkateqoriya_adı": "Qoz-Fındıq",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 34,
      "subkateqoriya_adı": "Yulaf",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 35,
      "subkateqoriya_adı": "Maye Yağ",
      "məhsullar": []
    },
    {
      "subkateqoriya_id": 36,
      "subkateqoriya_adı": "Zibil Qutusu",
      "məhsullar": []
    }
      ]
    },
    {
      "kateqoriya_id": 6,
      "kateqoriya_adı": "İdman & Çöl",
    "subkateqoriyalar": [
      {
        "subkateqoriya_id": 1,
        "subkateqoriya_adı": "İdman Köynəyi",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 2,
        "subkateqoriya_adı": "Gödəkçə və Jilet",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 3,
        "subkateqoriya_adı": "Yağış Paltarı",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 4,
        "subkateqoriya_adı": "İdman Büstqalteri",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 5,
        "subkateqoriya_adı": "İdman Paltosu",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 6,
        "subkateqoriya_adı": "İdman Papağı",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 7,
        "subkateqoriya_adı": "İdman Ayaqqabısı",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 8,
        "subkateqoriya_adı": "İdman Zalı Üçün Avadanlıqlar",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 10,
        "subkateqoriya_adı": "Mat",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 11,
        "subkateqoriya_adı": "İp Atlama",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 12,
        "subkateqoriya_adı": "Boks Əlcəyi",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 13,
        "subkateqoriya_adı": "Düşərgə Alətləri",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 13,
        "subkateqoriya_adı": "Alpinizm və Dırmanma",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 15,
        "subkateqoriya_adı": "Su İdmanı Avadanlıqları",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 16,
        "subkateqoriya_adı": "Dalğıc Avadanlıqları",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 17,
        "subkateqoriya_adı": "Balıqçılıq Ləvazimatları",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 19,
        "subkateqoriya_adı": "Çadır",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 20,
        "subkateqoriya_adı": "Pilates Topları",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 21,
        "subkateqoriya_adı": "Protein tozu",
        "məhsullar": []
      },
      {
        "subkateqoriya_id": 22,
        "subkateqoriya_adı": "Top",
        "məhsullar": []
      },
  
    ]
  },
    {
     "kateqoriya_id": 6,
      "kateqoriya_adı": "Ev Heyvanları & Bağ",
      "subkateqoriyalar": [
        {
          "id": 1,
          "subkateqoriya_adı": "Pişik Yeməyi",
          "məhsullar": []
        },
        {
          "id": 2,
          "subkateqoriya_adı": "İt Yeməyi",
          "məhsullar": []
        },
        {
          "id": 3,
          "subkateqoriya_adı": "Quş Məhsulları",
          "məhsullar": []
        },
        {
          "id": 4,
          "subkateqoriya_adı": "Akvarium Məhsulları",
          "məhsullar": []
        },
        {
          "id": 5,
          "subkateqoriya_adı": "Pişik Vitamini",
          "məhsullar": []
        },
   
   
        {
          "id": 8,
          "subkateqoriya_adı": "Pişik Oyuncaqları",
          "məhsullar": []
        },
        {
          "id": 9,
          "subkateqoriya_adı": "İt Oyuncaqları",
          "məhsullar": []
        },
        {
          "id": 10,
          "subkateqoriya_adı": "Pişiklərin Yaş Yeməyi",
          "məhsullar": []
        },
        {
          "id": 11,
          "subkateqoriya_adı": "Pişiklərin Müalicəsi",
          "məhsullar": []
        },
        {
          "id": 12,
          "subkateqoriya_adı": "İtlərin Müalicəsi",
          "məhsullar": []
        },
        {
          "id": 13,
          "subkateqoriya_adı": "Pişik şampunu",
          "məhsullar": []
        },
        {
          "id": 14,
          "subkateqoriya_adı": "İt şampunu",
          "məhsullar": []
        },
        {
          "id": 19,
          "subkateqoriya_adı": "Balıq Yemi",
          "məhsullar": []
        },
      ]
}
  ]
}
export default data;