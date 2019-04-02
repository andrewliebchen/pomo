import Countdown from "./Countdown";
import hello from "hello-color";
import Progress from "./Progress";
import randomFlatColors from "random-flat-colors";
import React, { useState } from "react";
import useInterval from "@use-hooks/interval";
import Wrapper from "./Wrapper";
import doneSound from "./done.mp3";
import styled from "styled-components";
import { Flex, Text, Card, Box } from "rebass";

const audio = new Audio(doneSound);
const options = {
  length: 1200,
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
    <Flex width={1} style={{ height: "100vh" }} p={2}>
      <Flex
        width={1 / 2}
        justifyContent="center"
        alignItems="stretch"
        style={{ border: "2px solid" }}
        m={2}
      >
        <Text alignSelf="center">10:00</Text>
      </Flex>
      <Flex width={1 / 2} flexDirection="column">
        <Flex
          justifyContent="center"
          alignItems="stretch"
          style={{ height: "50vh", border: "2px solid" }}
          m={2}
        >
          <Text alignSelf="center">5:00</Text>
        </Flex>
        <Flex width={1} style={{ height: "50vh" }}>
          <Flex
            width={1 / 2}
            justifyContent="center"
            alignItems="stretch"
            style={{ border: "2px solid" }}
            m={2}
          >
            <Text alignSelf="center">2:30</Text>
          </Flex>
          <Flex width={1 / 2} flexDirection="column">
            <Flex
              justifyContent="center"
              alignItems="center"
              style={{ height: "25vh", border: "2px solid" }}
              m={2}
            >
              <Text>1:15</Text>
            </Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
              style={{ height: "25vh", border: "2px solid" }}
              m={2}
            >
              <Text>1:15</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
