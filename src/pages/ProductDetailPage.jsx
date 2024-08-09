import ProductList from "../componets/ui/ProductList";
import TitleSubtitle from "../componets/ui/TitleSubtitle";
import ProductInfo from "../componets/ui/ProductInfo";
import ProductOptions from "../componets/ui/ProductOptions";
import QuantitySelector from "../componets/ui/QuantitySelector";
import DeliveryInfo from "../componets/ui/DeliveryInfo";
export default function ProductDetailPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between my-[50px] ">
        <div className="flex gap-x-[43px]">
          {/* ThumbnailList */}
          <div className="flex flex-col gap-y-[8px]">
            {/* Example thumbnails */}
            <img
              src="https://example.com/thumbnail1.jpg"
              alt="Thumbnail 1"
              className="w-[100px] h-[100px] border rounded"
            />
            <img
              src="https://example.com/thumbnail2.jpg"
              alt="Thumbnail 2"
              className="w-[100px] h-[100px] border rounded"
            />
            <img
              src="https://example.com/thumbnail3.jpg"
              alt="Thumbnail 3"
              className="w-[100px] h-[100px] border rounded"
            />
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
          <ProductInfo />

          {/* ProductPrice */}
          <div>
            <div className="text-[24px] mb-[24px]">$192.00</div>
            <div className="text-[14px] mb-[24px] border-b-[1px]">
              <p className="mb-[24px]">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble-free install & mess-free
                removal Pressure sensitive.
              </p>
            </div>
          </div>

          <ProductOptions />
          <div className="flex gap-[16px] justify-between items-center">
            <QuantitySelector />

            {/* BuyNowButton */}
            <button className="bg-[#FF7518] text-white py-2 px-4 rounded">
              Buy Now
            </button>

            {/* WishlistButton */}
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
              Add to Wishlist
            </button>
          </div>
          <DeliveryInfo />
        </div>
      </div>

      <TitleSubtitle subtitle="Trenddə" />
      <ProductList />
    </div>
  );
}
