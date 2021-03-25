import React, { useState } from "react";

const ButtonsGroup = ({ onClick, options }) => {
    const [actived, setActived] = useState(0);
    const renderedItems = options.map((item, index) => {
        return (
            <button
                key={index}
                name={item.name}
                data-time={item.time}
                className={index === actived ? "active" : ""}
                onClick={(event) => {
                    onClick(
                        event.target.attributes.getNamedItem("data-time").value
                    );
                    setActived(index);
                }}
            >
                {item.name}
            </button>
        );
    });

    return renderedItems;
};

export default ButtonsGroup;
