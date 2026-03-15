"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Chat() {
  const router = useRouter();
  const [reportName, setReportName] = useState("");
  const [reportEmail, setReportEmail] = useState("");
  const [reportBusiness, setReportBusiness] = useState("");
  const [generating, setGenerating] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: "welcome",
          role: "assistant",
          content:
            "Hey. Welcome to Tabula Rasa.\n\nThis is a quick conversation — maybe 5 minutes — to clear some space in your head and figure out one real thing you're going to do differently.\n\nWhat brought you here today? What's on your mind?",
        },
      ],
    });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Show report form after 6+ messages (3 user exchanges)
  const showReportForm = messages.length >= 6;

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

  const handleGenerateReport = async () => {
    if (!reportName.trim() || !reportEmail.trim() || !reportBusiness.trim())
      return;

    setGenerating(true);
    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          name: reportName,
          email: reportEmail,
          businessName: reportBusiness,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate report");

      const report = await res.json();
      sessionStorage.setItem("tabula-rasa-report", JSON.stringify(report));
      router.push("/report");
    } catch (err) {
      console.error(err);
      alert("Something went wrong generating the report. Please try again.");
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between shrink-0">
        <Link
          href="/"
          className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
        >
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

      {/* Report Generation Form — appears after enough conversation */}
      {showReportForm && (
        <div className="border-t-2 border-amber-500/30 bg-slate-900 px-4 py-5 shrink-0">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-semibold text-amber-400 mb-1">
              Ready for your report?
            </h3>
            <p className="text-slate-400 text-sm mb-3">
              We&apos;ll generate a personalized SWOT analysis and 90-day action
              plan from this conversation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              <input
                type="text"
                placeholder="Your name"
                value={reportName}
                onChange={(e) => setReportName(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
              />
              <input
                type="email"
                placeholder="Your email"
                value={reportEmail}
                onChange={(e) => setReportEmail(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
              />
              <input
                type="text"
                placeholder="Business name"
                value={reportBusiness}
                onChange={(e) => setReportBusiness(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
              />
            </div>
            <button
              onClick={handleGenerateReport}
              disabled={
                generating ||
                !reportName.trim() ||
                !reportEmail.trim() ||
                !reportBusiness.trim()
              }
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-slate-700 disabled:text-slate-500 text-slate-950 font-bold px-5 py-3 rounded-lg transition-colors text-sm"
            >
              {generating
                ? "Generating your report... (15-20 seconds)"
                : "Generate My Report"}
            </button>
          </div>
        </div>
      )}

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
