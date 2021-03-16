import React from "react";

import "../styles/authinputfield.css";

export default function AuthInputField({
  inputFor = "for",
  inputLabel = "Label",
  inputName = "InputName",
  inputId = "InputId",
  inputType = "text",
  inputClassName = "auth-input-field",
  inputValue = "",
  inputChangeHandler = null,
  inputMinValue = null,
  errorMessage = null,
}) {
  return (
    <div className="auth-input-area">
      <label className="auth-input-label" htmlFor={inputFor}>
        {inputLabel}
      </label>
      <input
        name={inputName}
        id={inputId}
        className={inputClassName}
        type={inputType}
        value={inputValue}
        onChange={inputChangeHandler}
        min={inputMinValue}
        required
      />
      {errorMessage ? (
        <div className="auth-input-error-text">{errorMessage}</div>
      ) : (
        <div className="auth-input-error-text" style={{ visibility: "hidden" }}>
          error
        </div>
      )}
    </div>
  );
}
