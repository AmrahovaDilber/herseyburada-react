import { FaStar } from "react-icons/fa";

export default function ProductReviewItem({ review }) {
  const generateRandomDate = () => {
    const currentDate = new Date();
    const randomDaysAgo = Math.floor(Math.random() * 30);
    const randomDate = new Date(currentDate);
    randomDate.setDate(currentDate.getDate() - randomDaysAgo);
    return randomDate.toLocaleDateString();
  };

  return (
    <div className="bg-gray-50 dark:bg-[#1E1E1E] p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-lg">
            {review.userName ? review.userName[0].toUpperCase() : "U"}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {review.userName || "Anonymous"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {review.date
                ? new Date(review.date).toLocaleDateString()
                : generateRandomDate()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-5 h-5 ${
                i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-base italic">{review.comment}</p>
      </div>
    </div>
  );
}
