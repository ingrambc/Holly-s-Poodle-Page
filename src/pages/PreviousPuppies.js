import React from "react";
import { Row, Col, Container, UncontrolledCarousel } from "reactstrap";
import styled from "styled-components";
import PrevPuppyInfo from "../components/PrevPuppyInfo";
import PuppyList from "../components/assets/PrevList";


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
      <h1>Previous Puppies</h1>
      <hr />

      {/* {PuppyList.map((puppy) => (
        <Container>

        </Container>
      ))} */}

      <h3>success stories coming soon</h3>

    </StyledAvailablePuppies>
  );
};

export default AvailablePuppies;