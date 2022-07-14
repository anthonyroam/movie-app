import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ children }) => {
  return (
    <motion.section
      className="min-h-[calc(100vh-112px)] h-full w-full"
      // initial={{ x: "100%"}}
      // animate={{ x: 0}}
      // exit={{ x: "100%"}}
    >
      {children}
    </motion.section>
  );
};

export { PageContainer };
