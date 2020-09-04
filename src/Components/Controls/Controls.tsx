import React, { useState } from 'react'
import './Controls.css'

type Prop = {
    setTimeInSeconds: Function
}

const Controls = (props:Prop) => {

    const { setTimeInSeconds } = props;
    const [intervalId , setIntervalId] = useState<number>(0)

    const handlePlayButton = () => {
        let interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1)
        }, 1000)
        setIntervalId(interval)
    }

    const handleStopButton = () => {
        clearInterval(intervalId)
    }

    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return (
        <section className="container-control">
            <button onClick={handlePlayButton}>START</button>
            <button onClick={handleStopButton}>STOP</button>
            <button onClick={handleResetButton}>RESET</button>
        </section>
    )
}

export default Controls
