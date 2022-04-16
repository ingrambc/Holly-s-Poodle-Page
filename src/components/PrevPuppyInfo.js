import React from "react";
import styled from "styled-components";
import { Row, Col, UncontrolledCarousel } from "reactstrap";

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


function PrevPuppyInfo(puppy) {
  return (
    <Row>
        <Col md="4">
          <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={puppy.photos} interval={3000} />
        </Col>
        <Col md="8">
          <StyledCard> 
            <h2> {puppy.name} </h2>
            <h1> Family Adopted: {puppy.family} </h1>
            <h3>Birth Date: {puppy.birth} </h3>
            <h3>Sire: {puppy.sire} </h3>
            <h3>Dam: {puppy.dam}</h3>
          </StyledCard>
        </Col>
    </Row> 
  )
}     


export default PrevPuppyInfo;