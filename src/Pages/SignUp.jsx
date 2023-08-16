import React, { useState, useEffect } from "react";
import axios from "axios";
import useValidation from "../Utils/useValidation";

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

  // 회원가입 api
  const signUpApi = () => {
    axios
      .post("https://www.pre-onboarding-selection-task.shop/auth/signup", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
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
