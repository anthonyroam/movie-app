import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../context/AppContext";
import { TertiaryButton } from './TertiaryButton';

const TrendingPreview = () => {
  const { trendingMovies, getTrendingMovies } = useContext(AppContext);
  const history = useNavigate();

  useEffect(() => {
    getTrendingMovies();
  }, [])

  // const navigateTrendingMovies = () => history("/trending-movies");

  return (
    <section className="w-full p-8 space-y-4 text-cream">
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold'>Trending</h3>
        <TertiaryButton 
          // onClick={navigateTrendingMovies}
        >
          See all
        </TertiaryButton>
      </div>
      <div className='flex gap-8 overflow-x-scroll'>
        {trendingMovies.map(movie => (
          <div 
            className='min-w-fit'
            key={movie.id}
          >
            <img 
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
              alt={movie.title} 
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );  
};

export { TrendingPreview };
