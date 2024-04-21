import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";
import reducer from "../ts/reducer";
import { Action, LLMState } from "../../types";

interface ContextType {
  state: LLMState;
  dispatch: React.Dispatch<Action>;
}
const initialState: LLMState = {
  agent: "gemini",
  workflow: "",
  response: "",
  setAgent: () => {},
  setWorkflow: () => {},
  setResponse: () => {},
};

export const LLMContext = createContext<ContextType | null>(null);

export const LLMProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <LLMContext.Provider value={contextValue}>{children}</LLMContext.Provider>
  );
};

export const useLLMContext = () => {
  const { state, dispatch } = useContext(LLMContext)!;
  return { state, dispatch };
};

export default LLMProvider;
