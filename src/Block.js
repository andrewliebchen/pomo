import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import Countdown from "./Countdown";

const Root = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.base};
  transition: 1s linear;
  opacity: 0;
`;

const Children = styled.div`
  position: relative;
  z-index: 1;
`;

const Block = props => {
  let opacity = 0;
  if (props.interval === props.index) {
    opacity = 1 - props.count / props.intervals[props.interval];
  }
  if (props.interval > props.index) {
    opacity = 1;
  }

  return (
    <Root {...props}>
      <Background base={props.base} style={{ opacity: opacity }} />
      {props.interval === props.index && <Countdown {...props} />}
    </Root>
  );
};

export default Block;
