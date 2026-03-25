export type DealStatus = "structuring" | "compliance" | "live" | "listed";
export type AssetClass = "real-estate" | "gold" | "stablecoin" | "commodities" | "private-credit" | "art";

export interface Deal {
  id: string;
  name: string;
  assetClass: AssetClass;
  jurisdiction: string;
  targetRaise: string;
  tokenSymbol: string;
  chain: string;
  status: DealStatus;
  progress: number; // 0-100
  startedAt: string;
  updatedAt: string;
  description: string;
  reportUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface AgentTask {
  id: string;
  dealId?: string;
  type: "research" | "structuring" | "compliance" | "marketing" | "engineering" | "outreach";
  title: string;
  status: "running" | "completed" | "queued";
  startedAt: string;
  duration?: string;
}

export interface PlatformStats {
  totalDeals: number;
  liveDeals: number;
  totalRaised: string;
  pipeline: string;
  tasksCompleted: number;
  reportsGenerated: number;
  jurisdictions: number;
  weeklyGrowth: number;
}

export const deals: Deal[] = [
  {
    id: "xauh",
    name: "Herculis Gold Coin",
    assetClass: "gold",
    jurisdiction: "Panama / Switzerland",
    targetRaise: "$5M",
    tokenSymbol: "XAUH",
    chain: "TON + EVM",
    status: "listed",
    progress: 100,
    startedAt: "2024-09-01",
    updatedAt: "2025-03-01",
    description: "Swiss LBMA 999.9 physical gold tokenised on TON blockchain. 1 token = 1 gram of gold. Listed on Biconomy and CapitalDEX.",
    liveUrl: "https://xauh.gold",
    highlights: [
      "Listed on Biconomy.com and CapitalDEX",
      "Panama AML/CFT compliance framework",
      "LBMA-certified 999.9 fine gold backing",
      "Independent public tracker verification",
    ],
  },
  {
    id: "aud-stable",
    name: "AUD Stable",
    assetClass: "stablecoin",
    jurisdiction: "Switzerland / Australia",
    targetRaise: "$50M",
    tokenSymbol: "AUDS",
    chain: "Solana",
    status: "structuring",
    progress: 35,
    startedAt: "2026-03-01",
    updatedAt: "2026-03-25",
    description: "First institutional-grade AUD stablecoin. 1:1 AUD peg, 150% overcollateralised, Swiss foundation, FINMA no-action, ASIC/RBA aligned.",
    liveUrl: "https://audstable.com",
    highlights: [
      "Swiss Foundation via LEXR Tech Law",
      "Chainlink AUD/USD oracle live",
      "Longreach RE assets as Phase 2 collateral",
      "ASIC/RBA regulatory alignment from day 1",
    ],
  },
  {
    id: "swiss-mortgage-spv",
    name: "Swiss Mortgage SPV",
    assetClass: "private-credit",
    jurisdiction: "Switzerland",
    targetRaise: "$25M",
    tokenSymbol: "SMTG",
    chain: "Ethereum",
    status: "compliance",
    progress: 60,
    startedAt: "2026-02-10",
    updatedAt: "2026-03-20",
    description: "Tokenised Swiss residential mortgage portfolio. ERC-3643 compliant security token with quarterly yield distribution.",
    highlights: [
      "Swiss DLT Act compliant structure",
      "ERC-3643 permissioned token standard",
      "FINMA regulated SPV",
      "4.2% target annual yield",
    ],
  },
  {
    id: "au-re-longreach",
    name: "Longreach RE Portfolio",
    assetClass: "real-estate",
    jurisdiction: "Australia / Switzerland",
    targetRaise: "$30M",
    tokenSymbol: "LREP",
    chain: "Solana",
    status: "structuring",
    progress: 20,
    startedAt: "2026-03-15",
    updatedAt: "2026-03-25",
    description: "Tokenised Australian commercial real estate portfolio. Fractional ownership of institutional-grade assets via Swiss SPV.",
    highlights: [
      "Longreach Asset Management Partners",
      "Australian commercial RE — $10T+ market",
      "Phase 2 collateral for AUD Stable",
      "Swiss SPV via CurioInvest",
    ],
  },
  {
    id: "industrial-commodities",
    name: "Industrial Commodities Fund",
    assetClass: "commodities",
    jurisdiction: "Switzerland",
    targetRaise: "$15M",
    tokenSymbol: "ICFT",
    chain: "Ethereum",
    status: "compliance",
    progress: 45,
    startedAt: "2026-01-20",
    updatedAt: "2026-03-18",
    description: "Tokenised industrial commodity basket — copper, zinc, nickel — stored in Swiss Freeport. Monthly audit reconciliation.",
    highlights: [
      "Swiss Freeport storage",
      "Gübelin-certified assay",
      "Chainlink Proof of Reserve",
      "Institutional-grade custody",
    ],
  },
  {
    id: "auto-abs",
    name: "Auto Finance ABS",
    assetClass: "private-credit",
    jurisdiction: "UAE / Switzerland",
    targetRaise: "$20M",
    tokenSymbol: "AFBS",
    chain: "Polygon",
    status: "structuring",
    progress: 15,
    startedAt: "2026-03-10",
    updatedAt: "2026-03-24",
    description: "Asset-backed security token representing a pool of UAE auto finance receivables. DFSA-compliant structure via DIFC.",
    highlights: [
      "DFSA/DIFC regulatory framework",
      "UAE auto finance market $4B+",
      "Quarterly principal + interest payments",
      "BB+ rated underlying pool",
    ],
  },
];

export const agentTasks: AgentTask[] = [
  { id: "t1", dealId: "aud-stable", type: "compliance", title: "Drafting FINMA no-action letter brief via LEXR", status: "running", startedAt: "2m ago" },
  { id: "t2", dealId: "au-re-longreach", type: "research", title: "Australian commercial RE market analysis — Sydney CBD", status: "running", startedAt: "4m ago" },
  { id: "t3", dealId: "swiss-mortgage-spv", type: "engineering", title: "ERC-3643 token contract deployment to Ethereum mainnet", status: "running", startedAt: "6m ago" },
  { id: "t4", dealId: "aud-stable", type: "marketing", title: "Auto-posting AUD Stable blog to LinkedIn + Twitter", status: "completed", startedAt: "12m ago", duration: "3m 14s" },
  { id: "t5", dealId: "industrial-commodities", type: "structuring", title: "Swiss Freeport storage verification report", status: "completed", startedAt: "18m ago", duration: "7m 02s" },
  { id: "t6", dealId: "auto-abs", type: "research", title: "UAE auto finance receivables pool due diligence", status: "running", startedAt: "22m ago" },
  { id: "t7", type: "outreach", title: "Finding email addresses — European family offices", status: "running", startedAt: "25m ago" },
  { id: "t8", dealId: "au-re-longreach", type: "structuring", title: "Swiss SPV formation documents — Longreach RE", status: "queued", startedAt: "queued" },
  { id: "t9", type: "engineering", title: "Generating tokenisation report — inbound URL submission", status: "running", startedAt: "30s ago" },
  { id: "t10", type: "outreach", title: "Investor outreach sequence — Swiss family offices", status: "completed", startedAt: "35m ago", duration: "2m 55s" },
];

export const platformStats: PlatformStats = {
  totalDeals: 6,
  liveDeals: 1,
  totalRaised: "$3M+",
  pipeline: "$1B+",
  tasksCompleted: 1247,
  reportsGenerated: 89,
  jurisdictions: 12,
  weeklyGrowth: 34,
};
