import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import { Preview } from '../../components/container/Preview';

const TrendingPreview = () => {
  const { trendingMovies, getTrendingMovies, selectMovie } =
    useContext(AppContext);
  const history = useNavigate();
  const navigate = () => history('/trending-movies');

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <Preview
      title="Trending"
      moviesArray={trendingMovies}
      handleClick={selectMovie}
      navigate={navigate}
    />
  );
};

export { TrendingPreview };
