import React from 'react';

const BannerSkeleton = () => {
  return (
    <section className="relative grid place-items-center h-[600px] w-full lg:h-[700px] ">
      <div className="grid place-items-center h-24 w-24 rounded-full bg-gradient-to-b from-dark-blue to-very-dark-blue animate-spin">
        <div className="h-20 w-20 rounded-full bg-dark-blue" />
      </div>
    </section>
  );
};

export { BannerSkeleton };
