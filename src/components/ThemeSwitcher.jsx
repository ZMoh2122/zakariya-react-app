import React, { useState } from "react";

export default function ThemeToggle() {
  // Step 1: create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: toggle function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  // Step 3: define dynamic styles
  const pageStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isDarkMode ? "#121212" : "#f9f9f9",
    color: isDarkMode ? "#f9f9f9" : "#121212",
    transition: "all 0.3s ease-in-out",
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: isDarkMode ? "#f9f9f9" : "#121212",
    color: isDarkMode ? "#121212" : "#f9f9f9",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <div style={pageStyle}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button style={buttonStyle} onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
