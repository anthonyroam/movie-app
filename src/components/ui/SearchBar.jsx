import React from 'react';

import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ handleChange }) => {
  return (
    <div className="relative mb-4 text-gray-500">
      <input
        onChange={handleChange}
        className="w-full h-8 pl-10 py-2"
        placeholder="Search a movie..."
      />
      <div className="absolute top-2 left-4">
        <FaSearch />
      </div>
    </div>
  );
};

export { SearchBar };
