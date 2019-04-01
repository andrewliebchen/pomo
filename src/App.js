import Countdown from "./Countdown";
import hello from "hello-color";
import Progress from "./Progress";
import randomFlatColors from "random-flat-colors";
import React, { useState } from "react";
import useInterval from "@use-hooks/interval";
import Wrapper from "./Wrapper";
import doneSound from "./done.mp3";

const audio = new Audio(doneSound);
const options = {
  length: 10,
  ...hello(randomFlatColors())
};

const App = props => {
  let [active, setActive] = useState(false);
  let [count, setCount] = useState(options.length);

  useInterval(() => {
    if (active && count > 0) {
      setCount(count - 1);
    } else {
      active && audio.play();
      setActive(false);
      setCount(options.length);
    }
  }, 1000);

  return (
    <Wrapper onClick={() => setActive(!active)} {...options}>
      <Countdown count={count} {...options} />
      <Progress count={count} {...options} />
    </Wrapper>
  );
};

export default App;
