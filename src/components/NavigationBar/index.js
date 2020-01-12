import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.png"
import { LinkContainer } from "react-router-bootstrap";

export default function NavigationBar() {
    return (
        <>
      <Navbar collapseOnSelect expand="lg" variant="light">
      <LinkContainer to="/">
        <Navbar.Brand >
        <img
          src={logo}
          width="100%"
          height="40"
          className="d-inline-block align-top"
          alt="Bicibot Log"
        />
      </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/implemente">
            <Nav.Link>Implemente na sua Cidade</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sobre-nos">
            <Nav.Link>Sobre nós</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
}
