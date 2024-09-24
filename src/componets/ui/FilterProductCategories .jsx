import { useContextApp } from "../../context/AppContext";

const FilterProductCategories = () => {
  const { allData, selectedCategories, handleCategoryChange } = useContextApp();

  return (
    <div>
      <h2 className="font-bold mb-2">Product Categories</h2>
      <ul className=" h-[200px] overflow-y-auto">
        {allData.kateqoriyalar.map((category) => {
          const isActive = selectedCategories.includes(category.kateqoriya_adı);
          return (
            <li 
              key={category.kateqoriya_id} 
              className={`hover:bg-gray-100 rounded-sm ${isActive ? 'bg-blue-100' : ''}`}
            >
              <label className="flex items-center cursor-pointer p-1">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => handleCategoryChange(category.kateqoriya_adı)}
                  className="mr-2 cursor-pointer"
                />
                <span className={`${isActive ? 'font-semibold text-blue-600' : ''}`}>
                  {category.kateqoriya_adı}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterProductCategories;