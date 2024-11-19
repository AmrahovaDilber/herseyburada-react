import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Review({ findProduct }) {
  const [activeTab, setActiveTab] = useState("description");

  const generateRandomDate = () => {
    const currentDate = new Date();
    const randomDaysAgo = Math.floor(Math.random() * 30);
    const randomDate = new Date(currentDate);
    randomDate.setDate(currentDate.getDate() - randomDaysAgo);
    return randomDate.toLocaleDateString();
  };

  return (
    <div className="my-4 w-full max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <div className="flex flex-col space-y-8">
        {/* Tab Buttons */}
        <div className="flex items-center gap-4 border-b pb-4">
          <button
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition duration-300 ${
              activeTab === "description"
                ? "bg-[#ff9130] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition duration-300 ${
              activeTab === "reviews"
                ? "bg-[#ff9130] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
            <span className="ml-1">
              ({findProduct.reviews.length})
            </span>
          </button>
        </div>

        {/* Description Tab Content */}
        {activeTab === "description" && (
          <div className="text-gray-800 leading-relaxed">
            <p className="text-lg">{findProduct.description}</p>
          </div>
        )}

        {/* Reviews Tab Content */}
        {activeTab === "reviews" && (
          <div className="space-y-8">
            {findProduct.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 transition duration-300 hover:shadow-lg"
              >
                {/* Review Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    {/* User Avatar */}
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                      {review.userName ? review.userName[0].toUpperCase() : "U"}
                    </div>
                    <div>
                      {/* User Info */}
                      <p className="text-sm font-semibold text-gray-800">
                        {review.userName || "Anonymous"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {review.date
                          ? new Date(review.date).toLocaleDateString()
                          : generateRandomDate()}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Comment */}
                <div className="text-gray-700 leading-relaxed">
                  <p className="text-base italic">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
