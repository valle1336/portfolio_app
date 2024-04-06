import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import TechStack from "./views/TechStack";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/techstack" element={<TechStack />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
