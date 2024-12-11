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
  const { handleColorChange, selectedColors } = useContextApp();

  return (
    <div className="">
      <h2 className="font-bold text-gray-700 dark:text-[#fff] mb-3 text-lg border-b pb-2">
        Rəng
      </h2>
      <ul className=" max-h-44 overflow-y-auto custom-scrollbar">
        {colors.map(({ bgColorClass, name }) => (
          <li
            key={name}
            className="flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-transparent"
          >
            <label className="flex items-center cursor-pointer ">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 border  border-gray-300 rounded cursor-pointer"
                checked={selectedColors.includes(name)}
                onChange={() => handleColorChange(name)}
              />
              <span
                className={`inline-block w-5 h-5 rounded-full mr-3 border ${bgColorClass}`}
              />
              <span className="text-gray-600 dark:text-[#fff]">{name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByColor;
