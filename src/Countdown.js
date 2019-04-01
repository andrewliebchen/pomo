import React from "react";
import styled from "styled-components";
import Title from "react-simple-title";
import padStart from "lodash.padstart";
import { Text } from "rebass";

const Numbers = styled(Text)`
  font-feature-settings: "tnum";
  pointer-events: none;
`;

const Countdown = props => {
  const minutes = Math.floor(props.count / 60);
  const seconds = Math.round((props.count / 60 - minutes) * 60);
  const formatted = `${padStart(minutes, 2, "0")}:${padStart(seconds, 2, "0")}`;

  return (
    <div>
      <Title>{formatted}</Title>
      <Numbers color={props.color} fontSize={100} fontWeight={800}>
        {formatted}
      </Numbers>
    </div>
  );
};

export default Countdown;
