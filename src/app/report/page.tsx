"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Report {
  name: string;
  email: string;
  businessName: string;
  sessionSummary: {
    traditionIdentified: string;
    cleanSlateMoment: string;
    ninetyDaySolution: string;
  };
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  actionPlan: {
    days1to30: { title: string; description: string };
    days31to60: { title: string; description: string };
    days61to90: { title: string; description: string };
  };
  closingMessage: string;
}

export default function ReportPage() {
  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("tabula-rasa-report");
    if (stored) {
      setReport(JSON.parse(stored));
    }
  }, []);

  if (!report) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">No Report Found</h1>
          <p className="text-slate-400">
            Complete the Tabula Rasa conversation first to generate your
            personalized report.
          </p>
          <Link
            href="/chat"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            Start the Conversation
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/chat"
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
          >
            &larr; Back to conversation
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-1 h-12 bg-amber-500 rounded-full" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Your Tabula Rasa Report
              </h1>
              <p className="text-slate-400 mt-1">
                {report.name} — {report.businessName}
              </p>
            </div>
          </div>
        </div>

        {/* Session Summary */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-amber-500">
            Session Summary
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                Tradition Identified
              </h3>
              <p className="text-slate-200">
                {report.sessionSummary.traditionIdentified}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                Clean Slate Moment
              </h3>
              <p className="text-slate-200">
                {report.sessionSummary.cleanSlateMoment}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                90-Day Solution
              </h3>
              <p className="text-slate-200">
                {report.sessionSummary.ninetyDaySolution}
              </p>
            </div>
          </div>
        </section>

        {/* SWOT Analysis */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-amber-500">
            Business SWOT Analysis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-400 mb-3">
                Strengths
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                {report.swot.strengths.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-5">
              <h3 className="font-semibold text-red-400 mb-3">Weaknesses</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                {report.swot.weaknesses.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-5">
              <h3 className="font-semibold text-blue-500 mb-3">
                Opportunities
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                {report.swot.opportunities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-5">
              <h3 className="font-semibold text-amber-400 mb-3">Threats</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                {report.swot.threats.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-amber-500">
            Your 90-Day Action Plan
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-lg divide-y divide-slate-800">
            <div className="p-5 flex gap-4">
              <div className="text-amber-500 font-bold text-sm shrink-0 mt-0.5">
                DAYS 1-30
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-1">
                  {report.actionPlan.days1to30.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {report.actionPlan.days1to30.description}
                </p>
              </div>
            </div>
            <div className="p-5 flex gap-4">
              <div className="text-amber-500 font-bold text-sm shrink-0 mt-0.5">
                DAYS 31-60
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-1">
                  {report.actionPlan.days31to60.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {report.actionPlan.days31to60.description}
                </p>
              </div>
            </div>
            <div className="p-5 flex gap-4">
              <div className="text-amber-500 font-bold text-sm shrink-0 mt-0.5">
                DAYS 61-90
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-1">
                  {report.actionPlan.days61to90.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {report.actionPlan.days61to90.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="mb-10">
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-6">
            <p className="text-amber-100 leading-relaxed italic">
              &ldquo;{report.closingMessage}&rdquo;
            </p>
            <p className="text-amber-500/60 text-sm mt-3">
              — Your Tabula Rasa Guide
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 border-t border-slate-800">
          <p className="text-slate-400 mb-2">
            Want to go deeper? The Do It True weekend experience takes
            everything in this report and turns it into a real, accountable plan
            — with a partner to keep you honest.
          </p>
          <p className="text-slate-500 text-sm mb-6">
            Don&apos;t spend time on your problems. Spend time on your
            solutions.
          </p>
          <p className="text-slate-600 text-xs mt-6">
            A Do It True experience
          </p>
        </section>
      </div>
    </main>
  );
}
