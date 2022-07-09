import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button, Title } from "@jamidwyer/react-web-ui";
import { login } from "./LoginActions.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(userData, "/dashboard");
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <Title title="Login" />
            <Form>
              <Form.Group controlId="emailId">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Form.Group>
            </Form>
            <Button
              color="primary"
              id="1bv"
              onClick={this.onLoginClick}
              title="hi"
              name="Log In"
              url={"://google.com"}
            />
            <p className="mt-2">
              Don't have account? <Link to="/signup">Signup</Link>
            </p>
            <p className="mt-2">
              Forget password?{" "}
              <Link to="/send_reset_password">Reset Password</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

//export default Login;
Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  login,
})(withRouter(Login));
