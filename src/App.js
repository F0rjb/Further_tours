import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./img/logo.png";
import pools from "./img/Gafsa's_Roman_Pool.jpg";
import mosque from "./img/greatmosque.jpg";
import kasbah from "./img/kasbah.jpg";
import loungou from "./img/darloungou.jpg";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="Page">
      <div className="navBar">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <img src={logo} id="logo" alt="logo" width={100} px />
            <Navbar.Brand href="#">Further</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Contact us</Nav.Link>
                <NavDropdown title="Links" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Link</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#About">About</Nav.Link>
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
      <div class="Cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={mosque} />
          <Card.Body>
            <Card.Title>Great mosque</Card.Title>
            <Card.Text>
              The Great Mosque can now be admired in all its glory after recent
              restoration work. No fewer than 120 columns and capitals adorn the
              courtyard portico and prayer hall.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.google.com/maps/dir/34.3935789,8.8004489/Great+Mosque+of+Gafsa,+CQ8P%2B24W,+Gafsa/@34.40385,8.7819617,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x12f896fdd5845a0f:0x362e5cd353a1f600!2m2!1d8.7853349!2d34.4151066"
              target="_blank"
            >
              Go there
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pools} />
          <Card.Body>
            <Card.Title>Roman anciant pools</Card.Title>
            <Card.Text>
              Lower pool, with the Great Mosque in the background
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.google.com/maps/dir/34.3935789,8.8004489/roman+pools+gafsa/@34.4046333,8.7835067,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x12f896fe76e06973:0x7b2f3ec9f81a6a89!2m2!1d8.7869275!2d34.4157034"
              target="_blank"
            >
              Go there
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={kasbah} />
          <Card.Body>
            <Card.Title>The Kasbah</Card.Title>
            <Card.Text>
              The anciant roman fort of Gafsa a real magnificense to be
              witnessed
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.google.com/maps/dir//34.417013,8.785321/@34.4170413,8.7435722,13z/data=!4m10!1m7!3m6!1s0x0:0x63b8145a99fa6146!2zMzTCsDI1JzAxLjMiTiA4wrA0NycwNy4yIkU!3b1!8m2!3d34.4168722!4d8.7851243!4m1!3e2"
              target="_blank"
            >
              Go there
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={loungou} />
          <Card.Body>
            <Card.Title>Dar Loungou</Card.Title>
            <Card.Text>the home to the Ottomons Gafsi mayor at 1600</Card.Text>
            <Button
              variant="primary"
              href="https://www.google.com/maps/dir//Dar+Loungou,+CQ8P%2B2W5,+Gafsa/@34.4150161,8.7461458,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x12f896fe0d7c66db:0x44d9cd4c0033949a!2m2!1d8.7873555!2d34.4150428!3e2"
              target="_blank"
            >
              Go there
            </Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <div className="Alert">
        <>
          <Alert show={show} variant="success">
            <Alert.Heading>How's it going?!</Alert.Heading>
            <p>
              Hello, be in toutch and follow us with our news letter
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
              <button
                className="btn btn-primary"
                onClick={() => setShow(false)}
              >
                Submit
              </button>
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me y'all!
              </Button>
            </div>
          </Alert>

          {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
      </div>
    </div>
  );
}

export default App;
