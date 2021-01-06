import React, { useState } from "react";
import "../Form.css";
import FormSignup from "../components/FormSignup.component";
import FormSuccess from "../components/FormSuccess.component";
import Image from "../assets/TheCircle.jpeg";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      <span className="close-btn">×</span>
      <div className="form-content-left">
        <img className="TheCircle" src={Image} alt="Logo" />
      </div>

      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Signup;
