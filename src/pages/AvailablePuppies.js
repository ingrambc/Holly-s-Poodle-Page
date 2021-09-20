import React from "react";
import { Row, Col, Container } from "reactstrap";
import styled from "styled-components";
import PuppyInfo from "../components/PuppyInfo";
import Crsl from "../components/Crsl";

//assets

const StyledAvailablePuppies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-image: linear-gradient(rgb(255, 209, 168), rgb(255, 99, 99));
  padding:5%;
  
  h1{
    text-decoration: underline;
   }
   .container{
    width: 80%;
    background-color: rgb(250, 213, 165);
    border-radius: 15px;
    border-width: 5px;
    border-style: solid;
    margin-top: 10px;
  }
`;


function AvailablePuppies() {

  return (        
    <StyledAvailablePuppies class="mb-3 mx-auto">
      <h1>PUPPIES</h1>
      <hr />
      <Container>
        <Row>
          <Col md="4">
            <p>this is for Carousel</p>
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Rigby Jasper 2"
              status="Available"
              desc = "Tiny Miniture Appricot Male"
              size = "10-11 inches and 6 to 7 lbs"
              birth= "Sept 28, 2021"
              ready= "Nov 26, 2021"
              price = "$2500 Full ACA"
             />
          </Col>
        </Row>      
      </Container>
      <p>**sizes are estimates only and are not guaranteed</p>
    </StyledAvailablePuppies>
  );
};

export default AvailablePuppies;