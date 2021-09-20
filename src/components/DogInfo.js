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

function DogInfo( {name, desc, size, birth, reg}) {
  return (
    <StyledCard> 
      <h2> {name} </h2>
      <h4> {desc} </h4>
      <h3>Size: {size} </h3>
      <h3>Registered: {reg} </h3>
    </StyledCard> 
  )
}     

export default DogInfo;