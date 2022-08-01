import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const colors = new Values(color).all(10);
      // console.log(colors);
      setList(colors);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="color"
            value={color}
            placeholder="#f15025"
            onChange={(event) => {
              setColor(event.target.value);
            }}
            className={`${isError ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              hex={color.hex}
              index={index}
            ></SingleColor>
          );
        })}
      </section>
    </>
  );
}

export default App;
