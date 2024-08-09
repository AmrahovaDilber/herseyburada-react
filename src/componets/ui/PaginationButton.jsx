const PaginationButton = ({ isActive, children, onClick, className }) => (
    <button
      className={`px-4 py-2 rounded ${isActive ? 'bg-orange-500 text-white' : 'border border-orange-500 text-orange-500'} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
export default PaginationButton;  