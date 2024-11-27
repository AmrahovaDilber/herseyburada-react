import { useContextApp } from "../../context/AppContext";

const FilterProductCategories = () => {
  const { allData, selectedCategories, handleCategoryChange } = useContextApp();

  return (
    <div className="p-2 rounded-lg ">
      <h2 className="font-bold text-gray-700 mb-3 text-lg border-b pb-2 dark:text-[#fff] " >Kateqoriyalar</h2>
      <ul className="h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {allData.kateqoriyalar.map((category) => {
          const isActive = selectedCategories.includes(category.kateqoriya_adı);
          return (
            <li 
              key={category.kateqoriya_id} 
              className={`py-2 rounded-md  cursor-pointer transition-all duration-300 `}
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => handleCategoryChange(category.kateqoriya_adı)}
                  className="mr-3 cursor-pointer h-4 w-4 accent-blue-500"
                />
                <span className={`transition-colors duration-200 ${isActive ? 'font-semibold' : 'text-gray-600'} dark:text-[#fff] `}>
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
