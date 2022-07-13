import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { Footer } from './Footer';
import { Overview } from './Overview';

const Layout = ({ children }) => {
  const { movie } = useContext(AppContext);
  const { isSelected } = movie;

  return (
    <div className="min-h-screen h-full w-full bg-dark-blue font-inter">
      <main>{children}</main>
      <Footer />
      {!!isSelected && <Overview />}
    </div>
  );
};

export { Layout };
