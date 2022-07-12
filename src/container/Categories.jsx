import React, { useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";

import { MainContainer } from "./MainContainer";
import { Header } from "../components/Header";
import { IoChevronBack } from "react-icons/io5";
import { AppContext } from "../context/AppContext";

const Categories = () => {
    const { id, name} = useParams();
    const { category, getCategory, selectMovie } = useContext(AppContext)
    
    useEffect(() => {
        getCategory(id);
    }, [id])  

    const handleClick = (movie) => {
        selectMovie(movie)
    }

    return (
        <MainContainer>
            <Header opacity={true}>
                <IoChevronBack />
            </Header> 
            <div className="w-full h-full pt-14 px-8 pb-8 space-y-4">
                <h3 className="text-cream text-2xl font-semibold">{name}</h3>
                <div className="h-full grid grid-cols-2 gap-2">
                    {!!category && category.map(movie => (
                        <div 
                        className='w-[150px] '
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        >
                            <img 
                            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                            alt={movie.title} 
                            className="rounded-lg"
                            />
                        </div>
                    ))}  
                </div>
            </div>
        </MainContainer>
    );
};

export { Categories };