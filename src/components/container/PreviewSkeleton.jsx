import React from 'react';
import { PosterSkeleton } from './PosterSkeleton';

const PreviewSkeleton = () => {
  return (
    <div className="h-full w-full flex gap-6 overflow-hidden">
      <PosterSkeleton />
      <PosterSkeleton />
      <PosterSkeleton />
      <PosterSkeleton />
      <PosterSkeleton />
      <PosterSkeleton />
    </div>
  );
};

export { PreviewSkeleton };
