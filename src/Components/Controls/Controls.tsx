import React, { useState } from "react";
import { Button, makeStyles, ButtonGroup } from "@material-ui/core";


type Prop = {
  setTimeInSeconds: Function;
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3px 8px",
    margin: "3px",
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
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" className={classes.container}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </section>
  );
};

export default Controls;
