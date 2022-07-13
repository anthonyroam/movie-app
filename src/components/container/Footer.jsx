import React from 'react';

const Footer = () => {
  return (
    <footer className="h-28 w-full p-8 border-t-2 border-gray-400 border-opacity-5 text-cream">
      <p>
        Created by{' '}
        <a
          href="https://www.linkedin.com/in/anthonyroam"
          target="_blank"
          className="underline underline-offset-2"
        >
          anthonyroam
        </a>
      </p>
      <p>
        Film data provided by{' '}
        <a
          href="https://www.themoviedb.org"
          target="_blank"
          className="underline underline-offset-2"
        >
          TMDb.
        </a>
      </p>
    </footer>
  );
};

export { Footer };
