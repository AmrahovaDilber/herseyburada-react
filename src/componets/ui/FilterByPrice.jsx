import  { useState } from 'react';
import { useContextApp } from "../../context/AppContext";

const FilterByPrice = () => {
  const { handleFilterPrice } = useContextApp();
  const [priceRange, setPriceRange] = useState(2000);

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);
    setPriceRange(newPrice);
    handleFilterPrice(newPrice);
  };

  return (
    <div>
      <h2 className="font-bold text-gray-700 mb-3 text-lg border-b pb-2">Filter by Price</h2>
      <div className="space-y-2">
        <p>Qiymət: $0 - ${priceRange}</p>
        <input 
          type="range" 
          min={0} 
          max={2000} 
          value={priceRange}
          onChange={handlePriceChange}
          className="w-[200px]" 
        />
      </div>
    </div>
  );
};

export default FilterByPrice;