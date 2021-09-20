import React from "react";
import styled from "styled-components";

const main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to bottom right, rgb(255, 209, 168), rgb(255, 99, 99));
`;

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;