import PaginationButton from "./PaginationButton";
const Pagination = ({ currentPage, onPageChange }) => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-end space-x-2 text-white mt-[36px]">
      <PaginationButton
        className="text-gray-400"
        onClick={() => onPageChange(currentPage - 1)}
      >
        ←
      </PaginationButton>
      {pages.map((page) => (
        <PaginationButton
          key={page}
          isActive={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        className="text-gray-400"
        onClick={() => onPageChange(currentPage + 1)}
      >
        →
      </PaginationButton>
    </div>
  );
};

export default Pagination;
