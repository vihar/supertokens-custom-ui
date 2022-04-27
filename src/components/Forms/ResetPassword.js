// react
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

// axios
import axios from "axios";
// supertokens
import SuperTokens from "supertokens-website";

// react bootstrap
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import SuperTokensPowered from "../Elements/PoweredByST";

// react toast
import { ToastContainer, toast } from "react-toastify";

SuperTokens.addAxiosInterceptors(axios);

const ResetPassword = () => {
  const navigate = useNavigate();

  const [formData, updateFormData] = React.useState(null);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const search = useLocation().search;
  const tokenParam = new URLSearchParams(search).get("token");

  const handleSubmit = async (e) => {
    // handle system actions
    e.preventDefault();
    try {
      await axios({
        url: "https://supertokens-node-backend-production.up.railway.app/auth/user/password/reset",
        method: "post",
        data: {
          method: "token",
          formFields: [
            {
              id: "password",
              value: formData.password,
            },
          ],
          token: tokenParam,
        },
      });
      toast("Password Reset Successfully");
      navigate("/auth/signin");
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
              <h1 className="text-center fw-light">Reset Password</h1>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
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

export default ResetPassword;
