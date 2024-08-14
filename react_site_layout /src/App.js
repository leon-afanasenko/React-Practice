import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HelpSection from "./components/HelpSection";
import Categories from "./components/Categories";
import JobList from "./components/JobList";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "";
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <HelpSection />
      <Categories />
      <JobList />
      <Footer />
    </div>
  );
};

export default App;
