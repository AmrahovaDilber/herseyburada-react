import { useContextApp } from "../../context/AppContext";

const colors = [
  { bgColorClass: "bg-red-600", name: "Red" },
  { bgColorClass: "bg-blue-600", name: "Blue" },
  { bgColorClass: "bg-orange-500", name: "Orange" },
  { bgColorClass: "bg-black", name: "Black" },
  { bgColorClass: "bg-green-600", name: "Green" },
  { bgColorClass: "bg-yellow-500", name: "Yellow" },
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
