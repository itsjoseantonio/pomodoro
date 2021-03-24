import React from "react";

const ButtonsGroup = ({ buttons }) => {
    const renderedItems = buttons.map((item, index) => {
        return <button>{item}</button>;
    });

    return renderedItems;
};

export default ButtonsGroup;
