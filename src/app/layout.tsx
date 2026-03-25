import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deca4Curio — Autonomous RWA Tokenisation Platform",
  description: "AI-powered real-world asset tokenisation. Reports in 90 seconds. Autonomous agent runs your deal end-to-end.",
  openGraph: {
    title: "Deca4Curio Platform v2",
    description: "Tokenise anything. AI runs the deal while you sleep.",
    url: "https://deca4curio.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
