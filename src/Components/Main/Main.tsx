import React from 'react'
import { useState , useEffect } from 'react'
import calculateTimer from '../../Helper/CalculateTimer'
import './Main.css'

const Main = () => {

    const [timeInSeconds , setTimeInSeconds] = useState<number>(0);
    const [timerArray , setTimerArray] = useState<Array<number>>([]);

    useEffect(() => {
        let timeArray: Array<number> = calculateTimer(timeInSeconds);
        setTimerArray(timeArray);
    }, [timeInSeconds]);

    return (
        <section className="time-container">
            <p className="timer-text">{timerArray[0]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[1]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[2]}</p>
        </section>
    )
}

export default Main
