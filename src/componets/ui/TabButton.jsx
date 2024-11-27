export default function TabButton({label, activeTab, setActiveTab }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold text-sm transition duration-300 ${
        activeTab === label
          ? "bg-[#ff9130] text-white shadow-md"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );
}
