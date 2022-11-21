import React from "react";
import { Row, Col, Container, UncontrolledCarousel } from "reactstrap";
import styled from "styled-components";
import PuppyInfo from "../components/PuppyInfo";


//assets

const Charlie = [
  {
    src: './images/current/Charlie1.jpg',
    altText: 'Charlie',
    caption: '0 lbs, 6.0 oz',
    header: 'Day 1',
    key: '4',
  },  {
    src: './images/current/Charlie23d.jpg',
    altText: 'Charlie',
    caption: '1 lbs, 8.3 oz',
    header: 'Day 23',
    key: '3',
  },  {
    src: './images/current/Charlie5w1.jpg',
    altText: 'Charlie',
    caption: '2 lbs, 1 oz',
    header: 'Day 35',
    key: '2',
  },  {
    src: './images/current/Charlie5w2.jpg',
    altText: 'Charlie',
    caption: '2 lbs, 1 oz',
    header: 'Day 35',
    key: '1',
  },
];
const Susie = [
  {
    src: './images/current/Susie1.jpg',
    altText: 'Susie',
    caption: '0 lbs, 5.5 oz',
    header: 'Day 1',
    key: '4',
  },  {
    src: './images/current/Susie23d.jpg',
    altText: 'Susie',
    caption: '1 lbs, 4.6 oz',
    header: 'Day 23',
    key: '3',
  },  {
    src: './images/current/Susie5w1.jpg',
    altText: 'Susie',
    caption: '1 lbs, 8 oz',
    header: 'Day 35',
    key: '2',
  },  {
    src: './images/current/Susie5w2.jpg',
    altText: 'Susie',
    caption: '1 lbs, 8 oz',
    header: 'Day 35',
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
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Charlie} interval={3000} />
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Charlie"
              status="Available"
              desc = "Mini Apricot Male"
              height = "11 to 12.5 inches"
              weight = "8.5 to 10 lbs"
              birth= "Oct 16, 2022"
              ready= "Dec 18, 2022"
              price = "$2000"
              contract = "Strict Nueter/no breeding rights"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Susie} interval={3000} />
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Susie"
              status="Reserved for David"
              desc = "Toy Apricot Female"
              height = "9.5 to 11 inches"
              weight = "6 to 8 lbs"
              birth= "Oct 16, 2022"
              ready= "Dec 18, 2022"
              price = "Reserved"
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