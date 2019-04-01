import React, { useState } from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import useInterval from "@use-hooks/interval";
import Cursor from "./Cursor";

const timeout = 300;

const Root = styled(Flex)`
  cursor: pointer;
  height: 100vh;
`;

const Wrapper = props => {
  const [position, setPosition] = useState(false);

  useInterval(() => {
    if (position) {
      setPosition(false);
    }
  }, timeout);

  return (
    <Root
      width="100vw"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg={props.base}
      onClick={event => {
        setPosition({ x: event.clientX, y: event.clientY });
        props.onClick();
      }}
    >
      {props.children}
      {position && (
        <Cursor position={position} color={props.color} timeout={timeout} />
      )}
    </Root>
  );
};

export default Wrapper;
