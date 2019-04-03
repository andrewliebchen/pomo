import React, { useState } from "react";
import styled from "styled-components";
import useInterval from "@use-hooks/interval";
import Cursor from "./Cursor";

const timeout = 300;

const Root = styled.div`
  cursor: pointer;
  height: 100vh;
  width: 100vw;
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
