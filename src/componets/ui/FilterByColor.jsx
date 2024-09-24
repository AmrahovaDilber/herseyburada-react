import { useContextApp } from "../../context/AppContext";

const colors = [
  { bgColorClass: "bg-white-600", name: "Ağ" },
  { bgColorClass: "bg-black", name: "Qara" },
  { bgColorClass: "bg-gray-500", name: "Boz" },
  { bgColorClass: "bg-red-600", name: "Qırmızı" },
  { bgColorClass: "bg-blue-600", name: "Mavi" },
  { bgColorClass: "bg-orange-500", name: "Narinci" },
  { bgColorClass: "bg-green-600", name: "Yaşıl" },
  { bgColorClass: "bg-yellow-600", name: "Sarı" },
];

const FilterByColor = () => {
  // const { handleFilterColor, selectedColor } = useContextApp();
  const { handleColorChange, selectedColors } = useContextApp();
  return (
    <div>
      <h2 className="font-bold mb-2">Filter by Color</h2>
      <ul className="space-y-1 h-[170px] overflow-y-auto">
        {colors.map(({ bgColorClass, name, count }) => (
          <li key={name} className="hover:bg-gray-100 rounded-sm">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer"
                checked={selectedColors.includes(name)}
                onChange={() => handleColorChange(name)}
              />
              <span className={`w-4 h-4 rounded mr-2 ${bgColorClass}`} />
              {name} ({count})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByColor;
