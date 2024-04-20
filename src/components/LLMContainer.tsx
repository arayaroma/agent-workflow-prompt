import React, { useState } from "react";
import { useLLMContext } from "../context/LLMContext";

const LLMContainer = () => {
  const { agent, setAgent } = useLLMContext();
  const [clickedButton, setClickedButton] = useState(agent);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonId = e.currentTarget.id;
    setClickedButton((prev) => (buttonId === prev ? "" : buttonId));
    setAgent(buttonId);
  };

  return (
    <div className="flex justify-center gap-x-2 mb-2">
      <button
        id="chatgpt"
        onClick={(e) => handleClick(e)}
        className={`flex flex-row rounded-md px-2 text-white py-1 h-fit ${
          clickedButton === "chatgpt"
            ? "bg-green-800"
            : "bg-green-600 hover:bg-green-800"
        }`}
      >
        <img src="chat.webp" alt="" width={29} height={28} className="h-fit" />
        <h2 className="font-bold pt-2 px-1">ChatGPT</h2>
      </button>

      <button
        id="gemini"
        onClick={(e) => handleClick(e)}
        className={`flex flex-row rounded-md px-2 text-white py-1 h-fit ${
          clickedButton === "gemini"
            ? "bg-yellow-800"
            : "bg-yellow-600 hover:bg-yellow-800"
        }`}
      >
        <img
          src="gemini.webp"
          alt=""
          width={28}
          height={28}
          className="h-fit"
        />
        <h2 className="font-bold pt-2 px-1">Gemini</h2>
      </button>

      <button
        id="llama"
        onClick={(e) => handleClick(e)}
        className={`flex flex-row rounded-md px-2 text-white py-1 h-fit ${
          clickedButton === "llama"
            ? "bg-blue-800"
            : "bg-blue-600 hover:bg-blue-800"
        }`}
      >
        <img src="meta.webp" alt="" width={28} height={28} className="h-fit" />
        <h2 className="font-bold pt-2 px-1">Llama</h2>
      </button>
    </div>
  );
};

export default LLMContainer;
