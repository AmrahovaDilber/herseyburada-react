const sizes = [
    { size: 'S', count: 6 },
    { size: 'M', count: 20 },
    { size: 'L', count: 7 },
    { size: 'XL', count: 16 },
    { size: '2XL', count: 10 },
    { size: '3XL', count: 2 },
    { size: '4XL', count: 2 }
  ];
  
  const FilterBySize = () => {
    return (
      <div>
        <h2 className="font-bold mb-2">Filter by Size</h2>
        <ul className="space-y-1 h-[170px] overflow-y-auto">
          {sizes.map(({ size, count }) => (
            <li key={size} className="hover:bg-gray-100 rounded-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                {size} ({count})
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FilterBySize;
  