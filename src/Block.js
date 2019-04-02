import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import hexOpacity from "hex-opacity";

const Root = styled(Flex)`
  border: 2px solid ${props => props.base};
  justify-content: center;
  align-items: center;
`;

const Block = props => (
  <Root
    m={2}
    style={{
      transition: "1s linear",
      backgroundColor:
        props.interval === props.index
          ? hexOpacity.create(
              props.base,
              1 - props.count / props.intervals[props.interval]
            )
          : props.interval < props.index
          ? "transparent"
          : props.base
    }}
    {...props}
  >
    {props.children}
  </Root>
);

export default Block;
