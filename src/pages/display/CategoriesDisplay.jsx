import React, {
  useEffect,
  useContext,
  useState,
  useRef,
  useCallback,
} from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import { Display } from '../../components/container/Display';
import { PageContainer } from '../../components/container/PageContainer';
import { Navbar } from '../../components/container/Navbar';
import { DisplayTitle } from '../../components/ui/DisplayTitle';
import { IoChevronBack } from 'react-icons/io5';
import { MotionContainer } from '../../components/container/MotionContainer';

const CategoriesDisplay = () => {
  const { id, name } = useParams();
  const { category, getCategory, selectMovie, page, setPage, totalPages } =
    useContext(AppContext);

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
    getCategory(id, page);
  }, [id, page]);

  return (
    <PageContainer>
      <Navbar opacity={true}>
        <IoChevronBack />
      </Navbar>
      <MotionContainer>
        <DisplayTitle>{name}</DisplayTitle>
        <Display
          lastMovieRef={lastOne}
          moviesArray={category}
          handleClick={selectMovie}
        />
      </MotionContainer>
    </PageContainer>
  );
};

export { CategoriesDisplay };
