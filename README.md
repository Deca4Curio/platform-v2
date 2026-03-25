# Deca4Curio Platform v2

> Autonomous RWA tokenisation agent. Polsia for real-world assets.

## What's new in v2

- **`/live` dashboard** — Polsia-style real-time agent activity feed. Shows deals being structured, compliance running, tokens deploying, investors being contacted — live.
- **Deal pipeline** — All active tokenisation deals with progress, status, highlights
- **Agent task stream** — Live terminal showing autonomous agent actions
- **MCP stack** — Legal, Compliance, Oracle, Exchange, Investor, Blockchain MCPs
- **Homepage** — Rebuilt around the autonomous agent narrative

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Claude Agent SDK** (agent loop)
- **MCP integrations**: OtoCo (legal), Sumsub (KYC), Chainlink (oracle), Biconomy/CapitalDEX (exchange)

## Key routes

| Route | Description |
|---|---|
| `/` | Homepage — hero, how it works, agent stack, live deals |
| `/live` | **Live dashboard** — real-time agent activity, deal pipeline, terminal |
| `/reports` | Generated tokenisation reports |
| `/deals/[id]` | Individual deal pages |

## Live deals

| Token | Asset | Status |
|---|---|---|
| XAUH | Swiss LBMA gold | Listed ✅ |
| AUDS | AUD Stablecoin | Structuring 🔧 |
| SMTG | Swiss mortgage SPV | Compliance 📋 |
| LREP | Longreach RE Portfolio | Structuring 🔧 |
| ICFT | Industrial commodities | Compliance 📋 |
| AFBS | UAE auto finance ABS | Structuring 🔧 |

## Revenue model

- **Free**: Tokenisation report (lead gen)
- **Pro**: Autonomous agent runs your deal ($X/month)
- **Transaction fee**: % of capital raised (scales with deal size)

## Getting started

```bash
npm install
npm run dev
```

## For Dan (@DanDeca4)

See `v2-architecture.md` for full technical spec.
Key decisions:
- Agent loop: Claude Agent SDK (same as Polsia)
- MCP tools: see `src/lib/mcps/` (to be implemented)
- Live dashboard websocket: `src/app/api/live/route.ts` (to be implemented)
- Auth: Better Auth (same pattern as existing platform)

## Roadmap

- [ ] Real websocket connection to agent activity
- [ ] Individual deal pages with full agent log
- [ ] Report generation connected to `/live` feed
- [ ] OtoCo integration for on-chain entity formation
- [ ] Chainlink oracle MCP
- [ ] Investor CRM + outreach automation
