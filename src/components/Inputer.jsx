import { useState } from "react";

function Inputer() {
  const [text, setText] = useState("hello nobody"); // state to store input value

  const handleChange = (e) => {
    setText(e.target.value); // updates state as user types
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Live Input Example</h2>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Inputer;
