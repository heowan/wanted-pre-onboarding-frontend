import React, { useState, useEffect } from "react";

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
      <button data-testid="signup-button" disabled={!isPassed}>
        회원가입
      </button>
    </div>
  );
};

export default SignUp;
