import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          Tabula Rasa
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          Wipe the slate. Find the solution. Live it true.
        </p>

        <div className="border border-slate-800 rounded-lg p-6 text-left space-y-4 bg-slate-900/50">
          <p className="text-slate-300 leading-relaxed">
            This is a guided conversation that walks you through three things:
          </p>
          <ul className="space-y-3 text-slate-400">
            <li className="flex gap-3">
              <span className="text-amber-500 font-bold shrink-0">01</span>
              <span>
                <strong className="text-slate-200">The Clean Slate</strong> —
                Let go of the stories and guilt holding you back
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 font-bold shrink-0">02</span>
              <span>
                <strong className="text-slate-200">Your Operating System</strong>{" "}
                — Identify the patterns running your life on autopilot
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 font-bold shrink-0">03</span>
              <span>
                <strong className="text-slate-200">Solutions First</strong> —
                Stop managing problems. Start building solutions.
              </span>
            </li>
          </ul>
          <p className="text-slate-500 text-sm pt-2">
            Takes about 10-15 minutes. Everything you share stays in this
            conversation.
          </p>
        </div>

        <Link
          href="/chat"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start the Conversation
        </Link>

        <p className="text-slate-600 text-sm">
          A{" "}
          <span className="text-slate-500 font-medium">Do It True</span>{" "}
          experience
        </p>
      </div>
    </main>
  );
}
