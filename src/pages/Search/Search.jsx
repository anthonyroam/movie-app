import React, { useContext } from 'react';

import { PageContainer } from '../../components/container/PageContainer';
import { IoChevronBack } from 'react-icons/io5';
import { AppContext } from '../../context/AppContext';
import { Display } from '../../components/container/Display';
import { SearchBar } from '../../components/ui/SearchBar';
import { useNavigate } from 'react-router-dom';
import { MotionContainer } from '../../components/container/MotionContainer';

const Search = () => {
  const { searchMovie, searchValue, selectMovie, setSearchValue } =
    useContext(AppContext);
  const history = useNavigate();
  const navigate = () => {
    history('/');
    setSearchValue([]);
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.length >= 3) return searchMovie(value);
    else {
      setSearchValue([]);
    }
  };

  return (
    <MotionContainer>
      <PageContainer>
        <div
          className="flex items-center w-full h-12 px-8 text-2xl text-cream"
          onClick={navigate}
        >
          <IoChevronBack />
        </div>
        <SearchBar handleChange={handleChange} />
        <Display moviesArray={searchValue} handleClick={selectMovie} />
      </PageContainer>
    </MotionContainer>
  );
};

export { Search };
