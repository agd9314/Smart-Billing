import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 transition-colors duration-200 mx-1"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 rounded mx-1 ${
            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
          } hover:bg-gray-400 transition-colors duration-200`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 transition-colors duration-200 mx-1"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
