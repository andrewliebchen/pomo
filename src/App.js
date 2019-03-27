import React, { useState } from "react";
import useInterval from "@use-hooks/interval";
import { Flex, Text, Button, Box } from "rebass";
import randomFlatColors from "random-flat-colors";
import hello from "hello-color";
import styled from "styled-components";
import Title from "react-simple-title";

const pomoLength = 100;
const color = hello(randomFlatColors());

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

  return (
    <Flex
      width="100vw"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg={color.base}
      style={{
        height: "100vh"
      }}
    >
      <Title>{count}</Title>
      <Text color={color.color} fontSize={6} fontWeight="bold">
        {count}
      </Text>
      <Button
        onClick={() => setActive(!active)}
        color={color.base}
        bg={color.color}
      >
        {active ? "Stop" : "Go"}
      </Button>
    </Flex>
  );
};

export default App;
