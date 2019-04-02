import React from "react";
import styled from "styled-components";
import padStart from "lodash.padstart";
import { Text } from "rebass";

const Root = styled(Text)`
  font-feature-settings: "tnum";
  pointer-events: none;
`;

const Countdown = props => {
  const minutes = Math.floor(props.count / 60);
  const seconds = Math.round((props.count / 60 - minutes) * 60);
  const formatted = `${padStart(minutes, 2, "0")}:${padStart(seconds, 2, "0")}`;

  return (
    <Root color={props.color} fontSize={5} fontWeight={800} alignSelf="center">
      {formatted}
    </Root>
  );
};

export default Countdown;
