import React from 'react';

const DesktopPoster = ({ randomMovie }) => {
  return (
    <img
      src={
        !!randomMovie
          ? `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`
          : null
      }
      alt={randomMovie.title}
      className="hidden md:block absolute h-[540px] w-full object-cover object-center md:h-[600px] lg:h-[700px]"
    />
  );
};

export { DesktopPoster };
