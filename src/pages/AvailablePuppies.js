import React from "react";
import { Row, Col, Container, UncontrolledCarousel } from "reactstrap";
import styled from "styled-components";
import PuppyInfo from "../components/PuppyInfo";


//assets

const Millie = [
  {
    src: './images/Millie3.jpg',
    altText: 'Millie',
    caption: '2 lbs, 2.6 oz',
    header: '5 Weeks',
    key: '1',
  },
  {
    src: './images/Millie1.jpg',
    altText: 'Millie',
    caption: 'white spot on head and foot',
    header: ' ',
    key: '2',
  },
  {
    src: './images/Millie4.jpg',
    altText: 'Millie',
    caption: '5 weeks',
    header: ' ',
    key: '3',
  },
  {
    src: './images/Millie6.jpg',
    altText: 'Millie',
    caption: 'first day',
    header: '0 lbs, 6.7 oz',
    key: '4',
  }
];

const Elliemae = [
  {
    src: './images/Elliemae4.jpg',
    altText: 'Elliemae',
    caption: '5 weeks',
    header: ' ',
    key: '1',
  },
  {
    src: './images/Elliemae2.jpg',
    altText: 'Elliemae',
    caption: 'white spot on foot',
    header: ' ',
    key: '2',
  },
  {
    src: './images/Elliemae3.jpg',
    altText: 'Elliemae',
    caption: '5 weeks',
    header: '1 lbs, 15 oz',
    key: '3',
  },
  {
    src: './images/Elliemae5.jpg',
    altText: 'Elliemae',
    caption: 'first day',
    header: '0 lbs, 7.4 oz',
    key: '4',
  }
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
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Millie} interval={3000} />
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Millie"
              status="Reserved for Claudia"
              desc = "Small Miniture Aprricot Female"
              size = "10 to 11.5 inches and 7 to 8.5 lbs"
              birth= "Sept 30, 2021"
              ready= "Nov 28, 2021"
              price = "***"
              contract = "Strict Spay/no breeding rights"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={Elliemae} interval={3000} />
          </Col>
          <Col md="8">
            <PuppyInfo
              name="Elliemae"
              status="Reserved for Arlet"
              desc = "Small Miniture Appricot Female"
              size = "10 to 11 inches and 7 to 8 lbs"
              birth= "Sept 30, 2021"
              ready= "Nov 28, 2021"
              price = "$1500"
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