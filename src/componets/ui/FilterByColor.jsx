// components/FilterByColor.jsx
const colors = [
    { color: 'red-600', name: 'Red', count: 10 },
    { color: 'blue-600', name: 'Blue', count: 14 },
    { color: 'orange-500', name: 'Orange', count: 8 },
    { color: 'black', name: 'Black', count: 9 },
    { color: 'green-600', name: 'Green', count: 4 },
    { color: 'yellow-500', name: 'Yellow', count: 2 }
  ];
  
  const FilterByColor = () => {
    return (
      <div>
        <h2 className="font-bold mb-2">Filter by Color</h2>
        <ul className="space-y-1 h-[170px] overflow-y-auto">
          {colors.map(({ color, name, count }) => (
            <li key={name} className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                <span className={`bg-${color} w-4 h-4 rounded mr-2`} />
                {name} ({count})
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FilterByColor;
  