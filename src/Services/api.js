import axios from "axios";

// 회원가입 api
export const signUpApi = (email, password) => {
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

// 로그인 api
export const signInApi = (email, password) => {
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
