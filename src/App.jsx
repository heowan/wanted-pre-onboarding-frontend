import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Todo from "./Pages/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
