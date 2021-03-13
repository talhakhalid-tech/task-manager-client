import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-segment">
          <div className="login-leftPanel">
            <div className="login-left-heading">Welcome Back!</div>
            <label className="login-input-label" htmlFor="email">
              EMAIL
            </label>
            <input
              name="email"
              id="email"
              className="login-input-field"
              type="email"
            />
            <label className="login-input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              name="password"
              id="password"
              className="login-input-field"
              type="password"
            />
            <div className="login-login-button">SIGN IN</div>
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
