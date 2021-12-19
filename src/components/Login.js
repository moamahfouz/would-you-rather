import React, { Component } from "react";
import {Card,Container, Row, Col, Form, Button} from "react-bootstrap";

class Login extends Component {
    state = {
		errors: ''
	};

     handleSubmit = (e) =>{
        alert(e.target.value);
    }
    
  render() {
    const { available_users } = this.props;
    const { errors } = this.state;
    
    return (
        <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={4}>
          <Card bg="light" className="text-center">
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGridState">
                  <Form.Label>Username</Form.Label>
                  {errors ? <p className="text-danger">{errors}</p> : null}

                  <Form.Control as="select" ref={(id) => (this.userID = id)}>
                    <option value="">Select user</option>
                    {available_users.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Button type="submit" variant="outline-dark">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Login;
