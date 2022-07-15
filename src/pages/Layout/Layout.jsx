import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

import { Footer } from '../../components/container/Footer';
import { Overview } from './Overview';

const Layout = ({ children }) => {
  const { movie, setMovie } = useContext(AppContext);
  const { isSelected, selectedMovie } = movie;

  const closeOverview = () => {
    setMovie({
      ...movie,
      isSelected: false,
    });
  };

  return (
    <div className="min-h-screen h-full w-full bg-dark-blue font-inter  overflow-x-hidden">
      <main>{children}</main>
      <Footer />
      <AnimatePresence>
        {!!isSelected && (
          <Overview movie={selectedMovie} closeOverview={closeOverview} />
        )}
      </AnimatePresence>
    </div>
  );
};

export { Layout };
