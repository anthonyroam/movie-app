import React from "react";

import { MainContainer } from "./MainContainer";
import { TrendingPreview } from "../components/TrendingPreview";
import { Banner } from "../components/Banner";
import { Header } from '../components/Header';
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Home = () => {
    const [ containerRef, opacity ] = useIntersectionObserver();
    
    return (
        <MainContainer>
            <Header opacity={opacity}>
                <img 
                    className='h-10 w-full' 
                    src="https://res.cloudinary.com/ds8efp758/image/upload/v1657407227/logo-movie-xd_ego4tv.png" 
                    alt="Logo.png" 
                />
            </Header>
            <Banner containerRef={containerRef}></Banner>
            <TrendingPreview />
        </MainContainer>
    );
};

export { Home };