import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterBySize from "./FilterBySize";
import FilterProductCategories from "./FilterProductCategories ";
export default function ProductsSidebar() {
  return (
    <div className="w-[244px] h-[100vh] overflow-y-auto sticky top-0 space-y-6 border border-gray-200 shadow-md rounded-lg p-4 bg-white z-0">
    <FilterProductCategories />
    <FilterByPrice />
    <FilterByColor />
    <FilterBySize />
  </div>

  )
}
