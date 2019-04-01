import React, { useState } from "react";
import useInterval from "@use-hooks/interval";
import { Flex } from "rebass";
import randomFlatColors from "random-flat-colors";
import hello from "hello-color";
import Countdown from "./Countdown";
import Progress from "./Progress";

const pomoLength = 10;
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
      onClick={() => setActive(!active)}
      style={{
        height: "100vh"
      }}
    >
      <Countdown count={count} color={color.color} />
      <Progress count={count} color={color.color} length={pomoLength} />
    </Flex>
  );
};

export default App;
