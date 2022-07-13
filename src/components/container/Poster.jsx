import React from 'react';

const Poster = ({ movie, handleClick }) => {
  return (
    <div
      className="min-w-[150px] w-[150px] "
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
