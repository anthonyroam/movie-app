import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { Footer } from '../../components/container/Footer';
import { MovieOverview } from './MovieOverview';

const Layout = ({ children }) => {
  const { movie } = useContext(AppContext);
  const { isSelected } = movie;

  return (
    <div className="min-h-screen h-full w-full bg-dark-blue font-inter">
      <main>{children}</main>
      <Footer />
      {!!isSelected && <MovieOverview />}
    </div>
  );
};

export { Layout };
