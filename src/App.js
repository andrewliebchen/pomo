import React, { useState } from "react";
import useInterval from "@use-hooks/interval";
import { Flex, Text } from "rebass";
import randomFlatColors from "random-flat-colors";
import hello from "hello-color";
import styled from "styled-components";
import Title from "react-simple-title";
import padStart from "lodash.padstart";

const pomoLength = 10;
const color = hello(randomFlatColors());

const Countdown = styled(Text)`
  font-feature-settings: "tnum";
`;

const App = props => {
  let [active, setActive] = useState(false);
  let [count, setCount] = useState(pomoLength);

  useInterval(() => {
    if (active && count > 0) {
      setCount(count - 1);
    } else {
      setActive(false);
      setCount(pomoLength);
    }
  }, 1000);

  const minutes = Math.floor(count / 60);
  const seconds = Math.round((count / 60 - minutes) * 60);
  const formattedCountdown = `${padStart(minutes, 2, "0")}:${padStart(
    seconds,
    2,
    "0"
  )}`;

  return (
    <Flex
      width="100vw"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg={color.base}
      onClick={() => setActive(!active)}
      style={{
        height: "100vh"
      }}
    >
      <Title>{formattedCountdown}</Title>
      <Countdown color={color.color} fontSize={6} fontWeight="bold">
        {formattedCountdown}
      </Countdown>
      <div style={{ width: "100vw", height: 20, position: "fixed", top: 0 }}>
        <div
          style={{
            width: `${((pomoLength - count) / pomoLength) * 100}vw`,
            height: "inherit",
            backgroundColor: color.color,
            transition: "0.9s ease-in-out"
          }}
        />
      </div>
    </Flex>
  );
};

export default App;
