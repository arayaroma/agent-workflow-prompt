function chooseAgent(agent: string) {
  if (agent === "gemini") {
    return "https://gemini.google.com/app";
  }
  if (agent === "chatgpt") {
    return "https://chat.openai.com";
  }
  if (agent === "llama") {
    return "https://www.llama2.ai/";
  }
}
export { chooseAgent };
