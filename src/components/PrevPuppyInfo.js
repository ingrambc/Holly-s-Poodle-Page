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


function PrevPuppyInfo({name, family, dest, sire, dam}) {
  return (
    <StyledCard> 
      <h2> {name} </h2>
      <h3> Family Adopted: {family} </h3>
      <h3> Destination: {dest} </h3>
      <h3>Sire: {sire} </h3>
      <h3>Dam: {dam}</h3>
    </StyledCard>
  )
}     


export default PrevPuppyInfo;