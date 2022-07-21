import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const BannerSkeleton = () => {
  const { error } = useContext(AppContext);

  return (
    <div className="relative grid place-items-center w-full h-full">
      {!error ? (
        <div className="grid place-items-center h-24 w-24 rounded-full bg-gradient-to-b from-dark-blue to-very-dark-blue animate-spin">
          <div className="h-20 w-20 rounded-full bg-dark-blue" />
        </div>
      ) : (
        <div className="text-light-blue text-center text-xl font-semibold">
          {'Ups! something went wrong:( Please reload'}
        </div>
      )}
    </div>
  );
};

export { BannerSkeleton };
