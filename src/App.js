import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Onebox from "./components/Onebox";
import "./App.css"; 

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-container ${theme}`}>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/onebox" element={<Onebox />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
