import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { PosterSkeleton } from './PosterSkeleton';

const Poster = ({ movie, handleClick }) => {
  const [containerRef, isVisible] = useIntersectionObserver({
    threshold: 0.25,
  });

  return (
    <div
      className="min-w-[125px] w-[125px] min-h-[175px] transition-opacity cursor-pointer hover:opacity-70 hover:scale-[.98] md:min-w-[150px] md:w-[150px] lg:min-w-[200px] lg:w-[200px]"
      onClick={() => handleClick(movie)}
      ref={containerRef}
    >
      {!!isVisible ? (
        <img
          src={
            !!movie && `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
          }
          alt={movie.title}
          className="rounded-lg shadow-md h-full w-full"
        />
      ) : (
        <PosterSkeleton />
      )}
    </div>
  );
};

export { Poster };
