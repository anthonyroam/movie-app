import React from 'react';

import { PageContainer } from '../../components/container/PageContainer';
import { TrendingPreview } from './TrendingPreview';
import { Banner } from './Banner';
import { Navbar } from '../../components/container/Navbar';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Home = () => {
  const [containerRef, opacity] = useIntersectionObserver();

  return (
    <PageContainer>
      <Navbar opacity={opacity}>
        <img
          className="h-10 w-full md:h-14"
          src="https://res.cloudinary.com/ds8efp758/image/upload/v1657407227/logo-movie-xd_ego4tv.png"
          alt="Logo.png"
        />
      </Navbar>
      <Banner containerRef={containerRef}></Banner>
      <TrendingPreview />
    </PageContainer>
  );
};

export { Home };
