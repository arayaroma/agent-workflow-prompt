import React from "react";
import Form from "./Form";
import "./index.css";
import LLMProvider from "./context/LLMContext";

function App() {
  return (
    <LLMProvider>
      <Form />
    </LLMProvider>
  );
}

export default App;
