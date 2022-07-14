import React, { useContext } from 'react';

import { Overview } from '../../components/container/Overview';
import { AppContext } from '../../context/AppContext';

const MovieOverview = () => {
  const { movie, setMovie } = useContext(AppContext);
  const { selectedMovie } = movie;

  const closeOverview = () => {
    setMovie({
      ...movie,
      isSelected: false,
    });
  };

  return <Overview movie={selectedMovie} closeOverview={closeOverview} />;
};

export { MovieOverview };
