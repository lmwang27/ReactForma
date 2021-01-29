import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
  }

  function handleOnchange(event) {
    console.log(event.target.value);
    console.log(event.target.placeholder);
    console.log(event.target.type);
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1> Hello {headingText}</h1>
      <form action="">
        <input
          onChange={handleOnchange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
