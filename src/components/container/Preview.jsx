import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { TertiaryButton } from '../ui/TertiaryButton';
import { Poster } from './Poster';
import sliderSettings from '../../utils/sliderSettings';
import { PreviewSkeleton } from './PreviewSkeleton';

const Preview = ({ title, moviesArray, handleClick, navigate }) => {
  return (
    <section className="relative w-full p-8 space-y-4 text-cream lg:w-5/6 lg:mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold lg:text-3xl">{title}</h3>
        <TertiaryButton onClick={navigate}>See all</TertiaryButton>
      </div>
      {!!moviesArray.length ? (
        <Slider {...sliderSettings}>
          {moviesArray.map((movie) => (
            <Poster movie={movie} handleClick={handleClick} key={movie.id} />
          ))}
        </Slider>
      ) : (
        <PreviewSkeleton />
      )}
    </section>
  );
};

export { Preview };
