const sizes = [
    { size: 'S', count: 6 },
    { size: 'M', count: 20 },
    { size: 'L', count: 7 },
    { size: 'XL', count: 16 },
    { size: '2XL', count: 10 },
    { size: '3XL', count: 2 },
    { size: '4XL', count: 2 }
  ];
  
  const FilterBySize = () => {
    return (
      <div>
        <h2 className="font-bold mb-2">Filter by Size</h2>
        <ul className="space-y-1 h-[170px] overflow-y-auto">
          {sizes.map(({ size, count }) => (
            <li key={size} className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                {size} ({count})
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FilterBySize;
  


  // {
  //   "categories": [
  //     {
  //       "id": 1,
  //       "name": "Qadın",
  //       "subcategories": [
  //         {
  //           "id": 101,
  //           "name": "Geyim",
  //           "products": [
  //             {
  //               "product_id": 1001,
  //               "product_name": "Qadın Geyimi 1",
  //               "price": 49.99,
  //               "description": "Moda üslubunda qadın geyimi.",
  //               "image_url": "https://example.com/images/women-clothing-1.jpg",
  //               "in_stock": true
  //             },
  //             {
  //               "product_id": 1002,
  //               "product_name": "Qadın Geyimi 2",
  //               "price": 59.99,
  //               "description": "Rahat və yüngül qadın geyimi.",
  //               "image_url": "https://example.com/images/women-clothing-2.jpg",
  //               "in_stock": false
  //             }
  //           ]
  //         },
  //         {
  //           "id": 102,
  //           "name": "Ayaqqabı",
  //           "products": [
  //             {
  //               "product_id": 1003,
  //               "product_name": "Qadın Ayaqqabısı 1",
  //               "price": 79.99,
  //               "description": "Dəbli qadın ayaqqabısı.",
  //               "image_url": "https://example.com/images/women-shoe-1.jpg",
  //               "in_stock": true
  //             },
  //             {
  //               "product_id": 1004,
  //               "product_name": "Qadın Ayaqqabısı 2",
  //               "price": 89.99,
  //               "description": "Rahat qadın ayaqqabısı.",
  //               "image_url": "https://example.com/images/women-shoe-2.jpg",
  //               "in_stock": true
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       "id": 2,
  //       "name": "Kişi",
  //       "subcategories": [
  //         {
  //           "id": 201,
  //           "name": "Geyim",
  //           "products": [
  //             {
  //               "product_id": 2001,
  //               "product_name": "Kişi Geyimi 1",
  //               "price": 39.99,
  //               "description": "Klassik üslubda kişi geyimi.",
  //               "image_url": "https://example.com/images/men-clothing-1.jpg",
  //               "in_stock": true
  //             },
  //             {
  //               "product_id": 2002,
  //               "product_name": "Kişi Geyimi 2",
  //               "price": 49.99,
  //               "description": "İdman üslubunda kişi geyimi.",
  //               "image_url": "https://example.com/images/men-clothing-2.jpg",
  //               "in_stock": false
  //             }
  //           ]
  //         },
  //         {
  //           "id": 202,
  //           "name": "Ayaqqabı",
  //           "products": [
  //             {
  //               "product_id": 2003,
  //               "product_name": "Kişi Ayaqqabısı 1",
  //               "price": 69.99,
  //               "description": "Klassik kişi ayaqqabısı.",
  //               "image_url": "https://example.com/images/men-shoe-1.jpg",
  //               "in_stock": true
  //             },
  //             {
  //               "product_id": 2004,
  //               "product_name": "Kişi Ayaqqabısı 2",
  //               "price": 79.99,
  //               "description": "İdman üslubunda kişi ayaqqabısı.",
  //               "image_url": "https://example.com/images/men-shoe-2.jpg",
  //               "in_stock": true
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
  
  //   API FORMAT2
  // {
  //     "promotions": {
  //       "discounts": [
  //         {
  //           "id": 1,
  //           "product_name": "Məhsul A",
  //           "original_price": 100.00,
  //           "discounted_price": 80.00,
  //           "discount_percentage": 20,
  //           "image_url": "https://example.com/products/product-a.jpg",
  //           "description": "Məhsul A-nın təsviri"
  //         },
  //         {
  //           "id": 2,
  //           "product_name": "Məhsul B",
  //           "original_price": 150.00,
  //           "discounted_price": 120.00,
  //           "discount_percentage": 20,
  //           "image_url": "https://example.com/products/product-b.jpg",
  //           "description": "Məhsul B-nin təsviri"
  //         }
  //         // Digər endirimlər...
  //       ],
  //       "best_sellers": [
  //         {
  //           "id": 3,
  //           "product_name": "Məhsul C",
  //           "price": 200.00,
  //           "sold_quantity": 1500,
  //           "image_url": "https://example.com/products/product-c.jpg",
  //           "description": "Məhsul C-nin təsviri"
  //         },
  //         {
  //           "id": 4,
  //           "product_name": "Məhsul D",
  //           "price": 300.00,
  //           "sold_quantity": 1200,
  //           "image_url": "https://example.com/products/product-d.jpg",
  //           "description": "Məhsul D-nin təsviri"
  //         }
  //         // Digər ən çox satılan məhsullar...
  //       ],
  //       "discover": [
  //         {
  //           "id": 5,
  //           "category_name": "Yeni gələnlər",
  //           "products": [
  //             {
  //               "product_id": 6,
  //               "product_name": "Məhsul E",
  //               "price": 250.00,
  //               "image_url": "https://example.com/products/product-e.jpg",
  //               "description": "Məhsul E-nin təsviri"
  //             },
  //             {
  //               "product_id": 7,
  //               "product_name": "Məhsul F",
  //               "price": 350.00,
  //               "image_url": "https://example.com/products/product-f.jpg",
  //               "description": "Məhsul F-nin təsviri"
  //             }
  //             // Digər məhsullar...
  //           ]
  //         },
  //         {
  //           "id": 8,
  //           "category_name": "Trend olan məhsullar",
  //           "products": [
  //             {
  //               "product_id": 9,
  //               "product_name": "Məhsul G",
  //               "price": 400.00,
  //               "image_url": "https://example.com/products/product-g.jpg",
  //               "description": "Məhsul G-nin təsviri"
  //             },
  //             {
  //               "product_id": 10,
  //               "product_name": "Məhsul H",
  //               "price": 450.00,
  //               "image_url": "https://example.com/products/product-h.jpg",
  //               "description": "Məhsul H-nin təsviri"
  //             }
  //             // Digər məhsullar...
  //           ]
  //         }
  //         // Digər kəşf et bölmələri...
  //       ]
  //     }
  //   }
  
  