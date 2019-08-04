import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class ArchiveNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="green" variant="dark" expand="lg">
          <Navbar.Brand href="#home">
            {" "}
            <img
              src="https://res.cloudinary.com/dpj3m4zwi/image/upload/f_auto,q_auto/v1564933068/logo.jpg"
              alt="logo for Archive Bar and Bottle"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pouring">Pouring Now</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
