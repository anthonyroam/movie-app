import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import { Display } from '../../components/container/Display';
import { PageContainer } from '../../components/container/PageContainer';
import { Navbar } from '../../components/container/Navbar';
import { DisplayTitle } from '../../components/ui/DisplayTitle';
import { IoChevronBack } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';

const CategoriesDisplay = () => {
  const { id, name } = useParams();
  const { category, getCategory, selectMovie } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategory(id);
  }, [id]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3 }}
      >
        <PageContainer>
          <Navbar opacity={true}>
            <IoChevronBack />
          </Navbar>
          <DisplayTitle>{name}</DisplayTitle>
          <Display moviesArray={category} handleClick={selectMovie} />
        </PageContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export { CategoriesDisplay };
