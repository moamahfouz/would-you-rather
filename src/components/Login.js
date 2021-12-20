import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Row,
  Container,
  Col,
  Form,
  Button,
  Navbar,
  Nav
} from "react-bootstrap";
import { setAuthedUser } from "../actions/authenticatedUser";

class Login extends Component {
  state = {
    errors: "",
  };

  handleSubmit = (e) => {
    const userID = this.userID.value;
    const { dispatch } = this.props;

    e.preventDefault();

    if (userID !== "") {
      dispatch(setAuthedUser(userID));
    } else {
      this.setState({ errors: "You must choose a username" });
    }
  };

  render() {
    const { available_users } = this.props;
    const { errors } = this.state;
  
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="#home">Would you rather?</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>          		  
            </Nav>
            
              <Button href="https://github.com/moamahfouz/would-you-rather" variant="outline-success">Github</Button>
         
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col xs={12} md={6}>
              <Card bg="light" className="text-center">
                <Card.Header>Login</Card.Header>
                <Card.Body>
                <div className='d-flex'>
                      {available_users.map((item) => (                        
                          <div className='p-1' value={item.value} key={item.value}>
                            <div className='img'>
                              <img src={item.avatarURL}/>
                              </div>
                            {item.label}
                          </div>
                        ))}
                      </div>

                      <hr />
                      
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGridState">
                      <Form.Label>Username</Form.Label>
                      {errors ? <p className="text-danger">{errors}</p> : null}


                     

                      <Form.Control
                        as="select"
                        ref={(id) => (this.userID = id)}
                      >
                        <option disabled value="">Select a user</option>
                        {available_users.map((item) => (                        
                          <option value={item.value} key={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
				            <Button type="submit" variant="outline-success" size="md">
                      Login
                    </Button>				   
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    available_users: Object.keys(users).map((id) => ({
      value: id,
      label: users[id].name,
      avatarURL: users[id].avatarURL,
    })),
  };
}

export default connect(mapStateToProps)(Login);
