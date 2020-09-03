import React from 'react'
import { Button } from '@material-ui/core'

type Prop = {
    setTimeInSeconds: Function
}


const Controls = (props:Prop) => {
    return (
        <section>
            <Button>START</Button>
            <Button>STOP</Button>
            <Button>RESET</Button>
        </section>
    )
}

export default Controls
