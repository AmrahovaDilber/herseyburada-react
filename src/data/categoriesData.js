const data = {
  categories: [
    {
      category_id: 1,
      category_name: "Electronics",
      products: [
        {
          product_id: 10,
          product_name: "HAVIT HV-G92 Gamepad",
          price: 450.0,
          original_price: 500.0,
          discount: 10,
          image_url: "https://example.com/products/product-h.jpg",
          description: "Bu, HAVIT HV-G92 Gamepad üçün təsviridir.",
          colors: ["Red", "Black"],
          sizes: ["M", "L", "XL"],
          reviews: [
            {
              review_id: 1,
              rating: 4,
              comment: "Çox yaxşı məhsuldur!",
            },
            {
              review_id: 2,
              rating: 5,
              comment: "Keyfiyyəti yüksəkdir.",
            },
          ],
        },
        {
          product_id: 11,
          product_name: "Sony WH-1000XM4",
          price: 950.0,
          original_price: 1000.0,
          discount: 5,
          image_url: "https://example.com/products/product-i.jpg",
          description: "Sony WH-1000XM4 üçün təsvir.",
          colors: ["Black", "Silver"],
          sizes: ["L"],
          reviews: [
            {
              review_id: 3,
              rating: 4.5,
              comment: "Mükəmməl səs keyfiyyəti.",
            },
          ],
        },
      ],
    },
    {
      category_id: 2,
      category_name: "Clothing",
      products: [
        {
          product_id: 20,
          product_name: "Nike Air Max",
          price: 120.0,
          original_price: 150.0,
          discount: 20,
          image_url: "https://example.com/products/nike-air-max.jpg",
          description: "Nike Air Max idman ayaqqabısı.",
          colors: ["Red", "Blue", "Black"],
          sizes: ["S", "M", "L", "XL"],
          reviews: [
            {
              review_id: 4,
              rating: 4.7,
              comment: "Çox rahatdır və gözəl görünüşə malikdir.",
            },
          ],
        },
        {
          product_id: 21,
          product_name: "Adidas T-shirt",
          price: 35.0,
          original_price: 50.0,
          discount: 30,
          image_url: "https://example.com/products/adidas-tshirt.jpg",
          description: "Adidas t-shirt idman üçün idealdır.",
          colors: ["White", "Black"],
          sizes: ["M", "L", "XL"],
          reviews: [
            {
              review_id: 5,
              rating: 4.2,
              comment: "Rahat və yüngüldür.",
            },
          ],
        },
      ],
    },
  ],
};

export default data;
