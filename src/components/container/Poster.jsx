import React from 'react';

const Poster = ({ movie, handleClick }) => {
  return (
    <div
      className="min-w-[125px] w-[125px] transition-opacity cursor-pointer hover:opacity-70 hover:scale-[.98] md:min-w-[150px] md:w-[150px] lg:min-w-[200px] lg:w-[200px]"
      onClick={() => handleClick(movie)}
    >
      <img
        src={!!movie && `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export { Poster };
