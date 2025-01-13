// import Circle from "./components/Circle";

 import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center gap-3 bg-yellow-50 px-2 py-4 rounded-3xl">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          bule
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "yellow" }}
        >
          Yello
        </button>
        <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-orange-950 shadow-lg bg-black"
          // style={{ backgroundColor: "black" }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;


