import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchButton } from '../ui/SearchButton';
import { FaListUl } from 'react-icons/fa';
import { Modal } from '../../pages/categories/Modal';

const Navbar = ({ children, opacity }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const showCategories = () => setOpenModal(true);
  const goBack = () => navigate('/');
  const SearchMovies = () => navigate('/search');

  return (
    <nav
      className={`fixed z-50 flex items-center justify-between h-12 w-full px-6 text-cream bg-dark-blue transition-all md:h-16 lg:px-14 ${
        !opacity ? 'bg-opacity-0' : `bg-opacity-80`
      } `}
    >
      <div className="text-lg md:text-4xl" onClick={goBack}>
        {children}
      </div>
      <div className="flex gap-8 md:text-2xl">
        <SearchButton onClick={SearchMovies} />
        <FaListUl onClick={showCategories} />
      </div>
      {!!openModal && <Modal setOpenModal={setOpenModal} />}
    </nav>
  );
};

export { Navbar };
