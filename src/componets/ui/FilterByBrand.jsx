import { useContextApp } from "../../context/AppContext";

const brands = ['Nike', 'Adidas', 'Puma', 'Levi\'s', 'Zara', 'Gucci'];
const FilterByBrand = () => {
const{products}=useContextApp()
  return (
    <div>
      <h2 className="font-bold mb-2">Filter by Color</h2>
      <ul className="space-y-1 h-[170px] overflow-y-auto">
        {products.map((it) => (
          <li key={name} className="hover:bg-gray-100 rounded-sm">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer"
                // checked={selectedColor.toLowerCase() === name.toLowerCase()}
                // onChange={() => handleFilterColor(name)}
              />
              <span className={`w-4 h-4 rounded mr-2 `} />
              {it.brand}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByBrand;
