import React from "react";
import { Row, Col, Container, UncontrolledCarousel } from "reactstrap";
import styled from "styled-components";
import PuppyInfo from "../components/PuppyInfo";


//assets

const Brutus = [
  {
    src: './images/current/Brutus1.jpg',
    altText: 'Brutus',
    caption: '0 lbs, 5.8 oz',
    header: 'Day 1',
    key: '1',
  },
];

const Lyra = [
  {
    src: './images/current/Lyra1.jpg',
    altText: 'Lyra',
    caption: '0 lbs, 5.9 oz',
    header: 'Day 1',
    key: '1',
  }
];

const Gidget = [
  {
    src: './images/current/Gidget1.jpg',
    altText: 'Daphne',
    caption: '0 lbs, 5.8 oz',
    header: 'Day 1',
    key: '1',
  }
];

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
  .carousel{
    padding-top: 5%;
  }
`;


function AvailablePuppies() {

  return (        
    <StyledAvailablePuppies class="mb-3 mx-auto">
      <h1>Current Puppies</h1>
      <hr />
      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Brutus} interval={3000} />
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Brutus"
              status="Available"
              desc = "Small Miniture Apricot Male"
              height = "10 to 12 inches"
              weight = "7 to 8.5 lbs"
              birth= "April 15, 2022"
              ready= "June 10, 2022"
              price = "2000"
              contract = "Strict Neuter/no breeding rights"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Lyra} interval={3000} />
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Lyra"
              status="Available"
              desc = "Small Miniture Apricot/Red Female"
              height = "10 to 12 inches"
              weight = "7 to 8.5 lbs"
              birth= "April 15, 2022"
              ready= "June 10, 2022"
              price = "2000"
              contract = "Strict Spay/no breeding rights"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Gidget} interval={3000} />
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Gidget"
              status="Available"
              desc = "Small Miniture Apricot/Red Female"
              height = "10 to 12 inches"
              weight = "7 to 8.5 lbs"
              birth= "April 15, 2022"
              ready= "June 10, 2022"
              price = "2000"
              contract = "Strict Spay/no breeding rights"
             />
          </Col>
        </Row>      
      </Container>
      <p>**Adult sizes are estimates only and are not guaranteed</p>
    </StyledAvailablePuppies>
  );
};

export default AvailablePuppies;