import React from 'react'

type Prop = {
    setTimeInSeconds: Function
}


const Controls = (props:Prop) => {
    return (
        <section>
            <button>START</button>
            <button>STOP</button>
            <button>RESET</button>
        </section>
    )
}

export default Controls
