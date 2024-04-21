interface LLMState {
  agent: string;
  setAgent: (agent: string) => void;
  workflow: string;
  setWorkflow: (workflow: string) => void;
  response: string;
  setResponse: (response: string) => void;
}

export interface SetAgent {
  type: "SET_AGENT";
  payload: string;
}

export interface SetWorkflow {
  type: "SET_WORKFLOW";
  payload: string;
}

export interface SetResponse {
  type: "SET_RESPONSE";
  payload: string;
}

export type Action = SetAgent | SetWorkflow | SetResponse;
