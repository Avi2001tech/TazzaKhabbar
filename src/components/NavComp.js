import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";

export default class NavComp extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark"expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">NewsScroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Categories" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/business">Business</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/entertainment">Entertainment</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/health">Health</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/science">Science</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/general">General</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>Link</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
