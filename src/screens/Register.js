import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import "../styles/register.css";

import AuthInputField from "../components/AuthInputField";
import Users from "../API/Users";
import history from "../history";

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
    modalIsOpen: false,
    successModal: false,
    successModalConfig: {
      iconClass: "check circle outline icon",
      iconColor: "#65E340",
      modalText: "Congratulations! Successfully Signed Up",
      buttonText: "Continue",
    },
    failModal: false,
    failModalConfig: {
      iconClass: "times circle outline icon",
      iconColor: "tomato",
      modalText: "Oops! An Error Occured",
      buttonText: "Try Again",
    },
  };

  registerHandler = async () => {
    if (this.state.name.length <= 0) {
      this.setState({ nameError: "Name is required a field" });
      return;
    }
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.email
      )
    ) {
      this.setState({ emailError: "Please enter a valid Email Address" });
      return;
    }
    if (this.state.password.length < 8) {
      this.setState({
        passwordError: "Password length must be minimum 8 characters",
      });
      return;
    }
    if (this.state.confirmPassword !== this.state.password) {
      this.setState({
        confirmPasswordError: "Both passwords must match",
      });
      return;
    }

    if (
      !this.state.nameError &&
      !this.state.emailError &&
      !this.state.passwordError &&
      !this.state.confirmPasswordError
    ) {
      try {
        const res = await Users.post("", {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          age: this.state.age,
        });
        if (res.status === 201) {
          this.setState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            age: 18,
            modalIsOpen: true,
            successModal: true,
            failModal: false,
          });
        }
      } catch (e) {
        this.setState({
          modalIsOpen: true,
          successModal: false,
          failModal: true,
        });
      }
    }
  };

  renderModal = ({ iconClass, iconColor, modalText, buttonText }) => {
    return (
      <>
        <i
          class={iconClass}
          style={{
            fontSize: "100px",
            color: iconColor,
            marginTop: "50px",
          }}
        ></i>
        <div style={{ fontSize: "27px", color: "grey", fontWeight: "600" }}>
          {modalText}
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#444",
            // border: "2px solid #444",
            padding: "7.5px 10px",
            borderRadius: "3px",
            fontWeight: "600",
            marginTop: "20px",
            cursor: "pointer",
          }}
          onClick={this.closeModal}
        >
          {buttonText}
        </div>
      </>
    );
  };

  closeModal = () => {
    if (this.state.successModal) {
      this.setState({
        modalIsOpen: false,
        successModal: false,
      });
      history.push("/Login");
    } else {
      this.setState({
        modalIsOpen: false,
        failModal: false,
      });
    }
  };

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        zIndex: 5,
        height: "35%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
      },
    };
    Modal.setAppElement("#root");
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
                if (elem.target.value === this.state.password)
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
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Authentication Modal"
        >
          {this.renderModal(
            this.state.successModal
              ? this.state.successModalConfig
              : this.state.failModalConfig
          )}
        </Modal>
      </div>
    );
  }
}
