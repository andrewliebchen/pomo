import hello from "hello-color";
import randomFlatColors from "random-flat-colors";
import React, { useState } from "react";
import useInterval from "@use-hooks/interval";
import doneSound from "./done.mp3";
import { Flex } from "rebass";
import Block from "./Block";

const audio = new Audio(doneSound);
const options = {
  intervals: [10, 6, 4, 2, 2],
  ...hello(randomFlatColors())
};

const App = props => {
  let [active, setActive] = useState(true);
  let [interval, setInterval] = useState(0);
  let [count, setCount] = useState(options.intervals[0]);

  useInterval(() => {
    if (active && count > 0) {
      setCount(count - 1);
    } else {
      // audio.play();
      setInterval(interval + 1);
      setCount(options.intervals[interval + 1]);
    }
  }, 1000);

  console.log(count / options.intervals[interval]);

  return (
    <Flex width={1}>
      <Block
        width={1 / 2}
        index={0}
        count={count}
        interval={interval}
        {...options}
      />
      <Flex width={1 / 2} flexDirection="column">
        <Block
          index={1}
          count={count}
          interval={interval}
          {...options}
          style={{ height: "50vh" }}
        />
        <Flex width={1} style={{ height: "50vh" }}>
          <Block
            index={2}
            count={count}
            interval={interval}
            width={1 / 2}
            {...options}
          />
          <Flex width={1 / 2} flexDirection="column">
            <Block
              index={3}
              count={count}
              interval={interval}
              {...options}
              style={{ height: "25vh" }}
            />
            <Block
              index={4}
              count={count}
              interval={interval}
              {...options}
              style={{ height: "25vh" }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
