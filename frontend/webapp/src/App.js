import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import LogIn from "./pages/LogIn/LogIn";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
