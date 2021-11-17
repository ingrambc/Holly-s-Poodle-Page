import React from "react";
import {Col, Container, Row} from "reactstrap";
import styled from "styled-components";

//assets
import RigbyArt from "../images/RigbyArt.jpg"
import FacebookIcon from "../images/facebook.png";

const StyledAbout = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-image: linear-gradient(rgb(255, 209, 168), rgb(255, 99, 99));
  padding:5%;
  

  #center{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-items: center; 
   }
   
  h2{
    text-decoration: underline;
   }

  .container{
    width: 100%;
    background-color: rgb(250, 213, 165);
    border-radius: 15px;
    border-width: 5px;
    border-style: solid;
    margin-top: 10px;
  }

  #headline{
    margin: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-items: center; 
    
  }

  #headlineText{
    justify-content: center;
    background-color: rgb(255, 255, 102);
    color: rgb(255, 51, 51);
    border-radius: 15px;
    border-width: 5px;
    border-style: solid;
    margin-top: 10px;
    font-size: 40px;
    text-size-adjust: 90%;
  }
`;

const About = () => {
  return(
    <StyledAbout>
      <Row>
        <Col md="6" id="center">
          <h2>Welcome to Rigby Jasper Poodles</h2>
          <p>We are a home hobby breeder of toy and small miniture poodles.  We currently have three dogs and all 
            are loving members of our family.  We love poodles and select our dogs for their temperment and breed standard
            qualities.  We want everyone to experience the loyalty and love of a poodle.  We are hoping to share our 
            love of poodles and help you bring one into your family.
          </p>
        </Col>
        <Col md="6" id="center">
          <img src={RigbyArt} alt="Artistic Rigby Jasper" />
        </Col>
      </Row>
      <Row>
        <hr/>
        <hr/>
      </Row>

      <Container>
        <Row id="headline">
          <a id="headlineText">   We Have Puppies Available!   </a>
        </Row>
        <Row><hr/><hr/></Row>
        <Row>
          <Col md="6">
            <Row><h2 id="center">How to get a puppy</h2></Row>
            <Row><h4>1: Pick your puppy</h4></Row>
            <Row><h4>2: Email for puppy application</h4></Row>
            <Row><h4>3: Facetime with puppy</h4></Row>
            <Row><h4>2: Pay non-refundable deposit, 10% of price</h4></Row>
            <Row><h4>5: Arrange for puppy to come home and final payment</h4></Row>
          </Col>
          <Col md="6" id="center">
            <Row><h2 id="center">Check us out on Facebook</h2></Row>
            <Row>
              <a href="https://www.facebook.com/RigbyJasperPoodles" rel="noreferrer" target="_blank"><img src={FacebookIcon} alt="email" /></a>
            </Row>
          </Col>
        </Row>

      </Container>
    </StyledAbout>
  );
};

export default About;