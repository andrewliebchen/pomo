import React from "react";
import styled, { keyframes } from "styled-components";

const size = 40;

const scale = keyframes`
  from {
    opacity: 0.2;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(20);
  }
`;

const Root = styled.div`
  animation: ${scale} ${props => props.timeout}ms ease-in;
  position: fixed;
  top: ${props => props.position.y}px;
  left: ${props => props.position.x}px;
  height: ${size}px;
  width: ${size}px;
  border-radius: ${size}px;
  background-color: ${props => props.color};
  margin: -${size / 2}px 0 0 -${size / 2}px;
`;

const Cursor = props => <Root {...props} />;

export default Cursor;
