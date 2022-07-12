import React from "react";

const PrimaryButton = ({ children, handleClick }) => {
    return (
        <button className="px-8 py-4 rounded-lg bg-light-blue border-2 border-light-blue hover:bg-transparent hover: hover:text-light-blue">
            { children }
        </button>
    );
};

export { PrimaryButton };