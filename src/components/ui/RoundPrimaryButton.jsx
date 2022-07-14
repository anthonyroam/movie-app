import React from 'react';

const RoundPrimaryButton = ({ children, onClick }) => {
  return (
    <button
      className="w-10 h-10 rounded-full bg-light-blue text-cream text-2xl font-semibold grid place-items-center md:w-14 md:h-14 md:text-4xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { RoundPrimaryButton };
