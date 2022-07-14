import React, { useContext, useEffect } from 'react';

import { Display } from '../../components/container/Display';
import { DisplayTitle } from '../../components/ui/DisplayTitle';
import { AppContext } from '../../context/AppContext';
import { PageContainer } from '../../components/container/PageContainer';
import { Navbar } from '../../components/container/Navbar';
import { IoChevronBack } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionContainer } from '../../components/container/MotionContainer';

const TrendingDisplay = () => {
  const { trendingMovies, getTrendingMovies, selectMovie } =
    useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    getTrendingMovies();
  }, []);

  return (
    <MotionContainer>
      <PageContainer>
        <Navbar opacity={true}>
          <IoChevronBack />
        </Navbar>
        <DisplayTitle>Trending</DisplayTitle>
        <Display moviesArray={trendingMovies} handleClick={selectMovie} />
      </PageContainer>
    </MotionContainer>
  );
};

export { TrendingDisplay };
