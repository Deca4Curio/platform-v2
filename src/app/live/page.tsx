"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { deals, agentTasks, platformStats, type AgentTask } from "@/lib/deals";

const statusColors: Record<string, string> = {
  structuring: "#DBEAFE",
  compliance: "#FEF3C7",
  live: "#D1FAE5",
  listed: "#EDE9FE",
};
const statusText: Record<string, string> = {
  structuring: "#1E40AF",
  compliance: "#92400E",
  live: "#065F46",
  listed: "#5B21B6",
};
const taskTypeColors: Record<string, string> = {
  research: "#DBEAFE",
  structuring: "#FEF3C7",
  compliance: "#FCE7F3",
  marketing: "#D1FAE5",
  engineering: "#EDE9FE",
  outreach: "#FEE2E2",
};
const taskTypeText: Record<string, string> = {
  research: "#1E40AF",
  structuring: "#92400E",
  compliance: "#9D174D",
  marketing: "#065F46",
  engineering: "#5B21B6",
  outreach: "#991B1B",
};

const terminalLines = [
  "> Generating tokenisation report — inbound URL...",
  "> Drafting FINMA no-action brief via LEXR...",
  "> Running ERC-3643 contract deployment...",
  "> Posting AUD Stable blog to LinkedIn...",
  "> Finding email addresses — EU family offices...",
  "> Swiss SPV documents — Longreach RE portfolio...",
  "> Chainlink Proof of Reserve verification...",
  "> Auto-posting deal update to Twitter...",
  "> Market analysis — Australian commercial RE...",
  "> Investor outreach sequence — Swiss HNWIs...",
];

export default function LivePage() {
  const [stats, setStats] = useState(platformStats);
  const [tasks, setTasks] = useState<AgentTask[]>(agentTasks);
  const [lines, setLines] = useState<string[]>([terminalLines[0]]);
  const [tick, setTick] = useState(0);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTick(t => t + 1);
      setStats(s => ({
        ...s,
        tasksCompleted: s.tasksCompleted + Math.floor(Math.random() * 3),
        reportsGenerated: s.reportsGenerated + (Math.random() > 0.8 ? 1 : 0),
      }));
      setLines(l => {
        const next = terminalLines[Math.floor(Math.random() * terminalLines.length)];
        return [next, ...l].slice(0, 8);
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8F9FA" }}>
      <Nav />

      {/* Header */}
      <div style={{ backgroundColor: "#0A1628", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 100, padding: "6px 16px" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22C55E", display: "inline-block" }} className="pulse-dot" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#22C55E" }}>LIVE</span>
            </div>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Real-time agent activity · Updates every few seconds</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, color: "#FFFFFF", marginBottom: 12 }}>
            Deca4Curio — Live Deal Dashboard
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 560 }}>
            Watch AI agents structure, comply, and market real-world asset deals in real time. Every deal. Every task. Fully autonomous.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap", marginTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
            {[
              { label: "Pipeline Under MOU", value: stats.pipeline, sub: "institutional grade" },
              { label: "Tasks Completed", value: stats.tasksCompleted.toLocaleString(), sub: `+${stats.weeklyGrowth}% this week` },
              { label: "Reports Generated", value: stats.reportsGenerated.toString(), sub: "avg 90s each" },
              { label: "Jurisdictions", value: stats.jurisdictions.toString(), sub: "covered" },
              { label: "Live Deals", value: stats.liveDeals.toString(), sub: "active on chain" },
            ].map((s, i) => (
              <div key={i} style={{ flex: "1 1 160px", padding: "0 32px 0 0", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.08)" : "none", marginRight: i < 4 ? 32 : 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#FFCB47", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>

        {/* Left — Agent terminal + tasks */}
        <div style={{ flex: "1 1 360px" }}>

          {/* Terminal */}
          <div style={{ backgroundColor: "#0A1628", borderRadius: 16, padding: "20px 24px", marginBottom: 24, fontFamily: "'JetBrains Mono', monospace" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EF4444" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FFCB47" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#22C55E" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginLeft: 8 }}>agent@deca4curio ~ live</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {lines.map((line, i) => (
                <div key={`${line}-${i}-${tick}`} style={{ fontSize: 12, color: i === 0 ? "#22C55E" : "rgba(34,197,94,0.4)", fontFamily: "inherit", animation: i === 0 ? "slide-in 0.3s ease forwards" : "none" }}>
                  {line}
                  {i === 0 && <span style={{ animation: "pulse-dot 1s infinite" }}>▊</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Live tasks */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: 16, border: "1px solid #E2E8F0", overflow: "hidden" }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#0A1628" }}>Agent Tasks</span>
              <span style={{ fontSize: 12, color: "#9CA3AF" }}>{tasks.filter(t => t.status === "running").length} running now</span>
            </div>
            {tasks.map((task, i) => (
              <div key={task.id} style={{ padding: "14px 20px", borderBottom: i < tasks.length - 1 ? "1px solid #F8F9FA" : "none", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, marginTop: 3 }}>
                  {task.status === "running" && <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22C55E", display: "inline-block" }} className="pulse-dot" />}
                  {task.status === "completed" && <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#94A3B8", display: "inline-block" }} />}
                  {task.status === "queued" && <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E2E8F0", display: "inline-block" }} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: task.status === "completed" ? "#9CA3AF" : "#0A1628", marginBottom: 4, lineHeight: 1.4 }}>{task.title}</div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, backgroundColor: taskTypeColors[task.type], color: taskTypeText[task.type], padding: "2px 8px", borderRadius: 100, textTransform: "uppercase", letterSpacing: 0.5 }}>{task.type}</span>
                    <span style={{ fontSize: 11, color: "#9CA3AF" }}>{task.status === "running" ? `Running ${task.startedAt}` : task.status === "completed" ? `Done in ${task.duration}` : "Queued"}</span>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ padding: "12px 20px", backgroundColor: "#F8F9FA", textAlign: "center" }}>
              <span style={{ fontSize: 12, color: "#9CA3AF" }}>+{stats.tasksCompleted.toLocaleString()} tasks completed total</span>
            </div>
          </div>
        </div>

        {/* Right — Deals */}
        <div style={{ flex: "2 1 480px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: 2, marginBottom: 20 }}>ACTIVE DEALS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {deals.map(deal => (
              <div key={deal.id} style={{ backgroundColor: "#FFFFFF", borderRadius: 16, padding: "24px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(10,22,40,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0A1628", margin: 0 }}>{deal.name}</h3>
                      <span style={{ fontSize: 13, fontWeight: 800, color: "#FFCB47", backgroundColor: "#0A1628", padding: "2px 10px", borderRadius: 6 }}>{deal.tokenSymbol}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, fontWeight: 700, backgroundColor: statusColors[deal.status], color: statusText[deal.status], padding: "3px 10px", borderRadius: 100, textTransform: "uppercase", letterSpacing: 0.5 }}>{deal.status}</span>
                      <span style={{ fontSize: 11, color: "#9CA3AF" }}>{deal.jurisdiction}</span>
                      <span style={{ fontSize: 11, color: "#9CA3AF" }}>·</span>
                      <span style={{ fontSize: 11, color: "#9CA3AF" }}>{deal.chain}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#0A1628" }}>{deal.targetRaise}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>target raise</div>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, marginBottom: 16 }}>{deal.description}</p>

                {/* Progress bar */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: "#9CA3AF" }}>Progress</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#0A1628" }}>{deal.progress}%</span>
                  </div>
                  <div style={{ height: 6, backgroundColor: "#F1F5F9", borderRadius: 100, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${deal.progress}%`, background: deal.progress === 100 ? "linear-gradient(90deg, #22C55E, #16A34A)" : "linear-gradient(90deg, #FFCB47, #E6A800)", borderRadius: 100, transition: "width 1s ease" }} />
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                  {deal.highlights.map((h, i) => (
                    <span key={i} style={{ fontSize: 12, color: "#4A5568", backgroundColor: "#F8F9FA", border: "1px solid #E2E8F0", borderRadius: 6, padding: "3px 10px" }}>{h}</span>
                  ))}
                </div>

                {deal.liveUrl && (
                  <a href={deal.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, color: "#0A1628", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                    View live site ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: "#0A1628", padding: "60px 24px", marginTop: 40, textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#FFCB47", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>YOUR DEAL COULD BE HERE</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, color: "#FFFFFF", marginBottom: 16 }}>Paste your URL. Get a tokenisation report in 90 seconds.</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 32 }}>AI reads your assets, models the economics, generates a full report. Free. No crypto knowledge required.</p>
          <Link href="/" style={{ backgroundColor: "#FFCB47", color: "#0A1628", fontWeight: 800, padding: "15px 36px", borderRadius: 100, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
            Get Your Free Report →
          </Link>
        </div>
      </div>
    </div>
  );
}
