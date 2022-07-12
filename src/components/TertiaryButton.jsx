import React from "react";

const TertiaryButton = ({ children, handleClick }) => {
    return (
        <button className="text-lg text-light-blue underline underline-offset-4">
            { children }
        </button>
    );
};

export { TertiaryButton };