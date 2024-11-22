import { useState } from "react";

const colors = [
  { bgColorClass: "bg-white", name: "Ağ" },
  { bgColorClass: "bg-black", name: "Qara" },
  { bgColorClass: "bg-gray-500", name: "Boz" },
  { bgColorClass: "bg-red-600", name: "Qırmızı" },
  { bgColorClass: "bg-blue-600", name: "Mavi" },
  { bgColorClass: "bg-orange-500", name: "Narinci" },
  { bgColorClass: "bg-green-600", name: "Yaşıl" },
  { bgColorClass: "bg-yellow-600", name: "Sarı" },
];

function ProductOptions({ findProduct }) {
  const [selectedColor, setSelectedColor] = useState(findProduct.colors[0] || "");

  const handleColorChange = (colorName) => {
    if (findProduct.colors.includes(colorName)) {
      setSelectedColor(colorName);
    }
  };

  
  const availableColors = colors.filter(color => findProduct.colors.includes(color.name));

  return (
    <div className="space-y-6">
    
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div className="text-base sm:text-lg font-semibold text-gray-800">Rəng:</div>
        <div className="flex flex-wrap gap-4">
          {availableColors.map((color, index) => {
            const isSelected = selectedColor === color.name;

            return (
              <label
                key={index}
                className="cursor-pointer"
                onClick={() => handleColorChange(color.name)}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 ${
                    isSelected ? "border-blue-600 ring-2 ring-blue-400" : "border-gray-300"
                  } ${color.bgColorClass} ${isSelected ? "shadow-md" : ""}`}
                ></div>
                <span className="sr-only">{color.name}</span>
              </label>
            );
          })}
        </div>
      </div>

    
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div className="text-base sm:text-lg font-semibold text-gray-800">Ölçülər:</div>
        <div className="flex flex-wrap gap-2">
          {findProduct.sizes.map((size, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 peer-checked:bg-gray-300"
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductOptions;
