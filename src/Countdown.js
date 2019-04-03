import React from "react";
import styled from "styled-components";
import { Text } from "rebass";
import { format } from "./utils";

const Root = styled(Text)`
  font-feature-settings: "tnum";
  pointer-events: none;
  position: relative;
  z-index: 1;
`;

const Countdown = props => (
  <Root color={props.base} fontSize={5} fontWeight={800} alignSelf="center">
    {format(props.count)}
  </Root>
);

export default Countdown;
