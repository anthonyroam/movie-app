import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../context/AppContext';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { PrimaryButton } from '../../components/ui/PrimaryButton';
import { SecondaryButton } from '../../components/ui/SecondaryButton';

const Banner = ({ containerRef }) => {
  const { getRandomMovie, randomMovie, selectMovie } = useContext(AppContext);

  useEffect(() => {
    getRandomMovie();
  }, []);

  return (
    <section className="relative h-[600px] w-full" ref={containerRef}>
      {/* Banner wrapper */}
      <div className="absolute z-10 h-[550px] w-full bg-gradient-to-b from-transparent to-dark-blue"></div>
      <img
        src={
          !!randomMovie
            ? `https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`
            : null
        }
        alt={randomMovie.title}
        className="absolute h-[540px] w-full object-cover"
      />
      <div className="absolute z-20 bottom-0 flex items-center justify-around h-[50px] w-full text-cream font-semibold">
        <SecondaryButton>
          <span className="text-2xl">
            <IoMdAdd />
          </span>
          Add to list
        </SecondaryButton>
        <PrimaryButton>Play</PrimaryButton>
        <SecondaryButton onClick={() => selectMovie(randomMovie)}>
          <span className="text-2xl">
            <IoInformationCircleOutline />
          </span>
          <p>Information</p>
        </SecondaryButton>
      </div>
    </section>
  );
};

export { Banner };
