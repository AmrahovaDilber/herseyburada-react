import { useContextApp } from "../../context/AppContext";

const sizes = [
  { size: "S", count: 6 },
  { size: "M", count: 20 },
  { size: "L", count: 7 },
  { size: "XL", count: 16 },
  { size: "2XL", count: 10 },
  { size: "3XL", count: 2 },
  { size: "4XL", count: 2 },
];

const FilterBySize = () => {
  const { selectedSizes, handleSizeChange } = useContextApp();

  return (
    <div className=" rounded-lg ">
      <h2 className="font-bold text-gray-700 mb-3 text-lg border-b pb-2">
        Filter by Size
      </h2>
      <ul className="space-y-1 h-[170px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {sizes.map(({ size, count }) => (
          <li key={size} className=" rounded-md p-1">
            <label className="flex items-center cursor-pointer text-gray-600 ">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-0 focus:outline-none mr-3"
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              <span className="font-medium">{size}</span>
            
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBySize;
