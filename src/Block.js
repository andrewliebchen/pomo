import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import Countdown from "./Countdown";

const Root = styled(Flex)`
  position: relative;
`;

const Background = styled.div`
  background-color: ${props => props.base};
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 1s linear;
`;

const Block = props => {
  const isActive = props.interval === props.index;

  let opacity = 0;
  if (isActive) {
    opacity = 1 - props.count / props.intervals[props.interval];
  }
  if (props.interval > props.index) {
    opacity = 1;
  }

  return (
    <Root justifyContent="center" alignItems="center" {...props}>
      <Background base={props.base} style={{ opacity: opacity }} />
      {isActive && <Countdown {...props} />}
    </Root>
  );
};

export default Block;
