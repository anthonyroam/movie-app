import React, { useContext } from 'react';

import { PageContainer } from '../../components/container/PageContainer';
import { IoChevronBack } from 'react-icons/io5';
import { AppContext } from '../../context/AppContext';
import { Display } from '../../components/container/Display';
import { SearchBar } from '../../components/ui/SearchBar';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const { searchMovie, searchValue, selectMovie } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.length > 3) {
      searchMovie(value);
      console.log(value);
    }
  };

  return (
    <PageContainer>
      <div
        className="flex items-center w-full h-12 px-8 text-2xl text-cream"
        onClick={() => navigate('/')}
      >
        <IoChevronBack />
      </div>
      <SearchBar handleChange={handleChange} />
      <Display moviesArray={searchValue} handleClick={selectMovie} />
    </PageContainer>
  );
};

export { Search };
