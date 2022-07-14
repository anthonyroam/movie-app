import React from 'react';

const DisplayTitle = ({ children }) => {
  return (
    <div className="pt-14 px-8 pb-4 md:pt-16 lg:px-16">
      <h3 className="text-cream text-2xl font-semibold md:text-4xl">
        {children}
      </h3>
    </div>
  );
};

export { DisplayTitle };
