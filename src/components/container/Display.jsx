import React from 'react';
import { DisplaySkeleton } from './DisplaySkeleton';

import { Poster } from './Poster';

const Display = ({ moviesArray, handleClick, lastMovieRef }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full h-full px-2 pb-4">
      {!!moviesArray.length ? (
        moviesArray.map((movie, index) =>
          moviesArray.length !== index + 1 ? (
            <Poster movie={movie} handleClick={handleClick} key={movie.id} />
          ) : (
            <Poster
              lastMovieRef={lastMovieRef}
              movie={movie}
              handleClick={handleClick}
              key={movie.id}
            />
          )
        )
      ) : (
        <DisplaySkeleton />
      )}
    </div>
  );
};

export { Display };
