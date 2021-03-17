import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";
import Users from "../API/Users";
import history from "../history";
import AuthInputField from "../components/AuthInputField";
export default class Login extends Component {
  state = {
    email: "",
    password: "",
    authError: null,
  };

  loginHandler = async () => {
    try {
      const res = await Users.post("/login", {
        email: this.state.email,
        password: this.state.password,
      });
      if (res.data.token) {
        localStorage.setItem("auth-token", res.data.token);
        history.push("/Dashboard");
      }
    } catch (e) {
      this.setState({ authError: "Invalid Credentials!" });
    }
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-segment">
          <div className="login-leftPanel">
            <div className="login-left-heading">Welcome Back!</div>
            <div className="login-auth-error">{this.state.authError}</div>
            <AuthInputField
              inputFor="email"
              inputLabel="Email"
              inputName="email"
              inputId="email"
              inputType="text"
              inputValue={this.state.email}
              inputChangeHandler={(elem) =>
                this.setState({ email: elem.target.value })
              }
            />
            <AuthInputField
              inputFor="password"
              inputLabel="Password"
              inputName="password"
              inputId="password"
              inputType="password"
              inputValue={this.state.password}
              inputChangeHandler={(elem) =>
                this.setState({ authError: null, password: elem.target.value })
              }
            />
            {/* <Link to="/Dashboard" className="login-login-button">
              SIGN IN
            </Link> */}
            <div className="login-login-button" onClick={this.loginHandler}>
              SIGN IN
            </div>
          </div>
          <div className="login-rightPanel">
            <div className="login-right-upperPart">
              <div className="login-right-heading">New Here?</div>
              <div className="login-right-text">
                Sign Up and Use Best Task Manager App To Enhance Your
                Productivity
              </div>
            </div>
            <Link to="/" className="login-signup-button">
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
