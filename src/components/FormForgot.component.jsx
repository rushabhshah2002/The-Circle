import React from "react";
import validateForget from "../utils/validateForget.utils";
import useForget from "../hooks/useForget.hooks";
import "../Form.css";

const FormForgot = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForget(
    submitForm,
    validateForget
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Forgot Password</h1>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Send OTP
        </button>
        <span className="form-input-login">
          Do-not have a account? Sign Up <a href="/">Signup</a>
        </span>
        <span className="form-input-login">
          Forgot Password? <a href="/Forgot">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormForgot;
