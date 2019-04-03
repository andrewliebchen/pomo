import React from "react";
import styled from "styled-components";
import { Text } from "rebass";
import { format } from "./utils";

const Root = styled(Text)`
  font-feature-settings: "tnum";
  pointer-events: none;
`;

const Countdown = props => (
  <Root color={props.color} fontSize={5} fontWeight={800} alignSelf="center">
    {format(props.children)}
  </Root>
);

export default Countdown;
