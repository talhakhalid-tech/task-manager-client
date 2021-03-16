import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/register.css";

import AuthInputField from "../components/AuthInputField";

export default class Register extends Component {
  state = {
    name: "",
    nameError: null,
    email: "",
    emailError: null,
    password: "",
    passwordError: null,
    confirmPassword: "",
    confirmPasswordError: null,
    age: 18,
  };

  registerHandler = () => {
    if (this.state.name.length <= 0) {
      this.setState({ nameError: "Name is required a field" });
    }
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.email
      )
    ) {
      this.setState({ emailError: "Please enter a valid Email Address" });
    }
    if (this.state.password.length < 8) {
      this.setState({
        passwordError: "Password length must be minimum 8 characters",
      });
    }
    if (this.state.confirmPassword !== this.state.password) {
      this.setState({
        confirmPasswordError: "Both passwords must match",
      });
    }
  };

  render() {
    return (
      <div className="register-container">
        <div className="register-segment">
          <div className="register-leftPanel">
            <div className="register-left-heading">Welcome User!</div>
            <AuthInputField
              inputFor="name"
              inputLabel="Name"
              inputName="name"
              inputId="name"
              inputType="text"
              inputValue={this.state.name}
              inputChangeHandler={(elem) => {
                if (elem.target.value.length > 0)
                  this.setState({ nameError: null });
                this.setState({ name: elem.target.value });
              }}
              errorMessage={this.state.nameError}
            />
            <AuthInputField
              inputFor="email"
              inputLabel="Email Address"
              inputName="email"
              inputId="email"
              inputType="email"
              inputValue={this.state.email}
              inputChangeHandler={(elem) => {
                if (elem.target.value.length > 0)
                  this.setState({ emailError: null });
                this.setState({ email: elem.target.value });
              }}
              errorMessage={this.state.emailError}
            />
            <AuthInputField
              inputFor="password"
              inputLabel="Password"
              inputName="password"
              inputId="password"
              inputType="password"
              inputValue={this.state.password}
              inputChangeHandler={(elem) => {
                if (elem.target.value.length >= 8)
                  this.setState({ passwordError: null });
                this.setState({ password: elem.target.value });
              }}
              errorMessage={this.state.passwordError}
            />
            <AuthInputField
              inputFor="confirm-password"
              inputLabel="Confirm Password"
              inputName="confirm-password"
              inputId="confirm-password"
              inputType="password"
              inputValue={this.state.confirmPassword}
              inputChangeHandler={(elem) => {
                if (elem.target.value.length == this.state.password)
                  this.setState({ confirmPasswordError: null });
                this.setState({ confirmPassword: elem.target.value });
              }}
              errorMessage={this.state.confirmPasswordError}
            />
            <AuthInputField
              inputFor="age"
              inputLabel="Age"
              inputName="age"
              inputId="age"
              inputType="number"
              inputClassName="auth-input-field auth-age-input"
              inputValue={this.state.age}
              inputChangeHandler={(elem) =>
                this.setState({ age: elem.target.value })
              }
              inputMinValue={18}
            />
            <div
              className="register-register-button"
              onClick={this.registerHandler}
            >
              SIGN UP
            </div>
          </div>
          <div className="register-rightPanel">
            <div className="register-right-upperPart">
              <div className="register-right-heading">Already A Member?</div>
              <div className="register-right-text">
                Sign In and Use Best Task Manager App To Enhance Your
                Productivity
              </div>
            </div>
            <Link to="/Login" className="register-signup-button">
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
