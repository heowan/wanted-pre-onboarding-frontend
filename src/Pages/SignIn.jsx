import React, { useState } from "react";
import useValidation from "../Utils/useValidation";
import { signInApi } from "../Services/api";
import { Link } from "react-router-dom";

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

  const handleClickSignIn = () => {
    signInApi(email, password);
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
      <Link to={"/signup"}>회원가입하기</Link>
    </div>
  );
};

export default SignIn;
