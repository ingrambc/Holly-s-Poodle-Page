import React from "react";
import {Col, Row} from "reactstrap";
import styled from "styled-components";

//assets

import EmailIcon from "../images/email.png";


const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-image: linear-gradient(rgb(255, 209, 168), rgb(255, 99, 99));

  #column{
    align-content: center;
    text-align: center;
    align-items: center;
  };

  .h2{
    color: rgb(44, 141, 44);
    text-align: center;
  };

  a:link, a:visited{
    color: rgb(187, 243, 187);
  }
  a:hover, a:active{
    color: rgb(187, 200, 187);
  }
`;

const Contact = () => {
  return(
    <StyledContact>
      <Row><h2>Please email us for more info or to get on our waitlist!</h2></Row>
      <Row>
        <Col Col id="column">
          <a href="mailto:rigbyjasperpoodles@hotmail.com"><img src={EmailIcon} alt="email" /></a>
          <h2><a href="mailto:rigbyjasperpoodles@hotmail.com">rigbyjasperpoodles@hotmail.com</a></h2>
        </Col>
      </Row>
    </StyledContact>
  );
};

export default Contact;