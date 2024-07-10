import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full  h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            type="button"
            class="text-white bg-red-700 hover:bg-red-800 
      focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm 
      px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Red
          </button>
          <button
            onClick={() => setColor("purple")}
            type="button"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none
       focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2
        dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("green")}
            type="button"
            class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            green
          </button>
          <button
            onClick={() => setColor("blue")}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
