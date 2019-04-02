import Countdown from "./Countdown";
import hello from "hello-color";
import Progress from "./Progress";
import randomFlatColors from "random-flat-colors";
import React, { useState } from "react";
import useInterval from "@use-hooks/interval";
import Wrapper from "./Wrapper";
import doneSound from "./done.mp3";
import styled from "styled-components";
import { Flex } from "rebass";
import Block from "./Block";

const audio = new Audio(doneSound);
const options = {
  intervals: [6, 3, 2, 1, 1],
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
    <Flex width={1} style={{ height: "100vh" }} p={2}>
      <Block
        width={1 / 2}
        index={0}
        count={count}
        interval={interval}
        {...options}
      >
        <Countdown count={interval === 0 ? count : 0} {...options} />
      </Block>
      <Flex width={1 / 2} flexDirection="column">
        <Block
          index={1}
          count={count}
          interval={interval}
          {...options}
          style={{ height: "50vh" }}
        >
          <Countdown
            count={
              interval === 1 ? count : interval > 1 ? 0 : options.intervals[1]
            }
            {...options}
          />
        </Block>
        <Flex width={1} style={{ height: "50vh" }}>
          <Block
            index={2}
            count={count}
            interval={interval}
            width={1 / 2}
            {...options}
          >
            <Countdown
              count={
                interval === 2 ? count : interval > 2 ? 0 : options.intervals[2]
              }
              {...options}
            />
          </Block>
          <Flex width={1 / 2} flexDirection="column">
            <Block
              index={3}
              count={count}
              interval={interval}
              {...options}
              style={{ height: "25vh" }}
            >
              <Countdown
                count={
                  interval === 3
                    ? count
                    : interval > 3
                    ? 0
                    : options.intervals[3]
                }
                {...options}
              />
            </Block>
            <Block
              index={4}
              count={count}
              interval={interval}
              {...options}
              style={{ height: "25vh" }}
            >
              <Countdown
                count={
                  interval === 4
                    ? count
                    : interval > 4
                    ? 0
                    : options.intervals[4]
                }
                {...options}
              />
            </Block>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
