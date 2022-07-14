import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ children }) => {
  return (
    <section className="min-h-[calc(100vh-112px)] h-full w-full">
      {children}
    </section>
  );
};

export { PageContainer };
