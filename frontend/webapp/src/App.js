import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Employees from "./pages/Employees/Employees";
import Companies from "./pages/Companies/Companies";
import Projects from "./pages/Projects/Projects";
import Insights from "./pages/Insights/Insights";
import ManagerProject from "./pages/Projects/MangerProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/companies" element={<Companies />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/manager/projects" element={<ManagerProject />}></Route>
        <Route path="/insights" element={<Insights />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
