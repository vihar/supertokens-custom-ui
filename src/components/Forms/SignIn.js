// react
import React from "react";
import { useNavigate, Link } from "react-router-dom";

// axios
import axios from "axios";
// supertokens
import SuperTokens from "supertokens-website";

// react bootstrap
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import SuperTokensPowered from "../Elements/PoweredByST";

SuperTokens.addAxiosInterceptors(axios);

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, updateFormData] = React.useState(null);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    // handle system actions
    e.preventDefault();
    try {
      await axios({
        url: "https://supertokens-node-backend-production.up.railway.app/auth/signin",
        method: "post",
        data: {
          formFields: [
            { id: "email", value: formData.email },
            { id: "password", value: formData.password },
          ],
        },
      });
      navigate("/");
    } catch (err) {
      if (err.response !== undefined && err.response.status === 401) {
        // redirect user to login
      } else {
        // handle error
      }
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Container className="h-100">
        <Row className="h-100 justify-content-center">
          <Col md="5" className="align-self-center">
            <Card className="p-5 shadow border-0">
              <h1 className="text-center fw-light">Sign In</h1>
              <p className="text-center mt-3">
                Not registered yet? <Link to="/auth/signup">Sign Up</Link>
              </p>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Group>
                <p className="mb-2">
                  <i>
                    Forgot your password?{" "}
                    <Link to="/auth/forgot">Click here</Link>.{" "}
                  </i>
                </p>

                <Button
                  variant="primary"
                  className="w-100 text-white"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <SuperTokensPowered />
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
