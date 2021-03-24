import React, { useState, useRef } from "react";
import ButtonsGroup from './components/ButtonsGroup';
import "./App.css";

function padTime(time) {
    return time.toString().padStart(2, "0");
}

const buttons = ["Pomodoro", "Long Break", "Short Break"];

export default function App() {
    const [title, setTitle] = useState("Let the countdown begin!!!");
    const [timeLeft, setTimeLeft] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
    // const [active, setActive] = useState(true);
    const intervalRef = useRef(null);
	
	function startTimer(){
        if(intervalRef.current !== null) return
        setTitle(`You're doing great!`);
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
        clearInterval(intervalRef.current);
        setTitle("Ready to go another round?");
        setTimeLeft(25 * 60)
        intervalRef.current = null;
        setIsRunning(false);
    }

    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(timeLeft - minutes * 60);

    return (
        <div className="app">
            <div className="options">
                <ButtonsGroup buttons={buttons}/>
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
        </div>
    );
}
