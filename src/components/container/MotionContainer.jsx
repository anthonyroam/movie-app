import React, { Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionContainer = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { MotionContainer };
