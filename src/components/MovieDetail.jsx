import React, { useContext, useEffect, useRef } from "react";
import { Transition } from '@headlessui/react'

import { AppContext } from "../context/AppContext";
import { CirclePrimaryButton } from "./CirclePrimaryButton";
import { CircleSecondaryButton } from "./CircleSecondaryButton";
import { IoClose } from "react-icons/io5"
import { IoMdAdd } from "react-icons/io"
import { MdPlayArrow, MdDownload, MdShare } from "react-icons/md";

const MovieDetail = () => {
    const { movie, setMovie } = useContext(AppContext);
    const { selectedMovie, isSelected } = movie
    
    const handleClick = () => {
        setMovie({
            ...movie,
            isSelected: false,
        })
    }

    return (
            <div 
                className={`fixed z-50 bottom-0 w-full h-auto py-8 px-4 space-y-2 rounded-t-lg bg-very-dark-blue`}
            >
                <div className="flex items-center justify-center h-fit gap-4 ">
                    <div className="w-32">
                        <img 
                            src={`https://image.tmdb.org/t/p/w200/${selectedMovie.poster_path}`} 
                            alt={selectedMovie.title} 
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="space-y-2 h-fit w-3/5">
                        <div className="flex items-center justift-beetwen gap-4">
                            <h3 className="w-4/5 text-cream font-semibold">{selectedMovie.title}</h3>
                            <CirclePrimaryButton
                                onClick={handleClick}
                            >
                                <IoClose />
                            </CirclePrimaryButton>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <p>{selectedMovie.release_date} </p>
                            <p>{selectedMovie.vote_average} </p>
                        </div>
                        <div className="h-32 overflow-y-scroll text-xs text-cream">{selectedMovie.overview} </div>
                    </div>
                </div>
                <div className="flex items-center justify-around h-1/5">
                    <CirclePrimaryButton>
                        <MdPlayArrow />
                    </CirclePrimaryButton>
                    <CircleSecondaryButton>
                        <MdDownload />
                    </CircleSecondaryButton>
                    <CircleSecondaryButton>
                        <IoMdAdd />
                    </CircleSecondaryButton>
                    <CircleSecondaryButton>
                        <MdShare />
                    </CircleSecondaryButton>
                </div>
            </div>
    );
};

export { MovieDetail };