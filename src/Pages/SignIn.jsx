import React, { useState } from "react";
import axios from "axios";
import useValidation from "../Utils/useValidation";

const SignIn = () => {
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
  const signInApi = () => {
    axios
      .post("https://www.pre-onboarding-selection-task.shop/auth/signin", {
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

  const handleClickSignIn = () => {
    signInApi();
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
