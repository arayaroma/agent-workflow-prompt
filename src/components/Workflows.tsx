import React, { useState } from "react";
import { useLLMContext } from "../context/LLMContext";

const Workflows = () => {
  const { workflow, setWorkflow } = useLLMContext();
  const [clickedButton, setClickedButton] = useState(workflow);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonId = e.currentTarget.id;
    setClickedButton((prev) => (buttonId === prev ? "" : buttonId));
    setWorkflow(buttonId);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-center gap-x-2 mb-1">
        <button
          id="reflection"
          onClick={(e) => handleClick(e)}
          className={`rounded-md px-2 text-white py-1 text-md font-bold ${
            clickedButton === "reflection"
              ? "bg-green-800"
              : "bg-green-600 hover:bg-green-800"
          }`}
        >
          Reflection
        </button>
        <button
          id="tool-use"
          onClick={(e) => handleClick(e)}
          className={`rounded-md px-2 text-white py-1 text-md font-bold ${
            clickedButton === "tool-use"
              ? "bg-blue-800"
              : "bg-blue-600 hover:bg-blue-800"
          }`}
        >
          Tool Use
        </button>
        <button
          id="planning"
          onClick={(e) => handleClick(e)}
          className={`rounded-md px-2 text-white py-1 text-md font-bold ${
            clickedButton === "planning"
              ? "bg-yellow-800"
              : "bg-yellow-600 hover:bg-yellow-800"
          }`}
        >
          Planning
        </button>
        <button
          id="multi-agent"
          onClick={(e) => handleClick(e)}
          className={`rounded-md px-2 text-white py-1 text-md font-bold ${
            clickedButton === "multi-agent"
              ? "bg-red-800"
              : "bg-red-600 hover:bg-red-800"
          }`}
        >
          Multi-Agent
        </button>
      </div>
    </div>
  );
};
export default Workflows;
