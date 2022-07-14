import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../pages/Layout/Layout';
import { AppProvider } from '../context/AppContext';
import { Home } from '../pages/home/Home';
import { TrendingDisplay } from '../pages/display/TrendingDisplay';
import { CategoriesDisplay } from '../pages/display/CategoriesDisplay';
import { Search } from '../pages/Search/Search';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending-movies" element={<TrendingDisplay />} />
            <Route
              path="/categories/:id/:name"
              element={<CategoriesDisplay />}
            />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
};

export { App };
