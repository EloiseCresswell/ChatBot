"use client";
import "./page.css";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <>
      <h1>Hello! Welcome to your friendly ChatBot</h1>
      <div className="chatbot">
        {messages.map((m) => (
          <div key={m.id} className="chatHistory">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="inputField"
            value={input}
            placeholder="Ask me anything!"
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
