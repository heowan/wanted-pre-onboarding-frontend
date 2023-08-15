import React, { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
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
