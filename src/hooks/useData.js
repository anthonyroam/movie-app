import { useState } from 'react';
import api from '../utils/apiInstance';
import randomNumber from '../utils/randomNumber';

const useData = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [movie, setMovie] = useState({
    selectedMovie: {},
    isSelected: false,
  });
  const [searchValue, setSearchValue] = useState([]);

  const getTrendingMovies = async () => {
    const { data } = await api('trending/movie/day');
    const { results } = await data;

    setTrendingMovies(results);
  };

  const getRandomMovie = async () => {
    const { data } = await api('trending/movie/day');
    const { results } = await data;

    setRandomMovie(results[randomNumber()]);
  };

  const getCategories = async () => {
    const { data } = await api('genre/movie/list');
    const { genres } = data;

    setCategories(genres);
  };

  const getCategory = async (id) => {
    const { data } = await api(`discover/movie`, {
      params: {
        with_genres: id,
      },
    });
    const { results } = data;

    setCategory(results);
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
    // console.log(results)
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
  };
};

export default useData;
