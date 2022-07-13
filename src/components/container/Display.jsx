import React from 'react';

import { Poster } from './Poster';

const Display = ({ moviesArray, handleClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full h-full px-2 pb-8">
      {!!moviesArray &&
        moviesArray.map((movie) => (
          <Poster movie={movie} handleClick={handleClick} key={movie.id} />
        ))}
    </div>
  );
};

export { Display };
