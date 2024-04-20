import React, { ReactNode, createContext, useContext, useState } from "react";

type LLMState = {
  agent: string;
  setAgent: (agent: string) => void;
  workflow?: string;
  setWorkflow?: (workflow: string) => void;
};

export const LLMContext = createContext<LLMState | null>({
  agent: "",
  workflow: "",
  setAgent: () => {},
  setWorkflow: () => {},
});

const defaultLLMState: LLMState = {
  agent: "gemini",
  workflow: "",
  setAgent: () => {},
  setWorkflow: () => {},
};

export const LLMProvider = ({ children }: { children: ReactNode }) => {
  const [agent, setAgent] = useState(defaultLLMState.agent);
  const [workflow, setWorkflow] = useState(defaultLLMState.workflow);
  const llmState: LLMState = {
    agent,
    setAgent,
    workflow,
    setWorkflow,
  };

  return <LLMContext.Provider value={llmState}>{children}</LLMContext.Provider>;
};

export const useLLMContext = () => useContext(LLMContext)!;
export default LLMProvider;
