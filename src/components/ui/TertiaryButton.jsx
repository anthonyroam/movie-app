import React from 'react';

const TertiaryButton = ({ children, onClick }) => {
  return (
    <button
      className="text-lg text-light-blue underline underline-offset-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { TertiaryButton };
