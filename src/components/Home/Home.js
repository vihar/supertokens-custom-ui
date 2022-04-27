import React from "react";
import { doesSessionExist, getUserId, signOut } from "supertokens-website";

import { useNavigate, Link } from "react-router-dom";

import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

function HomePage() {
  const navigate = useNavigate();
  const [session, setSession] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const getSession = async () => {
      const isSessionExist = await doesSessionExist();
      let userId = await getUserId();
      setUser(userId);
      setSession(isSessionExist);
    };
    getSession();
  }, []);

  const logout = async () => {
    await signOut();
    setUser(null);
    navigate("/auth/signin");
  };

  console.log(session);

  return (
    <>
      <Navbar className="custom-navbar">
        <Container>
          <Navbar.Brand className="fw-bold">SuperTokens Custom UI</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {user && session === true ? (
                <>
                  <Nav.Link onClick={logout}>Log Out</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link to="/auth/signin">Sign In</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/auth/signup">Sign Up</Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="">
        {user && session === true ? (
          <>
            <div className="jumbotron mt-5 p-5 bg-light">
              <Row>
                <Col md="4" className="align-self-center">
                  <img
                    className="img-fluid"
                    alt=""
                    src="https://ik.imagekit.io/w2okwbtu2/undraw_two_factor_authentication_namy_f1RMuBz9P.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1651090317866"
                  />
                </Col>
                <Col md="2" className="align-self-center"></Col>
                <Col md="6" className="align-self-center">
                  <h1 className="fw-bold">
                    Hurrah! You've logged in as {user}
                  </h1>
                  <p>
                    Auth Powered by{" "}
                    <a href="https://supertokens.com/" target="_blank">
                      SuperTokens
                    </a>
                    . Deployed on{" "}
                    <a href="https://railway.app/" target="_blank">
                      Railway
                    </a>{" "}
                    and{" "}
                    <a href="https://vercel.com/" target="_blank">
                      Vercel
                    </a>
                    .
                  </p>
                </Col>
              </Row>
            </div>
          </>
        ) : (
          <>
            <div className="jumbotron mt-5 p-5 bg-light">
              <Row>
                <Col md="4" className="align-self-center">
                  <img
                    className="img-fluid"
                    alt=""
                    src="https://ik.imagekit.io/w2okwbtu2/undraw_safe_re_kiil_2t-RlOF3z.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1651090027857"
                  />
                </Col>
                <Col md="2" className="align-self-center"></Col>
                <Col md="6" className="align-self-center">
                  <h1 className="fw-bold">Authenticate to View Contents</h1>
                  <p>
                    Auth Powered by{" "}
                    <a href="https://supertokens.com/" target="_blank">
                      SuperTokens
                    </a>
                    . Deployed on{" "}
                    <a href="https://railway.app/" target="_blank">
                      Railway
                    </a>{" "}
                    and{" "}
                    <a href="https://vercel.com/" target="_blank">
                      Vercel
                    </a>
                    .
                  </p>
                </Col>
              </Row>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default HomePage;
