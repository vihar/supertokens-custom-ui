// react
import React from "react";
import { Link } from "react-router-dom";

// axios
import axios from "axios";
// supertokens
import SuperTokens from "supertokens-website";

// react bootstrap
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// react toast
import { ToastContainer, toast } from "react-toastify";

import SuperTokensPowered from "../Elements/PoweredByST";

SuperTokens.addAxiosInterceptors(axios);

const ForgotPassword = () => {
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
        url: "https://supertokens-node-backend-production.up.railway.app/auth/user/password/reset/token",
        method: "post",
        data: {
          formFields: [{ id: "email", value: formData.email }],
        },
      });
      toast("We've sent an reset password instructions to your email");
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
              <h1 className="text-center fw-light">Forgot Password</h1>
              <p className="text-center mt-3">
                Please enter your Email, we'll send you reset intructions.
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  className="w-100 text-white"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>

              <p className="mt-2">
                <i>
                  Go back <Link to="/auth/signin">Sign In</Link>.
                </i>
              </p>
              <ToastContainer />
              <SuperTokensPowered />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword;
