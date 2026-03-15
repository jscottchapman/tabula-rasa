import Link from "next/link";

export default function SampleReport() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
          >
            &larr; Back to Tabula Rasa
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-1 h-12 bg-amber-500 rounded-full" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Your Tabula Rasa Report
              </h1>
              <p className="text-slate-400 mt-1">
                Sample Report — Acme Auto Repair
              </p>
            </div>
          </div>
          <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3 text-amber-200 text-sm">
            This is a sample of the personalized report you would receive after
            completing the Tabula Rasa conversation. Your actual report will
            reflect your specific situation and goals.
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
                &ldquo;I have to do everything myself or it won&apos;t get done
                right.&rdquo; — This pattern has prevented delegation, led to
                burnout, and capped business growth at what one person can
                handle.
              </p>
            </div>
            <div>
              <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                Clean Slate Moment
              </h3>
              <p className="text-slate-200">
                Letting go of guilt about the failed partnership in 2019.
                Accepting that both parties made mistakes and that carrying the
                resentment is costing more than the partnership ever did.
              </p>
            </div>
            <div>
              <h3 className="text-sm text-slate-400 uppercase tracking-wider mb-1">
                90-Day Solution
              </h3>
              <p className="text-slate-200">
                Hire a shop foreman by end of month and hand off day-to-day
                scheduling. Free up 15 hours/week to focus on business
                development and the second location.
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
                <li>
                  Strong technical reputation — customers trust the quality of
                  work
                </li>
                <li>
                  14 years in business with consistent local demand
                </li>
                <li>
                  Owner has deep industry knowledge and relationships with parts
                  suppliers
                </li>
                <li>
                  Low customer acquisition cost through word-of-mouth referrals
                </li>
              </ul>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-5">
              <h3 className="font-semibold text-red-400 mb-3">Weaknesses</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  Owner-dependent — no operations run without direct
                  involvement
                </li>
                <li>
                  No financial management system — bookkeeping is reactive, not
                  proactive
                </li>
                <li>
                  Team retention issues — two experienced techs left in the past
                  year
                </li>
                <li>No online presence beyond a basic Google Business listing</li>
              </ul>
            </div>

            <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-5">
              <h3 className="font-semibold text-blue-500 mb-3">
                Opportunities
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  Second location feasible — demand exists in the neighboring
                  town
                </li>
                <li>
                  EV/hybrid service training could differentiate from
                  competitors
                </li>
                <li>
                  Fleet maintenance contracts with local businesses (untapped
                  revenue)
                </li>
                <li>
                  Digital marketing and online booking could increase capacity
                  utilization
                </li>
              </ul>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-5">
              <h3 className="font-semibold text-amber-400 mb-3">Threats</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  National chains (Midas, Firestone) competing on price and
                  convenience
                </li>
                <li>
                  Rising parts costs squeezing margins on routine maintenance
                </li>
                <li>
                  Tech shortage in the trades — harder and more expensive to
                  hire qualified mechanics
                </li>
                <li>
                  Owner burnout risk if delegation doesn&apos;t happen in the
                  next 6 months
                </li>
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
                  Hire & Delegate
                </h3>
                <p className="text-slate-400 text-sm">
                  Post the shop foreman position. Interview candidates. Make the
                  hire. Begin handing off daily scheduling and customer intake.
                  Set up QuickBooks or hire a part-time bookkeeper.
                </p>
              </div>
            </div>
            <div className="p-5 flex gap-4">
              <div className="text-amber-500 font-bold text-sm shrink-0 mt-0.5">
                DAYS 31-60
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-1">
                  Systematize
                </h3>
                <p className="text-slate-400 text-sm">
                  Document the top 10 recurring processes so the foreman can run
                  them without you. Set up weekly 30-minute check-ins instead of
                  hovering. Research fleet maintenance contracts.
                </p>
              </div>
            </div>
            <div className="p-5 flex gap-4">
              <div className="text-amber-500 font-bold text-sm shrink-0 mt-0.5">
                DAYS 61-90
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-1">
                  Build Forward
                </h3>
                <p className="text-slate-400 text-sm">
                  Use the freed-up 15 hours/week to scout the second location.
                  Pitch two fleet contracts. Build a basic website with online
                  booking. Evaluate: is the delegation working? Adjust.
                </p>
              </div>
            </div>
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
          <Link
            href="/chat"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Try the Conversation
          </Link>
          <p className="text-slate-600 text-xs mt-6">
            A Do It True experience
          </p>
        </section>
      </div>
    </main>
  );
}
