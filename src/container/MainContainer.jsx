import React from "react";

const MainContainer = ({ children }) => {
    return (
        <section className="min-h-[calc(100vh-112px)] h-full w-full">
            { children }
        </section>
    );
};

export { MainContainer };