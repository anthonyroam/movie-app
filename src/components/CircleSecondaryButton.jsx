import React from "react";

const CircleSecondaryButton = ({ children, onClick }) => {
    return (
        <button 
            className="w-10 h-10 rounded-full bg-dark-blue text-gray-400 text-2xl font-semibold grid place-items-center"
            onClick={onClick}
        >
            { children }
        </button>
    );
};

export { CircleSecondaryButton };