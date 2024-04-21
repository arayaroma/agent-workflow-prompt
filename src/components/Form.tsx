import React, { Suspense, lazy, useState } from "react";
import Agents from "./Agents";
import Workflows from "./Workflows";
import { useLLMContext } from "../context/LLMContext";
import { chooseWorkflow } from "../ts/workflow";
import { chooseAgent } from "../ts/agent";
import Skeleton from "./Skeleton";

const Result = lazy(() => import("./Result"));
const Form = () => {
  const [form, setForm] = useState({ search: "" });
  const { state } = useLLMContext();

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ search: e.target.value });
  };

  const handleFetch = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    chrome.storage.local.set({
      agent: state.agent,
      prompt: chooseWorkflow(form.search, state.workflow),
    });
    window.open(chooseAgent(state.agent), "_blank", "popup");
  };

  return (
    <form className="flex justify-center bg-neutral-700 min-w-[400px]">
      <div className="justify-center items-center p-4">
        <h1 className="text-2xl mb-4 text-white font-bold text-center">
          Agent Workflow Prompt
        </h1>

        <Agents />
        <textarea
          onChange={handleInput}
          className="w-full text-2xl rounded-md h-32 mb-2 bg-neutral-800 text-white p-2"
          placeholder="Enter your prompt here"
        />

        <Workflows />
        <button
          type="submit"
          onClick={handleFetch}
          className="rounded-md bg-purple-700 px-2 hover:bg-purple-800 text-white mt-1 py-1 text-xl font-bold w-full"
        >
          Search
        </button>
        <Suspense fallback={<Skeleton />}>
          <Result />
        </Suspense>
      </div>
    </form>
  );
};

export default Form;
