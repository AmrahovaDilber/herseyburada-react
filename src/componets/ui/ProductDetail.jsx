import ProductInfo from "../ui/ProductInfo";
import ProductOptions from "../ui/ProductOptions";
import DeliveryInfo from "../ui/DeliveryInfo";
import { useParams } from "react-router-dom";
import { useContextApp } from "../../context/AppContext";

export default function ProductDetail() {
  const { products ,addToCart} = useContextApp();
  const { slug } = useParams();
  const findProduct = products.find((product) => product.slug === slug);
  console.log(slug);

  return (
    <div className="flex justify-between my-[50px] w-[1200px] ">
      <div className="flex gap-x-[43px]">
        {/* ThumbnailList */}
        <div className="flex flex-col gap-y-[8px]">
          {/* Example thumbnails */}
          <figure className="w-[170px] flex-1 rounded-[4px] border cursor-pointer">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51zyUeBrFgL._AC_UL600_SR600,600_.jpg"
              alt="Thumbnail 1"
              className="w-full object-cover"
            />
          </figure>
          <figure className="w-[170px] flex-1 rounded-[4px] border cursor-pointer">
            <img
              src="https://cdn.mobilesyrup.com/wp-content/uploads/2021/10/xbox-canadian-controller.jpg"
              alt="Thumbnail 1"
              className="w-full object-cover"
            />
          </figure>
          <figure className="w-[170px] flex-1 rounded-[4px] border cursor-pointer">
            <img
              src="https://m.media-amazon.com/images/I/51EfS8UJe9L._AC_UF894,1000_QL80_.jpg"
              alt="Thumbnail 1"
              className="w-full object-cover"
            />
          </figure>
          <figure className="w-[170px] flex-1 rounded-[4px] border cursor-pointer">
            <img
              src="https://i.ebayimg.com/images/g/2pwAAOSwu55kdZEk/s-l1200.jpg"
              alt="Thumbnail 1"
              className="w-full object-cover"
            />
          </figure>
        </div>

        {/* ProductImages */}
        <div className="w-[500px] border rounded-[4px]">
          <figure>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51zyUeBrFgL._AC_UL600_SR600,600_.jpg"
              alt="Product Image"
            />
          </figure>
        </div>
      </div>
      <div className="w-[400px]">
        <ProductInfo findProduct={findProduct} />

        {/* ProductPrice */}
        <div>
          <div className="text-[24px] mb-[24px]">
            {findProduct.originalPrice}
          </div>
          <div className="text-[14px] mb-[24px] border-b-[1px]">
            <p className="mb-[24px]">{findProduct.about}</p>
          </div>
        </div>

        <ProductOptions findProduct={findProduct} />
        <div className="flex gap-[16px]  items-center">
          {/* BuyNowButton */}
          <button
            onClick={()=>addToCart(findProduct.id)}
            className="bg-[#FF7518] text-white py-2 px-4 rounded">
            Add To Cart
          </button>

          {/* WishlistButton */}
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
            Add to Wishlist
          </button>
        </div>
        <DeliveryInfo />
      </div>
    </div>
  );
}