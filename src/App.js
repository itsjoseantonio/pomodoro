import React, { useState, useRef } from "react";
import ButtonsGroup from './components/ButtonsGroup';
import "./App.css";
import Popup from "./components/popup/Popup";

function padTime(time) {
    return time.toString().padStart(2, "0");
}

const options = [
    {
        name: 'Pomodoro',
        time: 25
    },
    {
        name: 'Long Break',
        time: 10
    },
    {
        name: 'Short Break',
        time: 5
    }
];

export default function App() {
    const [title, setTitle] = useState("Let's go!");
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const ref = useRef(null)

    function getValue(){
        const buttons = document.querySelectorAll(".options button");
        let valueTime;
        buttons.forEach((e,i) => {
            if(e.classList.contains("active")){
                valueTime = e.dataset.time
            }
        })
        return valueTime
    }

    function handleTime(value){
        setTimeLeft(value * 60);
        setIsRunning(false);
        setTitle("Let's go!");
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    function handlePopup(){
        ref.current.toggleShow();
    }
	
	function startTimer(){
        const valueTime = getValue();
        console.log(valueTime)
        if(intervalRef.current !== null) return
        if(parseInt(valueTime) !== 25) setTitle("Taking rest...")
        else setTitle(`You're doing great!`);
        setIsRunning(true);
		intervalRef.current = setInterval(() => {
			setTimeLeft(timeLeft => {
				if(timeLeft >= 1) return timeLeft - 1;
				return 0;
			});
        }, 1000)
    }
    
    function stopTimer() {
        if(intervalRef.current === null) return
        setTitle("Keep it up!")
        setIsRunning(false);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
    
    function resetTimer() {
        const valueTime = getValue();
        clearInterval(intervalRef.current);
        setTitle("Let's go!");
        setTimeLeft(valueTime * 60)
        setIsRunning(false);
        intervalRef.current = null;
    }

    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(timeLeft - minutes * 60);

    return (
        <div className="app">
            <span className="info" onClick={handlePopup}>?</span>
            <div className="options">
                <ButtonsGroup options={options} onClick={handleTime}/>
            </div>
            <h2>{title}</h2>

            <div className="timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className="buttons">
                {!isRunning && <button onClick={startTimer}>Start</button>}
                {isRunning && <button onClick={stopTimer}>Stop</button>}
                <button onClick={resetTimer}>Reset</button>
            </div>
            <Popup ref={ref}/>
        </div>
    );
}
