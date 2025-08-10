import React from "react";
import "./Header.css";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <h1>Advanced Expense Tracker</h1>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
