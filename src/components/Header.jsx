import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchBar } from './SearchBar';
import { FaListUl } from "react-icons/fa"
import { Modal } from './Modal';


const Header = ({ children, opacity }) => {
  const [ openModal, setOpenModal ] = useState(false);
  const history = useNavigate();

  const handleClick = () => setOpenModal(true); 
  const goBack = () => history("/");

  return (
    <nav className={`fixed z-50 flex items-center justify-between h-12 w-full px-8 text-cream bg-dark-blue transition-all ${!opacity ? "bg-opacity-0" : `bg-opacity-80`} `}>
      <div 
        className='text-lg'
        onClick={goBack}
      >
        { children }
      </div>
      <div className='flex gap-8'>
        <SearchBar />
        <FaListUl onClick={handleClick} />
      </div>
      {!!openModal && <Modal setOpenModal={setOpenModal} />}
    </nav>
  );
};

export { Header };
