import React from 'react';

import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ handleChange }) => {
  return (
    <div className="relative mb-4 text-gray-500 lg:text-xl">
      <input
        onChange={handleChange}
        className="w-full h-8 pl-10 py-2 lg:h-14 lg:pl-12"
        placeholder="Search a movie..."
      />
      <div className="absolute top-2 left-4 lg:top-5">
        <FaSearch />
      </div>
    </div>
  );
};

export { SearchBar };
