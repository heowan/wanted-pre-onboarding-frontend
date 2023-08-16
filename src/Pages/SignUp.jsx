import React, { useState, useEffect } from "react";
import useValidation from "../Utils/useValidation";
import { signUpApi } from "../Services/api";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isPassed = useValidation(email, password);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickSignUp = () => {
    signUpApi();
  };

  return (
    <div>
      <input
        data-testid="email-input"
        type="email"
        onChange={handleChangeEmail}
      />
      <input
        data-testid="password-input"
        type="password"
        onChange={handleChangePassword}
      />
      <button
        data-testid="signup-button"
        disabled={!isPassed}
        onClick={handleClickSignUp}
      >
        회원가입
      </button>
    </div>
  );
};

export default SignUp;
