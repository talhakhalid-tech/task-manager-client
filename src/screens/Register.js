import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/register.css";

export default class Register extends Component {
  render() {
    return (
      <div className="register-container">
        <div className="register-segment">
          <div className="register-leftPanel">
            <div className="register-left-heading">Welcome User!</div>
            <div className="register-input-area">
              <label className="register-input-label" htmlFor="name">
                NAME
              </label>
              <input
                name="name"
                id="name"
                className="register-input-field"
                type="text"
              />
            </div>
            <div className="register-input-area">
              <label className="register-input-label" htmlFor="email">
                EMAIL
              </label>
              <input
                name="email"
                id="email"
                className="register-input-field"
                type="email"
              />
            </div>
            <div className="register-input-area">
              <label className="register-input-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                name="password"
                id="password"
                className="register-input-field"
                type="password"
              />
            </div>
            <div className="register-input-area">
              <label
                className="register-input-label"
                htmlFor="confirm-password"
              >
                CONFIRM PASSWORD
              </label>
              <input
                name="confirm-password"
                id="confirm-password"
                className="register-input-field"
                type="password"
              />
            </div>
            <div className="register-input-area">
              <label className="register-input-label" htmlFor="age">
                AGE
              </label>
              <input
                name="age"
                id="age"
                className="register-input-field age-input"
                type="number"
                defaultValue={18}
                min={18}
              />
            </div>
            <div className="register-register-button">SIGN UP</div>
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
