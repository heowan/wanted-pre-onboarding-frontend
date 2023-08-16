import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Todo from "./Pages/Todo";

function App() {
  const isLogin = !!localStorage.getItem("access_token");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={isLogin ? <Navigate to="/todo" /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={isLogin ? <Navigate to="/todo" /> : <SignIn />}
        />
        <Route
          path="/todo"
          element={!isLogin ? <Navigate to="/signin" /> : <Todo />}
        />
        <Route
          path="/"
          element={!isLogin ? <Navigate to="/signin" /> : <Todo />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
