import React, { useContext } from 'react';

import { AppContext } from '../../context/AppContext';
import { PosterSkeleton } from './PosterSkeleton';

const DisplaySkeleton = () => {
  const { error } = useContext(AppContext);

  return (
    <>
      {!error ? (
        <div className="flex gap-4 w-full h-full px-4 md:px-8 lg:px-12 overflow-hidden">
          <PosterSkeleton />
          <PosterSkeleton />
          <PosterSkeleton />
          <PosterSkeleton />
          <PosterSkeleton />
          <PosterSkeleton />
          <PosterSkeleton />
        </div>
      ) : (
        <div className="my-10 text-light-blue text-xl font-semibold">
          {'Ups! something went wrong :( Please Reload'}
        </div>
      )}
    </>
  );
};

export { DisplaySkeleton };
