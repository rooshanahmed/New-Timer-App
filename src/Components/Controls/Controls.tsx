import React, { useState } from 'react'
import './Controls.css'

type Prop = {
    setTimeInSeconds: Function
}

const Controls = (props:Prop) => {

    const { setTimeInSeconds } = props;
    const [intervalId , setIntervalId] = useState<number>(0)

    return (
        <section className="container-control">
            <button onClick={handlePlayButton}>START</button>
            <button onClick={handleStopButton}>STOP</button>
            <button onClick={handleResetButton}>RESET</button>
        </section>
    )
}

export default Controls
