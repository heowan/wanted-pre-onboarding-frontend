import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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
      <button data-testid="signup-button">회원가입</button>
    </div>
  );
};

export default SignUp;
