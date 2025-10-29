import React, { useState } from "react";

export function Tiriye() {
  // Step 1: Declare a state variable called "count" starting at 0
  const [count, setCount] = useState(0);

  // Step 2: Create functions to update the state
  const handleIncrement = () => {
    setCount(count + 1); // increase count by 1
  };

  const handleDecrement = () => {
    setCount(count - 1); // decrease count by 1
  };

  const handleReset = () => {
    setCount(0); // reset count
  };

  // Step 3: Return JSX using that state
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "12px",
        width: "300px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{backgroundColor: "yellow"}}>Counter Example</h2>
      <h3>{count}</h3>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset} style={{ margin: "0 10px" }}>
          Reset
        </button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}
