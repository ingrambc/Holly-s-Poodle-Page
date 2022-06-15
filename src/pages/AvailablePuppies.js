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
    key: '4',
  },  {
    src: './images/current/Brutus17d.jpg',
    altText: 'Brutus',
    caption: '0 lbs, 15.5 oz',
    header: 'Day 17',
    key: '3',
  },  {
    src: './images/current/Brutus4wr.jpg',
    altText: 'Brutus',
    caption: '1 lbs, 8 oz',
    header: 'Day 30',
    key: '2',
  },  {
    src: './images/current/Brutus4wr2.jpg',
    altText: 'Brutus',
    caption: '1 lbs, 8 oz',
    header: 'Day 30',
    key: '1',
  },
];

const Lyra = [
  {
    src: './images/current/Lyra1.jpg',
    altText: 'Lyra',
    caption: '0 lbs, 5.9 oz',
    header: 'Day 1',
    key: '4',
  },  {
    src: './images/current/Lyra17d.jpg',
    altText: 'Lyra',
    caption: '0 lbs, 15.5 oz',
    header: 'Day 17',
    key: '3',
  },  {
    src: './images/current/Lyra4wr.jpg',
    altText: 'Lyra',
    caption: '1 lbs, 9 oz',
    header: 'Day 30',
    key: '2',
  },  {
    src: './images/current/Lyra4wr2.jpg',
    altText: 'Lyra',
    caption: '0 lbs, 15.5 oz',
    header: 'Day 17',
    key: '1',
  },
];

const Gidget = [
  {
    src: './images/current/Gidget1.jpg',
    altText: 'Gidget',
    caption: '0 lbs, 5.8 oz',
    header: 'Day 1',
    key: '4',
  },  {
    src: './images/current/Gidget17d.jpg',
    altText: 'Gidget',
    caption: '1 lbs, 0 oz',
    header: 'Day 17',
    key: '3',
  },  {
    src: './images/current/Gidget4wr.jpg',
    altText: 'Gidget',
    caption: '1 lbs, 9 oz',
    header: 'Day 30',
    key: '2',
  },  {
    src: './images/current/Gidget4wr2.jpg',
    altText: 'Gidget',
    caption: '1 lbs, 9 oz',
    header: 'Day 30',
    key: '1',
  },
];

const Riley = [
  {
    src: './images/current/Riley1d.jpg',
    altText: 'Riley',
    caption: '0 lbs, 5.5 oz',
    header: 'Day 1',
    key: '3',  
  },  {
    src: './images/current/Riley2w1.jpg',
    altText: 'Riley',
    caption: '1 lbs, 1 oz',
    header: 'Day 17',
    key: '2',  
  },  {
    src: './images/current/Riley2w2.jpg',
    altText: 'Riley',
    caption: '1 lbs, 1 oz',
    header: 'Day 17',
    key: '1',  
  },
]

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
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Riley} interval={3000} />
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Gidget"
              status="Reserved for Cynthia"
              desc = "Toy Apricot Female"
              height = "9 to 10.5 inches"
              weight = "6.5 to 7.5 lbs"
              birth= "April 30, 2022"
              ready= "June 24, 2022"
              price = "Reserved"
              contract = "Strict Spay/no breeding rights"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Brutus} interval={3000} />
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Brutus"
              status="Reserved for Paige"
              desc = "Small Miniture Apricot Male"
              height = "10 to 12 inches"
              weight = "7 to 8.5 lbs"
              birth= "April 15, 2022"
              ready= "June 10, 2022"
              price = "Reserved"
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
              name="Ruby"
              status="Reserved for Mary"
              desc = "Small Miniture Apricot/Red Female"
              height = "10 to 12 inches"
              weight = "7 to 8.5 lbs"
              birth= "April 15, 2022"
              ready= "June 10, 2022"
              price = "Reserved"
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
              name="Nutmeg"
              status="Reserved for Heather"
              desc = "Small Miniture Apricot Female"
              height = "10 to 12 inches"
              weight = "7 to 8.5 lbs"
              birth= "April 15, 2022"
              ready= "June 10, 2022"
              price = "RESERVED"
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