import ProductInfo from "../ui/ProductInfo";
import ProductOptions from "../ui/ProductOptions";
import DeliveryInfo from "../ui/DeliveryInfo";
import { useParams } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";

export default function ProductDetail() {
  const { products, addToCart, addToFavorites } = useContextApp();
  const { slug } = useParams();
  const findProduct = products.find((product) => product.slug === slug);

  return (
    <div className="flex justify-between mx-auto my-12 max-w-7xl px-6 lg:px-8">
      <div className="flex gap-10">
        {/* Product Images */}
        <div className="w-[500px] rounded-lg overflow-hidden shadow-lg">
          <figure className="h-[600px] flex items-center justify-center bg-gray-100">
            <img
              src={findProduct.image_url}
              alt={findProduct.product_name}
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>

      {/* Product Details */}
      <div className="w-[500px] space-y-6">
        <ProductInfo findProduct={findProduct} />

        {/* Product Price and Description */}
        <div className="space-y-4 border-b pb-6">
          <div className="text-3xl font-bold text-gray-800">
            ${findProduct.original_price}
          </div>
          <div className="text-sm text-gray-600 leading-relaxed">
            {findProduct.description}
          </div>
        </div>

        <ProductOptions findProduct={findProduct} />

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => addToCart(findProduct.product_id)}
            className="bg-orange-500 text-white px-5 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-200"
          >
            Add To Cart
          </button>

          <button
            onClick={() => addToFavorites(findProduct.product_id)}
            className="bg-gray-200 text-gray-700 px-5 py-3 rounded-lg shadow hover:bg-gray-300 transition duration-200"
          >
            Add to Wishlist
          </button>
        </div>
        <DeliveryInfo />
      </div>
    </div>
  );
}