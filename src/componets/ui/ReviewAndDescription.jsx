import { useState } from "react";
import TabButton from "./TabButton";
import ProductReviewItem from "./ProductReviewItem";

export default function ReviewandDescription({ findProduct }) {
  const [activeTab, setActiveTab] = useState("Təsvir");

  return (
    <div className="my-10 w-full  mx-auto p-8 bg-white dark:bg-[#202020] shadow-lg rounded-xl">
      <div className="flex flex-col space-y-8">
        <div className="flex items-center gap-4 border-b pb-4">
          <TabButton
            label="Təsvir"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            Təsvir
          </TabButton>
          <TabButton
            label="Rəylər"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            Rəylər ({findProduct.reviews.length})
          </TabButton>
        </div>

        {activeTab === "Təsvir" && (
          <div className="text-gray-800 dark:text-white leading-relaxed">
            <p className="text-lg">{findProduct.description}</p>
          </div>
        )}

        {activeTab === "Rəylər" && (
          <div className="space-y-8">
            {findProduct.reviews.map((review) => (
              <ProductReviewItem review={review} key={review.id}></ProductReviewItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
