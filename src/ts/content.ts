function setPrompt() {
  chrome.storage.local.get(["prompt", "agent"], (result) => {
    const { prompt, agent } = result;
    console.log("Prompt: ", prompt);
    console.log("Agent: ", agent);
    if (agent === "gemini") {
      const geminiPromptId = document.querySelector<HTMLDivElement>(
        "rich-textarea .ql-editor"
      );
      if (geminiPromptId) {
        geminiPromptId.innerHTML = `<p>${prompt}</p>`;

        let enterKeyEvent = new KeyboardEvent("keydown", {
          key: "Enter",
          code: "Enter",
          keyCode: 13,
          which: 13,
          bubbles: true,
        });
        geminiPromptId.dispatchEvent(enterKeyEvent);

        let sendButton = document.querySelector<HTMLButtonElement>(
          'button.send-button[aria-label="Send message"]'
        );
        if (sendButton) {
          sendButton.click();
        }
      }
    }
    if (agent === "chatgpt") {
      const chatPrompt = document.getElementById(
        "prompt-textarea"
      ) as HTMLTextAreaElement;
      if (chatPrompt) {
        chatPrompt.value = prompt;
        let inputEvent = new Event("input", { bubbles: true });
        chatPrompt.dispatchEvent(inputEvent);
        let sendButton =
          document.querySelector<HTMLButtonElement>("button.absolute");
        if (sendButton) {
          sendButton.click();
        }
      }
    }
    if (agent === "llama") {
      // TODO
    }
  });
}

setPrompt();
chrome.storage.local.remove(["prompt"]);
