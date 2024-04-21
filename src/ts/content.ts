function setPrompt() {
  chrome.storage.local.get(["agent", "prompt"], (result) => {
    const { agent, prompt } = result;
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
          scrapLLMResponse();
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
          scrapLLMResponse();
        }
      }
    }
    if (agent === "llama") {
      // TODO
    }
  });
}

async function scrapLLMResponse() {
  setTimeout(() => {
    const paragraphElement =
      document.querySelector<HTMLDivElement>("div.markdown");
    const response = paragraphElement?.innerText;
    chrome.runtime.sendMessage({ type: "LLM_RESPONSE", response });
    chrome.storage.local.set({ response });
  }, 15000);
}

setPrompt();
