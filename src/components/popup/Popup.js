import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Popup.css";

const Popup = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    useImperativeHandle(ref, () => {
        return {
            toggleShow: toggleShow,
        };
    });

    return (
        <div className={`popup ${show ? "show" : ""}`}>
            <div className="popup-content" onClick={toggleShow}>
                <span className="popup-close" onClick={toggleShow}>
                    <svg
                        id="Capa_1"
                        enable-background="new 0 0 386.667 386.667"
                        height="512"
                        viewBox="0 0 386.667 386.667"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z" />
                    </svg>
                </span>
                <p className="quote">
                    The Pomodoro Technique is created by Francesco Cirillo for a
                    more productive way to work and study. The technique uses a
                    timer to break down work into intervals, traditionally 25
                    minutes in length, separated by short breaks. Each interval
                    is known as a pomodoro, from the Italian word for 'tomato',
                    after the tomato-shaped kitchen timer that Cirillo used as a
                    university student.
                </p>
                <p className="author">- Wikipedia</p>
            </div>
        </div>
    );
});

export default Popup;
