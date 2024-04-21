import { Action, LLMState } from "../../types";

export const reducer = (state: LLMState, action: Action): LLMState => {
  const handlers: Record<
    string,
    (state: LLMState, action: Action) => LLMState
  > = {
    SET_AGENT: (state, action) => ({
      ...state,
      agent: action.payload,
    }),

    SET_WORKFLOW: (state, action) => ({
      ...state,
      workflow: action.payload,
    }),

    SET_RESPONSE: (state, action) => ({
      ...state,
      response: action.payload,
    }),
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default reducer;
