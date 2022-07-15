import React from 'react';
import { motion } from 'framer-motion';

import { RoundPrimaryButton } from '../../components/ui/RoundPrimaryButton';
import { RoundSecondaryButton } from '../../components/ui/RoundSecondaryButton';
import { IoClose } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { MdPlayArrow, MdDownload, MdShare } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

const Overview = ({ movie, closeOverview }) => {
  return (
    <motion.div
      className="fixed z-50 right-1/2 translate-x-1/2 bottom-0 w-full h-auto py-4 px-8 space-y-4 rounded-t-lg bg-very-dark-blue lg:w-auto lg:bottom-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-1/2 lg:rounded-lg"
      initial={{ y: 325, x: '50%', opacity: 0 }}
      animate={{ y: 0, x: '50%', opacity: 1 }}
      exit={{ y: 325, x: '50%', opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center h-fit gap-4">
        {!!movie ? (
          <div className="min-w-[150px] w-[150px]  ">
            <img
              src={
                !!movie &&
                `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              }
              alt={movie.title}
              className="rounded-lg shadow-md"
            />
          </div>
        ) : (
          <div className="aspect-[27/41] animate-pulse min-w-[125px] w-[125px] bg-dark-blue md:min-w-[150px] md:w-[150px] lg:min-w-[200px] lg:w-[200px] rounded-lg" />
        )}
        <div className="space-y-2 h-fit">
          <div className="flex items-center justify-between gap-4">
            <h3 className="w-4/6 text-cream font-semibold md:text-xl">
              {movie.title}
            </h3>
            <RoundPrimaryButton onClick={closeOverview}>
              <IoClose />
            </RoundPrimaryButton>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400 md:text-lg">
            <p>{movie.release_date} </p>
            <div className="flex items-center gap-2 h-4 md:h-5 ">
              <p>{movie.vote_average.toFixed(2)} </p>
              <div className="h-full text-yellow-400">
                <FaStar />
              </div>
            </div>
          </div>
          <div className="h-32 overflow-y-scroll text-xs text-cream md:text-md lg:overflow-clip">
            {movie.overview}{' '}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around h-1/5 lg:gap-16 lg:justify-center">
        <RoundPrimaryButton>
          <MdPlayArrow />
        </RoundPrimaryButton>
        <RoundSecondaryButton>
          <MdDownload />
        </RoundSecondaryButton>
        <RoundSecondaryButton>
          <IoMdAdd />
        </RoundSecondaryButton>
        <RoundSecondaryButton>
          <MdShare />
        </RoundSecondaryButton>
      </div>
    </motion.div>
  );
};

export { Overview };
