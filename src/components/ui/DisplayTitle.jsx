import React from 'react';

const DisplayTitle = ({ children }) => {
  return (
    <div className="pt-14 px-8 pb-4">
      <h3 className="text-cream text-2xl font-semibold">{children}</h3>
    </div>
  );
};

export { DisplayTitle };
