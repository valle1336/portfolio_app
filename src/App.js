import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import TechStack from "./views/TechStack";
import CV from "./views/CV";
import Github from "./views/Github";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/techstack" element={<TechStack />}></Route>
        <Route path="/cv" element={<CV />}></Route>
        <Route path="/github" element={<Github />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
