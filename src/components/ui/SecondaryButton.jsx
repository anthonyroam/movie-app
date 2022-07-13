import React from 'react';

const SecondaryButton = ({ children, onClick }) => {
  return (
    <button className="flex flex-col items-center" onClick={onClick}>
      {children}
    </button>
  );
};

export { SecondaryButton };
