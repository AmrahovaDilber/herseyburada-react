// components/FilterByPrice.jsx
const FilterByPrice = () => {
    return (
      <div>
        <h2 className="font-bold mb-2">Filter by Price</h2>
        <div className="space-y-2">
          <p>Price: $0 - $2000</p>
          <input type="range" min={0} max={2000} className="w-[200px]" />
        </div>
      </div>
    );
  };
  
  export default FilterByPrice;
  