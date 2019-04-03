import hello from "hello-color";
import randomFlatColors from "random-flat-colors";
import React, { useState } from "react";
import useInterval from "@use-hooks/interval";
import doneSound from "./done.mp3";
import { Flex } from "rebass";
import Block from "./Block";
import Wrapper from "./Wrapper";

const audio = new Audio(doneSound);

const options = {
  intervals: [10, 6, 4, 2, 2],
  ...hello(randomFlatColors())
};

const App = props => {
  let [active, setActive] = useState(true);
  let [interval, setInterval] = useState(0);
  let [count, setCount] = useState(options.intervals[0]);

  // TODO: Make active work...
  useInterval(() => {
    if (active && count > 0) {
      setCount(count - 1);
    } else {
      // audio.play();
      setInterval(interval + 1);
      setCount(options.intervals[interval + 1]);
    }
  }, 1000);

  return (
    <Wrapper color={options.color} onClick={() => setActive(!active)}>
      <Flex width={1}>
        <Block
          count={count}
          index={0}
          interval={interval}
          width={1 / 2}
          {...options}
        />
        <Flex width={1 / 2} flexDirection="column">
          <Block
            count={count}
            index={1}
            interval={interval}
            style={{ height: "50vh" }}
            {...options}
          />
          <Flex width={1} style={{ height: "50vh" }}>
            <Block
              count={count}
              index={2}
              interval={interval}
              width={1 / 2}
              {...options}
            />
            <Flex width={1 / 2} flexDirection="column">
              <Block
                count={count}
                index={3}
                interval={interval}
                style={{ height: "25vh" }}
                {...options}
              />
              <Block
                count={count}
                index={4}
                interval={interval}
                style={{ height: "25vh" }}
                {...options}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default App;
