import React, { useState, useEffect } from "react";
import axios from "axios";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassed, setIsPassed] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // 유효성검사
  useEffect(() => {
    if (email.includes("@") && password.length >= 8) {
      setIsPassed(true);
    } else {
      setIsPassed(false);
    }
  }, [email, password]);

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
