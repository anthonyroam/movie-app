import React, { useState } from "react";
import { api } from "../utils/apiInstance";
import { randomNumber } from "../utils/randomNumber";

const useData = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState("");
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState([]);

    const getTrendingMovies = async () => {
        const { data } = await api("trending/movie/day");
        const results = await data.results
        // console.log(results)
        setTrendingMovies(results);
    };

    const getRandomMovie = async () => {
        const { data } = await api("trending/movie/day") 
        const results = await data.results
        setRandomMovie(results[randomNumber()]);
    };

    const getCategories = async () => {
        const { data } = await api("genre/movie/list");
        // console.log(data);
        const { genres } = data;
        setCategories(genres);
    }

    const getCategory = async (id) => {
        const { data } = await api(`discover/movie`, {
            params: {
                "with_genres": id
            }
        });
        const { results } = data;
        // console.log(results);
        setCategory(results);
    }
    const [ movie, setMovie ] = useState({
        selectedMovie: {},
        isSelected: false,
    });

    const selectMovie = (selectedMovie) => {
        setMovie({
            selectedMovie,
            isSelected: true,
        })
    }

    return {
        getTrendingMovies,
        trendingMovies,
        getRandomMovie,
        randomMovie,
        getCategories,
        categories,
        category,
        getCategory,
        selectMovie,
        movie,
        setMovie,
    }
}

export { useData };