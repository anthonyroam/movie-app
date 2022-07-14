import React, { useContext, useEffect } from 'react';

import { Display } from '../../components/container/Display';
import { DisplayTitle } from '../../components/ui/DisplayTitle';
import { AppContext } from '../../context/AppContext';
import { PageContainer } from '../../components/container/PageContainer';
import { Navbar } from '../../components/container/Navbar';
import { IoChevronBack } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const TrendingDisplay = () => {
  const { trendingMovies, getTrendingMovies, selectMovie } =
    useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    getTrendingMovies();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3 }}
      >
        <PageContainer>
          <Navbar opacity={true}>
            <IoChevronBack />
          </Navbar>
          <DisplayTitle>Trending</DisplayTitle>
          <Display moviesArray={trendingMovies} handleClick={selectMovie} />
        </PageContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export { TrendingDisplay };
