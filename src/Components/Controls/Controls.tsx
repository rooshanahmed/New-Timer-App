import React, { useState } from "react";
import { Button, makeStyles, ButtonGroup } from "@material-ui/core";


type Prop = {
  setTimeInSeconds: Function;
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3px 8px",
    fontSize: "1.3rem",
    cursor: "pointer",
  },
}))

const Controls = (props: Prop) => {

  const classes = useStyles();

  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);
    setIntervalId(interval);
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
  };

  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  return (
    <section className={classes.container}>
      <ButtonGroup size="large" variant="contained" className={classes.container}>
        <Button onClick={handlePlayButton}>START</Button>
        <Button onClick={handleStopButton}>STOP</Button>
        <Button onClick={handleResetButton}>RESET</Button>
      </ButtonGroup>
    </section>
  );
};

export default Controls;
