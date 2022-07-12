import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { AppProvider } from '../context/AppContext';
import { Home } from "../container/Home";
import { TrendingMovies } from '../container/TrendingMovies';
import { Categories } from "../container/Categories";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/trending-movies" element={<TrendingMovies />} />
            <Route path="/categories/:id/:name" element={<Categories />} />
          </Routes>  
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
};

export { App };
