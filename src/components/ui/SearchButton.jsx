import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FaSearch />
    </button>
  );
};

export { SearchButton };
