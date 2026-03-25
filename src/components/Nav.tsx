"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #FFCB47, #E6A800)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, color: "#0A1628" }}>D</div>
          <span style={{ fontWeight: 800, fontSize: 17, color: "#0A1628" }}>Deca4Curio</span>
          <span style={{ fontSize: 11, fontWeight: 700, backgroundColor: "#F0FDF4", color: "#16A34A", padding: "2px 8px", borderRadius: 100, border: "1px solid #BBF7D0" }}>v2</span>
        </Link>

        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[
            { label: "Live Deals", href: "/live" },
            { label: "Reports", href: "/reports" },
            { label: "How It Works", href: "/#how" },
            { label: "Case Studies", href: "/#cases" },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: 14, fontWeight: 500, color: "#4A5568", textDecoration: "none" }}>{l.label}</Link>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/live" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "#16A34A", textDecoration: "none", backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0", padding: "8px 16px", borderRadius: 100 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#22C55E", display: "inline-block" }} className="pulse-dot" />
            LIVE
          </Link>
          <Link href="/#report" style={{ backgroundColor: "#FFCB47", color: "#0A1628", fontWeight: 700, padding: "10px 22px", borderRadius: 100, fontSize: 14, textDecoration: "none" }}>
            Get Report →
          </Link>
        </div>
      </div>
    </nav>
  );
}
