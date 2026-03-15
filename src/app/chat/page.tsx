"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: "welcome",
          role: "assistant",
          content:
            "Hey. Welcome to Tabula Rasa.\n\nThis is a conversation — not a quiz, not a lecture, not a therapy session. Think of it as clearing some space in your head so you can actually see what's in front of you.\n\nWe're going to talk about the stories you tell yourself, let go of some things that aren't serving you, and figure out one real, specific thing you're going to do differently.\n\nSo — what brought you here today? What's on your mind?",
        },
      ],
    });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between shrink-0">
        <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
          &larr; Back
        </Link>
        <h1 className="text-lg font-semibold tracking-tight">Tabula Rasa</h1>
        <div className="w-12" />
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-5 py-3 ${
                  message.role === "user"
                    ? "bg-amber-500/15 text-amber-100 border border-amber-500/20"
                    : "bg-slate-800/80 text-slate-200 border border-slate-700/50"
                }`}
              >
                <div className="whitespace-pre-wrap leading-relaxed text-[15px]">
                  {message.content}
                </div>
              </div>
            </div>
          ))}

          {isLoading &&
            messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl px-5 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" />
                    <span
                      className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              </div>
            )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-slate-800 px-4 py-4 shrink-0">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto flex gap-3 items-end"
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your response..."
            rows={1}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 resize-none text-[15px] leading-relaxed"
            style={{
              minHeight: "48px",
              maxHeight: "160px",
              height: "auto",
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${Math.min(target.scrollHeight, 160)}px`;
            }}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-amber-500 hover:bg-amber-400 disabled:bg-slate-700 disabled:text-slate-500 text-slate-950 font-semibold px-5 py-3 rounded-xl transition-colors shrink-0"
          >
            Send
          </button>
        </form>
        <p className="text-center text-slate-600 text-xs mt-3">
          Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
