import React from 'react';

import { PosterSkeleton } from './PosterSkeleton';

const DisplaySkeleton = () => {
  return (
    <div className="flex gap-4 w-full h-full px-4 md:px-8 lg:px-12 overflow-hidden">
      <PosterSkeleton />
      <PosterSkeleton />
      <PosterSkeleton />
      <PosterSkeleton />
      <PosterSkeleton />
      <PosterSkeleton />
      <PosterSkeleton />
    </div>
  );
};

export { DisplaySkeleton };
