import React, { useContext } from "react";
import { Row, Col, Container, UncontrolledCarousel } from "reactstrap";
import styled from "styled-components";
import PrevPuppyInfo from "../components/PrevPuppyInfo";


const Lovey = [
  {
    src: './images/previous/Lovey1.jpg',
    altText: 'Lovey',
    key: '1',
  },  {
    src: './images/previous/Lovey2.jpg',
    altText: 'Lovey',
    key: '2',
  },  {
    src: './images/previous/Lovey3.jpg',
    altText: 'Lovey',
    key: '3',
  },
];
const Ellie = [
  {
    src: './images/previous/Ellie1.jpg',
    altText: 'Ellie',  
    key: '1',
  }, {
    src: './images/previous/Ellie2.jpg',
    altText: 'Ellie',    
    key: '2',
  },  {
    src: './images/previous/Ellie3.jpg',
    altText: 'Ellie',  
    key: '3',
  },
]
const Frito = [
  {
    src: './images/previous/Frito1.jpg',
    altText: 'Frito',
    key: '1',
  },  {
    src: './images/previous/Frito2.jpg',
    altText: 'Frito',
    key: '2',
  },  {
    src: './images/previous/Frito3.jpg',
    altText: 'Frito',
    key: '3',
  },
];
const Nutmeg = [
  {
    src: './images/previous/Nutmeg1.jpg',
    altText: 'Nutmeg',
    key: '1',
  },  {
    src: './images/previous/Nutmeg2.jpg',
    altText: 'Nutmeg',
    key: '2',
  },  {
    src: './images/previous/Nutmeg3.jpg',
    altText: 'Nutmeg',
    key: '3',
  },
];

const StyledPrevPuppies = styled.div`
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


function PreviousPuppies() {

  return (        
    <StyledPrevPuppies class="mb-3 mx-auto">
      <h1>Previous Puppies</h1>
      <hr />

      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Ellie} interval={3000} />
          </Col>
          <Col md="8">
            <PrevPuppyInfo
              name="Ellie"
              family ="Arlet"
              dest = "San Francisco, CA"
              sire = "Rigby"
              dam = "Snickers"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Lovey} interval={3000} />
          </Col>
          <Col md="8">
            <PrevPuppyInfo
              name="Lovey"
              family="Claudia"
              dest = "Hartford, CT"
              sire = "Rigby"
              dam = "Snickers"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Lovey} interval={3000} />
          </Col>
          <Col md="8">
            <PrevPuppyInfo
              name="Frito"
              family="Vanderwall's"
              dest = "Aurora, CO"
              sire = "Rigby"
              dam = "Snickers"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Lovey} interval={3000} />
          </Col>
          <Col md="8">
            <PrevPuppyInfo
              name="Nutmeg"
              family="Heather"
              dest = "Aurora, CO"
              sire = "Rigby"
              dam = "Snickers"
             />
          </Col>
        </Row>      
      </Container>
    </StyledPrevPuppies>
  );
};

export default PreviousPuppies;