import React, { useState } from "react";
import useValidation from "../Utils/useValidation";
import { signInApi } from "../Services/api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isPassed = useValidation(email, password);
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickSignIn = () => {
    signInApi(email, password, navigate);
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
        data-testid="signin-button"
        disabled={!isPassed}
        onClick={handleClickSignIn}
      >
        로그인
      </button>
    </div>
  );
};

export default SignIn;
