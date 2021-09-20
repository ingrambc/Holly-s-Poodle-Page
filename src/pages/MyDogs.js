import React from "react";
import { Row, Col, Container } from "reactstrap";
import DogInfo from "../components/DogInfo";
import Crsl from "../components/Crsl";
import styled from "styled-components";

const StyledMyDogs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-image: linear-gradient(rgb(255, 209, 168), rgb(255, 99, 99));
  padding:5%;
  
  h1{
    text-decoration: underline;
    color:rgb(99, 4, 53);
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


function MyDogs() {

  return (        
    <StyledMyDogs class="mb-3 mx-auto">
      <h1>These are my Furbabies</h1>
      <hr />
      <Container>
        <Row>
          <Col md="4">
            <p>this is for Carousel</p>
          </Col>
          <Col md="8">
            <DogInfo
              name="Rigby Jasper"
              desc = "Rigby is a very playfull dog.  He plays with our other dogs, our cat, and anyone who will spend time with him. He love attention and loves to be brushed and groomed! He is deffinately the prince of the house."
              size = "9 inches tall and 4.5 lbs"
              reg = "AKC and ACA"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <p>this is for Carousel</p>
          </Col>
          <Col md="8">
            <DogInfo
              name="Trixie"
              desc = "Trixie is the most independant poodle we have ever seen.  She loves attention, can play fetch for ever, and when now one is playing with her, she tosses her toys in the air and tries to catch them."
              size = "10.5 inches tall and 6 lbs"
              reg = "ACA"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <p>this is for Carousel</p>
          </Col>
          <Col md="8">
            <DogInfo
              name="Snickers"
              desc = "Snickers is a very cuddley dog.  She always wants to be touching you or in your lap. She is very attached to both me and my husband, but is the first to walk up to new people."
              size = "11.5 inches tall and 8 lbs"
              reg = "ACA"
             />
          </Col>
        </Row>      
      </Container>


    </StyledMyDogs>
  );
};

export default MyDogs;