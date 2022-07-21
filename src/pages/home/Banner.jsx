import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../context/AppContext';
import { IoInformationCircleOutline as Information } from 'react-icons/io5';
import { IoMdAdd as Add } from 'react-icons/io';
import { PrimaryButton } from '../../components/ui/PrimaryButton';
import { SecondaryButton } from '../../components/ui/SecondaryButton';
import { MobilePoster } from '../../components/ui/MobilePoster';
import { DesktopPoster } from '../../components/ui/DesktopPoster';
import { BannerSkeleton } from '../../components/container/BannerSkeleton';

const Banner = ({ containerRef }) => {
  const { getRandomMovie, randomMovie, selectMovie } = useContext(AppContext);

  useEffect(() => {
    getRandomMovie();
  }, []);

  return (
    <section
      className="relative h-[600px] w-full lg:h-[700px] "
      ref={containerRef}
      id="banner"
    >
      {!!randomMovie ? (
        <>
          <div className="absolute z-10 h-[550px] w-full bg-gradient-to-b from-transparent to-dark-blue md:h-[600px] lg:h-[700px]"></div>
          <MobilePoster randomMovie={randomMovie} />
          <DesktopPoster randomMovie={randomMovie} />
          <div className="absolute z-20 bottom-0 flex items-center justify-around h-[50px] w-full text-cream font-semibold md:justify-center md:gap-28">
            <SecondaryButton>
              <span className="text-2xl lg:text-4xl">
                <Add />
              </span>
              Add to list
            </SecondaryButton>
            <PrimaryButton>Play</PrimaryButton>
            <SecondaryButton onClick={() => selectMovie(randomMovie)}>
              <span className="text-2xl lg:text-4xl">
                <Information />
              </span>
              <p>Information</p>
            </SecondaryButton>
          </div>
        </>
      ) : (
        <BannerSkeleton />
      )}
    </section>
  );
};

export { Banner };
