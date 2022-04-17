import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  a:link, a:visited{
    color: rgb(187, 243, 187);
  }
  a:hover, a:active{
    color: rgb(187, 200, 187);
  }
  h2{
    color:rgb(99, 4, 53);
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-weight: bolder;
    font-size: 40px;
  }
  h3{
    color:rgb(99, 4, 53);
  }
`;


function PuppyInfo( {name, status, desc, height, weight, birth, ready, price, contract }) {
  return (
    <StyledCard> 
      <h2> {name} </h2>
      <h1> {status} </h1>
      <h3>Description: {desc} </h3>
      <h3>Estimated Adult Height: {height}** </h3>
      <h3>Estimated Adult Weight: {weight}** </h3>
      <h3>Birth Date: {birth} </h3>
      <h3>Ready Date: {ready} </h3>
      <h2>Price: {price}</h2>
      <h3>{contract}</h3>
    </StyledCard> 
  )
}     

export default PuppyInfo;