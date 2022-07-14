import React from 'react';

const MobilePoster = ({ randomMovie }) => {
  return (
    <img
      src={
        !!randomMovie
          ? `https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`
          : null
      }
      alt={randomMovie.title}
      className="md:hidden absolute h-[540px] w-full object-cover object-center md:h-[600px] "
    />
  );
};

export { MobilePoster };
