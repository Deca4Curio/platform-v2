# Deca4Curio v2 — Technical Architecture

**For: @DanDeca4**
**Author: Fernando Verboonen / Runable Agent**
**Date: March 2026**

---

## The Vision

Polsia ($6.2M ARR, 14 weeks, 1 founder) proved the model:
- Autonomous agent loop (Claude Agent SDK)
- $49/mo + 20% revenue share
- Public live dashboard = free viral marketing

We apply the same model to RWA tokenisation:
- Higher ACV ($500/mo + 0.5-1% of capital raised)
- Smaller TAM but much larger deal sizes ($1M-$100M per deal)
- Unique moat: CurioInvest compliance + XAUH as live proof

---

## Agent Architecture

```
User submits URL
      ↓
Report Agent (Claude Agent SDK)
  → scrape URL (WebFetch MCP)
  → identify assets (reasoning)
  → model economics (calculator tool)
  → generate 6-section report
  → create investor page mockup
      ↓
Deal Agent (if user activates)
  → Legal MCP → OtoCo SPV formation
  → Compliance MCP → KYC/AML (Sumsub)
  → Blockchain MCP → token deployment
  → Exchange MCP → listing applications
  → Investor MCP → outreach sequences
  → runs 24/7 until deal is live
```

---

## MCP Tools (to build)

### 1. Legal MCP
```typescript
// tools/legal.ts
- formEntity(type: 'swiss-spv' | 'delaware-llc' | 'wyoming-llc', params)
- generateSPVDocs(dealParams)
- otocoDeploy(entityType, walletAddress) // OtoCo API
```

### 2. Compliance MCP
```typescript
// tools/compliance.ts
- initiateKYC(userId, provider: 'sumsub' | 'synaps')
- checkJurisdiction(country, assetClass) // → applicable frameworks
- generateAMLReport(dealId)
```

### 3. Oracle MCP
```typescript
// tools/oracle.ts
- getPrice(asset: string) // Chainlink AggregatorV3
- getProofOfReserve(contractAddress)
- subscribeToFeed(feedAddress, callback)
```

### 4. Exchange MCP
```typescript
// tools/exchange.ts  
- submitListingApplication(exchange: 'biconomy' | 'capital-dex', tokenParams)
- createAMMPool(dex: 'uniswap' | 'raydium', params)
- getListingStatus(applicationId)
```

### 5. Investor MCP
```typescript
// tools/investor.ts
- findFamilyOffices(jurisdiction, assetClass) // email + contact finder
- sendOutreachSequence(contacts, dealId, template)
- trackCRMStatus(contactId)
```

### 6. Blockchain MCP
```typescript
// tools/blockchain.ts
- deployToken(standard: 'ERC20' | 'ERC1400' | 'ERC3643' | 'SPL', params)
- verifyContract(address, chain)
- getDeploymentStatus(txHash)
```

---

## Live Dashboard Architecture

```
/live page
  ↑
WebSocket (or SSE) → /api/live/stream
  ↑
Agent Activity Log (Redis pub/sub or Postgres)
  ↑
Agent Loop → logs every tool call to DB
```

Each agent task emits:
```json
{
  "id": "task_xyz",
  "dealId": "aud-stable",
  "type": "compliance",
  "title": "Drafting FINMA no-action brief",
  "status": "running",
  "startedAt": "2026-03-25T10:32:00Z",
  "output": null
}
```

Frontend polls or subscribes → renders live task feed like Polsia.

---

## Revenue Model

| Tier | Price | What they get |
|---|---|---|
| Free | $0 | Tokenisation report (lead gen) |
| Launch | $299/mo | Agent runs structuring + compliance |
| Pro | $999/mo | Full autonomous deal agent 24/7 |
| Transaction | 0.5-1% of raise | Applies to Pro deals only |

**Unit economics:**
- A $10M raise at 0.5% = $50,000 per deal
- 10 deals/month = $500K MRR from transaction fees alone
- This is why the free report funnel matters: convert 1% of reports to Pro

---

## Database Schema (Drizzle / D1)

```typescript
// deals table
id, name, assetClass, jurisdiction, targetRaise, tokenSymbol, 
chain, status, progress, userId, createdAt, updatedAt

// agent_tasks table  
id, dealId, type, title, status, input, output, 
startedAt, completedAt, duration, error

// reports table
id, userId, inputUrl, assetAnalysis, tokenEconomics,
regulatoryFramework, contractArchitecture, gtmStrategy,
financialProjections, createdAt

// users table (Better Auth)
id, email, name, company, plan, createdAt
```

---

## Phased Build Plan

**Phase 1 (2 weeks): Live dashboard + reports connected**
- Connect existing deca4curio.com report output to `/live` feed
- Each report generated shows up in real time on dashboard
- Deploy to Vercel

**Phase 2 (4 weeks): Agent loop**
- Claude Agent SDK integration
- Legal MCP (OtoCo)
- Compliance MCP (Sumsub)
- Deal activation flow (free → paid)

**Phase 3 (6 weeks): Full autonomous deal agent**
- Blockchain MCP (token deployment)
- Exchange MCP (listing applications)
- Investor MCP (outreach automation)
- Full 24/7 agent loop per deal

---

## Key References

- Polsia architecture: Claude Agent SDK + tool loop
- companies.sh: pre-packaged agent "companies" as npm packages
- OtoCo: https://otoco.io — on-chain entity formation API
- Frankencoin: collateral architecture reference for AUDS
- CMTAT (in Deca4Curio/CMTAT repo): ERC-1400 security token standard
