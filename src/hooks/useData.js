import axios from 'axios';
import { useState, useRef } from 'react';
import api from '../utils/apiInstance';
import randomNumber from '../utils/randomNumber';

const useData = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState({
    selectedMovie: {},
    isSelected: false,
  });
  const [page, setPage] = useState(1);
  const totalPages = useRef();

  const getTrendingMovies = async () => {
    try {
      const { data } = await api('trending/movie/day');
      const { results } = await data;

      setTrendingMovies(results);
    } catch {
      setError(true);
    }
  };

  const getRandomMovie = async () => {
    try {
      const { data } = await api('trending/movie/day');
      const { results } = await data;
      setRandomMovie(results[randomNumber()]);
    } catch {
      setError(true);
    }
  };

  const getCategories = async () => {
    const { data } = await api('genre/movie/list');
    const { genres } = data;

    setCategories(genres);
  };

  const getCategory = async (id, page) => {
    try {
      const { data } = await api(`discover/movie`, {
        params: {
          with_genres: id,
          page,
        },
      });
      const { results, total_pages } = data;

      if (page === 1) {
        setCategory(results);
        totalPages.current = total_pages;
      } else {
        setCategory((prev) => [...prev, ...results]);
      }
    } catch {
      setError(true);
    }
  };

  const selectMovie = (selectedMovie) => {
    setMovie({
      selectedMovie,
      isSelected: true,
    });
  };

  const controller = new AbortController();
  const searchMovie = async (query, page) => {
    try {
      const { data } = await api('search/movie', {
        params: {
          query,
          page,
        },
        signal: controller.signal,
      });
      const { results, total_pages } = data;

      if (page === 1) {
        setSearchValue(results);
        totalPages.current = total_pages;
      } else {
        setSearchValue((prev) => [...prev, ...results]);
      }
      // console.log(page)
      // console.log(totalPages.current)
      controller.abort();
    } catch (error) {
      if (axios.isCancel(error)) return;
    }
  };

  return {
    getTrendingMovies,
    trendingMovies,
    getRandomMovie,
    randomMovie,
    getCategories,
    categories,
    getCategory,
    category,
    selectMovie,
    movie,
    setMovie,
    searchMovie,
    searchValue,
    setSearchValue,
    error,
    page,
    setPage,
    totalPages,
  };
};

export default useData;
