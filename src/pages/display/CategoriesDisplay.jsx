import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import { Display } from '../../components/container/Display';
import { PageContainer } from '../../components/container/PageContainer';
import { Navbar } from '../../components/container/Navbar';
import { DisplayTitle } from '../../components/ui/DisplayTitle';
import { IoChevronBack } from 'react-icons/io5';

const CategoriesDisplay = () => {
  const { id, name } = useParams();
  const { category, getCategory, selectMovie } = useContext(AppContext);

  useEffect(() => {
    getCategory(id);
  }, [id]);

  return (
    <PageContainer>
      <Navbar opacity={true}>
        <IoChevronBack />
      </Navbar>
      <DisplayTitle>{name}</DisplayTitle>
      <Display moviesArray={category} handleClick={selectMovie} />
    </PageContainer>
  );
};

export { CategoriesDisplay };
