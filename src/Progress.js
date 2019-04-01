import React from "react";
import styled from "styled-components";
import hexOpacity from "hex-opacity";

const Root = styled.div`
  width: 100vw;
  height: 20px;
  position: fixed;
  top: 0;
  background-color: ${props => hexOpacity.create(props.color, 0.1)};
`;

const Fill = styled.div`
  height: inherit;
  background-color: ${props => props.color};
`;

const Progress = props => (
  <Root {...props}>
    <Fill
      style={{
        width: `${((props.length - props.count) / props.length) * 100}vw`
      }}
      {...props}
    />
  </Root>
);

export default Progress;
