import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styled from "styled-components";

const StyledNav = styled.div`
  .navbar {
  color:rgb(99, 4, 53);
  background-color: rgb(255, 209, 168);
  margin: 0;
  padding: 0;
  }

  .navbar-brand{
    height: 90px;
    margin: 0;
    margin-left: 30px;
    padding: 10px;
    background-color: rgb(255, 209, 168);
    color:rgb(99, 4, 53);
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-weight: bolder;
    font-size: 40px;
  }
  
`;

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNav>
      <Navbar color="rgb(44, 141, 44)" light expand="md">
        <NavbarBrand tag={Link} to="/rigbyjasperpoodles">Rigby Jasper Poodles</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/rigbyjasperpoodles/about">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/rigbyjasperpoodles/MyDogs">My Dogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/rigbyjasperpoodles/AvailablePuppies">Available Puppies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/rigbyjasperpoodles/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </StyledNav>
  );
}

export default Header;