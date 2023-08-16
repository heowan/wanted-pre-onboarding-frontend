import axios from "axios";

// 회원가입 api
export const signUpApi = (email, password, navigate) => {
  axios
    .post("https://www.pre-onboarding-selection-task.shop/auth/signup", {
      email,
      password,
    })
    .then((res) => {
      alert("가입이 완료되었습니다! 로그인해주세요.");
      navigate("/signin");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

// 로그인 api
export const signInApi = (email, password, navigate) => {
  axios
    .post("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      navigate("/todo");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

// 리스트가져오기 api
export const getListApi = (setData) => {
  const token = localStorage.getItem("access_token");

  axios
    .get("https://www.pre-onboarding-selection-task.shop/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setData(res.data);
    })
    .catch((error) => {
      alert(error);
    });
};

// 리스트작성 api
export const createListApi = (content, setData) => {
  const token = localStorage.getItem("access_token");
  axios
    .post(
      "https://www.pre-onboarding-selection-task.shop/todos",
      {
        todo: content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      getListApi(setData);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

// 리스트수정 api
export const editListApi = (editContent, isCompleted, id, setData) => {
  const token = localStorage.getItem("access_token");
  axios
    .put(
      `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      {
        todo: editContent,
        isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      getListApi(setData);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

// 리스트삭제 api
export const deleteListApi = (id, setData) => {
  const token = localStorage.getItem("access_token");
  axios
    .delete(
      `https://www.pre-onboarding-selection-task.shop/todos/${id}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      getListApi(setData);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
