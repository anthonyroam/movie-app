import { useState } from 'react';
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

  const getCategory = async (id) => {
    try {
      const { data } = await api(`discover/movie`, {
        params: {
          with_genres: id,
        },
      });
      const { results } = data;

      setCategory(results);
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

  const searchMovie = async (query) => {
    const { data } = await api('search/movie', {
      params: {
        query,
      },
    });
    const { results } = data;

    setSearchValue(results);
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
  };
};

export default useData;
