import React from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100vw;
  height: 20px;
  position: fixed;
  top: 0;
`;

const Fill = styled.div`
  height: inherit;
  background-color: ${props => props.color};
  transition: 1s linear;
`;

const Progress = props => (
  <Root>
    <Fill
      style={{
        width: `${((props.length - props.count) / props.length) * 100}vw`
      }}
      {...props}
    />
  </Root>
);

export default Progress;
