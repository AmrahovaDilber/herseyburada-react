import { useContextApp } from "../../context/AppContext";

const FilterProductCategories = () => {
  const { allData, handleFilterCategory, selectedCategory } = useContextApp();

  return (
    <div>
      <h2 className="font-bold mb-2">Product Categories</h2>
      <ul className="space-y-1 h-[200px] overflow-y-auto">
        {allData.kateqoriyalar.map((category) => (
          <li key={category.kateqoriya_id} className="hover:bg-gray-100 rounded-sm">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategory === category.kateqoriya_adı}
                onChange={() => handleFilterCategory(category.kateqoriya_adı)}
                className="mr-2 cursor-pointer"
              />
              {category.kateqoriya_adı}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterProductCategories;