import React, {
  useContext,
  useRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { PageContainer } from '../../components/container/PageContainer';
import { IoChevronBack } from 'react-icons/io5';
import { AppContext } from '../../context/AppContext';
import { Display } from '../../components/container/Display';
import { SearchBar } from '../../components/ui/SearchBar';
import { useNavigate } from 'react-router-dom';
import { MotionContainer } from '../../components/container/MotionContainer';

const Search = () => {
  const {
    searchMovie,
    searchValue,
    selectMovie,
    setSearchValue,
    page,
    setPage,
    totalPages,
  } = useContext(AppContext);
  const history = useNavigate();
  const navigate = () => {
    history('/');
    setSearchValue([]);
  };

  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setPage(1);
    if (value.length >= 3) return setQuery(value);
    else if (value.length < 3) {
      setSearchValue([]);
    }
  };

  const observer = useRef();
  const lastOne = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && page < totalPages.current) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      },
      { threshold: 0.9 }
    );
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    if (page === 1) window.scrollTo(0, 0);
    console.log(query);
    searchMovie(query, page);
  }, [query, page]);

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
        <Display
          lastMovieRef={lastOne}
          moviesArray={searchValue}
          handleClick={selectMovie}
        />
      </PageContainer>
    </MotionContainer>
  );
};

export { Search };
