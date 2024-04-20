import React, { useState } from "react";
import LLMContainer from "./components/LLMContainer";
import Workflows from "./components/Workflows";
import { useLLMContext } from "./context/LLMContext";
import { chooseWorkflow } from "./ts/workflow";
import { chooseAgent } from "./ts/agent";

export const Context = React.createContext({});

const Form = () => {
  const [form, setForm] = useState({ search: "" });
  const { agent, workflow } = useLLMContext();

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ search: e.target.value });
  };

  const handleFetch = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    chrome.storage.local.set({
      prompt: chooseWorkflow(form.search, workflow),
      agent: agent,
    });
    window.open(chooseAgent(agent), "_blank");
  };

  return (
    <form className="flex justify-center bg-neutral-700 min-w-[400px]">
      <div className="justify-center items-center p-4">
        <h1 className="text-4xl mb-4 text-white font-bold text-center">
          AI Prompt Tool
        </h1>

        <LLMContainer />
        <textarea
          onChange={handleInput}
          className="w-full text-2xl rounded-md h-32 mb-2 bg-neutral-800 text-white p-2"
        />

        <Workflows />
        <button
          type="submit"
          onClick={handleFetch}
          className="rounded-md bg-purple-700 px-2 hover:bg-purple-800 text-white mt-1 py-1 text-xl font-bold w-full"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
