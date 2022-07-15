import React from 'react';
import { DisplaySkeleton } from './DisplaySkeleton';

import { Poster } from './Poster';

const Display = ({ moviesArray, handleClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full h-full px-2 pb-8">
      {!!moviesArray.length ? (
        moviesArray.map((movie) => (
          <Poster movie={movie} handleClick={handleClick} key={movie.id} />
        ))
      ) : (
        <DisplaySkeleton />
      )}
    </div>
  );
};

export { Display };
