import React from 'react';

import { TertiaryButton } from '../ui/TertiaryButton';
import { Poster } from './Poster';

const Preview = ({ title, moviesArray, handleClick, navigate }) => {
  return (
    <section className="w-full p-8 space-y-4 text-cream">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{title}</h3>
        <TertiaryButton onClick={navigate}>See all</TertiaryButton>
      </div>
      <div className="flex gap-8 overflow-x-scroll">
        {moviesArray.map((movie) => (
          <Poster movie={movie} handleClick={handleClick} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export { Preview };
