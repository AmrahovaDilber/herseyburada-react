const categories = ['Men', 'Women', 'Kids', 'Bags', 'Belts', 'Wallets', 'Watches', 'Accessories', 'Winter Wear'];

const FilterProductCategories = () => {
  return (
    <div>
      <h2 className="font-bold mb-2">Product Categories</h2>
      <ul className="space-y-1 h-[200px] overflow-y-auto">
        {categories.map(category => (
          <li key={category} className="hover:bg-gray-100 rounded-sm">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2 cursor-pointer" /> {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default  FilterProductCategories
