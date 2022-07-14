import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import { IoClose } from 'react-icons/io5';
import { RoundPrimaryButton } from '../../components/ui/RoundPrimaryButton';

function Modal({ setOpenModal }) {
  const { categories, getCategories } = useContext(AppContext);

  useEffect(() => {
    getCategories();
  }, []);

  const closeModal = () => setOpenModal(false);

  return ReactDOM.createPortal(
    <div className="fixed z-50 top-0 h-screen w-full flex flex-col items-center pt-10 pb-24 overflow-y-scroll bg-gray-900 bg-opacity-95 text-cream">
      <h3 className="py-2 text-2xl font-bold md:text-5xl">Categories</h3>
      <Link
        to="/my-list"
        className="py-2 transition-colors hover:text-gray-400 md:text-2xl"
      >
        My list
      </Link>
      {categories.map((categorie) => (
        <div
          className="w-full h-auto text-center py-2 transition-colors hover:text-gray-400 md:text-2xl"
          key={categorie.id}
        >
          <Link
            to={`/categories/${categorie.id}/${categorie.name}`}
            onClick={closeModal}
          >
            {categorie.name}
          </Link>
        </div>
      ))}
      <div className="fixed bottom-10">
        <RoundPrimaryButton onClick={closeModal}>
          <IoClose />
        </RoundPrimaryButton>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
