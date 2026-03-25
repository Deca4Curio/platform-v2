import Link from "next/link";
import Nav from "@/components/Nav";
import { deals, platformStats } from "@/lib/deals";

export default function Home() {
  const featuredDeals = deals.filter(d => d.status === "listed" || d.status === "live");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8F9FA" }}>
      <Nav />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #F0F4FF 60%, #FFF8E1 100%)", padding: "100px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            {[...Array(8)].map((_, i) => <circle key={i} cx={100 + i * 150} cy={300} r={80 + i * 25} fill="none" stroke="#0A1628" strokeWidth="1" />)}
          </svg>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <Link href="/live" style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 28, textDecoration: "none" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22C55E", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#16A34A" }}>Watch {platformStats.tasksCompleted.toLocaleString()}+ agent tasks live →</span>
          </Link>

          <h1 style={{ fontSize: "clamp(38px,6vw,64px)", fontWeight: 800, color: "#0A1628", lineHeight: 1.1, marginBottom: 24, maxWidth: 700 }}>
            Tokenise anything.<br />
            <span style={{ background: "linear-gradient(90deg, #FFCB47, #E6A800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI runs the deal</span>{" "}
            while you sleep.
          </h1>

          <p style={{ fontSize: 18, color: "#4A5568", maxWidth: 540, lineHeight: 1.7, marginBottom: 40 }}>
            Paste your URL. Get a tokenisation report in 90 seconds. Our autonomous agent structures the SPV, handles compliance, deploys the token, and connects you to investors — end-to-end.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 64 }}>
            <Link href="/#report" style={{ backgroundColor: "#FFCB47", color: "#0A1628", fontWeight: 700, padding: "14px 32px", borderRadius: 100, fontSize: 16, textDecoration: "none" }}>
              Get free report →
            </Link>
            <Link href="/live" style={{ backgroundColor: "transparent", color: "#0A1628", fontWeight: 600, padding: "14px 32px", borderRadius: 100, fontSize: 16, textDecoration: "none", border: "2px solid #0A1628" }}>
              Watch agents live
            </Link>
          </div>

          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: platformStats.pipeline, label: "Pipeline under MOU" },
              { value: platformStats.tasksCompleted.toLocaleString() + "+", label: "Agent tasks completed" },
              { value: platformStats.jurisdictions + "+", label: "Jurisdictions covered" },
              { value: "90s", label: "Avg report time" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#0A1628" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live deal strip */}
      <div style={{ backgroundColor: "#0A1628", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22C55E", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: 1 }}>Live agent activity</span>
          </div>
          {["Generating tokenisation report...", "FINMA no-action brief in progress...", "ERC-3643 deployment to Ethereum...", "Investor outreach sequence running...", "Swiss SPV documents — Longreach RE..."].map((t, i) => (
            <span key={i} style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>{t}</span>
          ))}
          <Link href="/live" style={{ marginLeft: "auto", fontSize: 12, fontWeight: 700, color: "#FFCB47", textDecoration: "none", flexShrink: 0 }}>View all →</Link>
        </div>
      </div>

      {/* How it works */}
      <section id="how" style={{ padding: "100px 24px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#FFCB47", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>HOW IT WORKS</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "#0A1628", marginBottom: 60 }}>From URL to listed token. Autonomous.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {[
              { step: "01", title: "Paste your URL", desc: "AI reads your business, identifies tokenisable assets, models the economics. 90 seconds." },
              { step: "02", title: "See your investor page", desc: "Live mockup of your crowdfunding page before signing anything. Full report with 6 sections." },
              { step: "03", title: "Agent structures the deal", desc: "SPV formation, KYC/AML, token standard selection, smart contract deployment. All autonomous." },
              { step: "04", title: "Launch & connect to investors", desc: "Exchange listings, DeFi liquidity, investor outreach. Agent runs 24/7 until capital is raised." },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#FFCB47", letterSpacing: 2, marginBottom: 16 }}>{s.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0A1628", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent stack */}
      <section style={{ padding: "100px 24px", backgroundColor: "#F8F9FA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#FFCB47", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>AUTONOMOUS AGENT STACK</div>
          <div style={{ display: "flex", gap: 60, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "#0A1628", flex: "1 1 340px", lineHeight: 1.2 }}>
              Polsia for RWA.<br />Built on Claude Agent SDK + MCP.
            </h2>
            <p style={{ fontSize: 16, color: "#4A5568", flex: "1 1 360px", lineHeight: 1.75 }}>
              Each deal gets a dedicated autonomous agent with purpose-built MCP tools. It runs continuously — researching, structuring, complying, marketing — until your token is live and funded.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { icon: "⚖️", title: "Legal MCP", desc: "OtoCo entity formation, Swiss SPV docs, smart contract legal wrappers. On-chain company in seconds." },
              { icon: "🔍", title: "Compliance MCP", desc: "KYC/AML via Sumsub/Synaps, FINMA/DFSA/MiCA jurisdiction routing, automated due diligence." },
              { icon: "🔗", title: "Oracle MCP", desc: "Chainlink price feeds, Proof of Reserve, real-time collateral verification for all asset classes." },
              { icon: "📈", title: "Exchange MCP", desc: "Capital DEX, Biconomy, Uniswap listings. AMM pool creation. Market-making automation." },
              { icon: "📧", title: "Investor MCP", desc: "Family office + HNWI email finder, personalised outreach sequences, CRM tracking." },
              { icon: "⛓️", title: "Blockchain MCP", desc: "ERC-20, ERC-1400, ERC-3643, Solana SPL token deployment. Audit-ready contract generation." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#FFFFFF", borderRadius: 16, padding: "28px", border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0A1628", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="cases" style={{ padding: "100px 24px", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#FFCB47", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>LIVE PROOF</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "#0A1628", marginBottom: 48 }}>Real deals. Real assets. On chain.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {deals.map(deal => (
              <div key={deal.id} style={{ backgroundColor: "#F8F9FA", borderRadius: 16, padding: "28px", border: "1px solid #E2E8F0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#FFCB47", backgroundColor: "#0A1628", padding: "3px 10px", borderRadius: 6 }}>{deal.tokenSymbol}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: deal.status === "listed" ? "#065F46" : "#92400E", backgroundColor: deal.status === "listed" ? "#D1FAE5" : "#FEF3C7", padding: "3px 10px", borderRadius: 100, textTransform: "uppercase" }}>{deal.status}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0A1628", marginBottom: 8 }}>{deal.name}</h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, marginBottom: 16 }}>{deal.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#0A1628" }}>{deal.targetRaise}</span>
                  {deal.liveUrl && <a href={deal.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, color: "#0A1628", textDecoration: "none" }}>View ↗</a>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/live" style={{ fontSize: 15, fontWeight: 700, color: "#0A1628", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, padding: "13px 28px", border: "2px solid #0A1628", borderRadius: 100 }}>
              Watch all deals live →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="report" style={{ backgroundColor: "#0A1628", padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#FFCB47", textTransform: "uppercase", letterSpacing: 2, marginBottom: 20 }}>GET STARTED FREE</div>
          <h2 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, color: "#FFFFFF", marginBottom: 16, lineHeight: 1.2 }}>
            What are your assets worth on chain?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 40 }}>Free report. 90 seconds. No crypto knowledge required.</p>
          <a href="https://deca4curio.com" style={{ backgroundColor: "#FFCB47", color: "#0A1628", fontWeight: 800, padding: "16px 40px", borderRadius: 100, fontSize: 16, textDecoration: "none", display: "inline-block" }}>
            Get your free report →
          </a>
          <div style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            Deca4 Advisory FZE · Dubai World Trade Center · Powered by CurioInvest
          </div>
        </div>
      </section>
    </div>
  );
}
