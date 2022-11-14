import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Employees from "./pages/Employees/Employees";
import Companies from "./pages/Companies/Companies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/companies" element={<Companies />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        {/* <Route path="/employees" element={<Employees />}></Route> */}
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
