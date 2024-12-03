import { Routes, Route, Navigate } from "react-router";
import "./App.css";

import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/about" element={<Navigate to="/About" />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
