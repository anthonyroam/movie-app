import React from "react";

const SecondaryButton = ({ children, handleClick }) => {
    return (
        <button className="flex flex-col items-center">
            { children }
        </button>
    );
};

export { SecondaryButton };