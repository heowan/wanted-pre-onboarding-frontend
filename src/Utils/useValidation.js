import { useState, useEffect } from "react";

const useValidation = (email, password) => {
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    if (email.includes("@") && password.length >= 8) {
      setIsPassed(true);
    } else {
      setIsPassed(false);
    }
  }, [email, password]);

  return isPassed;
};

export default useValidation;
