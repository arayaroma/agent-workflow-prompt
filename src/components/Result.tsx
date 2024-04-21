import React from "react";
import { create } from "../ts/airtable";
import { useLLMContext } from "../context/LLMContext";

const Result = () => {
  const { state, dispatch } = useLLMContext();
  chrome.storage.local.get(["response"], (result) => {
    const { response } = result;
    if (response) {
      dispatch({ type: "SET_RESPONSE", payload: response });
    }
  });

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    chrome.storage.local.remove(["response"]);
    dispatch({ type: "SET_RESPONSE", payload: "" });
  };
  const handleSave = () => {
    chrome.storage.local.get(["agent", "prompt", "response"], (result) => {
      const { agent, prompt, response } = result;
      if (response) {
        dispatch({ type: "SET_RESPONSE", payload: response });
        create({ agent, prompt, response });
      }
    });
    chrome.storage.local.remove(["response", "agent", "prompt"]);
    dispatch({ type: "SET_RESPONSE", payload: "" });
  };

  return (
    <div className="py-2">
      <div className="overflow-auto">
        {state.response !== "" && (
          <div>
            <h1 className="text-2xl font-bold text-white pb-2">Result</h1>
            <p className="bg-neutral-800 rounded-md text-white text-2xl p-3">
              {state.response}
            </p>
            <div className="flex flex-row gap-x-2">
              <button
                onClick={(e) => handleClear(e)}
                className="rounded-md bg-red-700 px-2 hover:bg-red-800 text-white mt-1 py-1 text-xl font-bold w-full"
              >
                Clear
              </button>
              <button
                onClick={handleSave}
                className="rounded-md bg-green-700 px-2 hover:bg-green-800 text-white mt-1 py-1 text-xl font-bold w-full"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Result;
