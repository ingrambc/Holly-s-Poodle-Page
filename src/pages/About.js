import React from "react";
import {Col, Row} from "reactstrap";
import styled from "styled-components";

//assets
import ProfilePic from "../images/Brian.jpg"

const StyledAbout = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-image: linear-gradient(rgb(255, 209, 168), rgb(255, 99, 99));
  padding:5%;
  

  #colunm{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-items: center; 
   }
   
  h2{
    text-decoration: underline;
   }
`;

const About = () => {
  return(
    <StyledAbout>
      <Row>
        <Col md="6" id="colunm">
          <h2>Welcome to Rigby Jasper Poodles</h2>
          <p>We are a home hobby breeder of toy and small miniture poodles.  All of our dogs are loving members of our family.
            We are hoping to share our love of poodles and help you bring one into your family.
          </p>
        </Col>
        <Col md="6" id="colunm">
          <img src={ProfilePic} alt="portrait of Brian" />
        </Col>
      </Row>
    </StyledAbout>
  );
};

export default About;