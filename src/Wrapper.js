import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";

const Root = styled(Flex)`
  cursor: pointer;
  height: 100vh;
`;

const Wrapper = props => (
  <Root
    width="100vw"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    {...props}
  >
    {props.children}
  </Root>
);

export default Wrapper;
