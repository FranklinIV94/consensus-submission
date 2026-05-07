import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentPay × Agent Studio | Consensus 2026 Miami',
  description: 'Two hackathon submissions. One narrative. AI agents that pay their bills — with humans in the loop, on-chain, across chains. Built for Consensus 2026 Miami.',
  keywords: 'AI agents, blockchain, Solana, Base, Coinbase, AWS, x402, hackathon, Consensus 2026',
  openGraph: {
    title: 'AgentPay × Agent Studio | Consensus 2026 Miami',
    description: 'AI agents that reason, act, and pay. Mobile-first payment governance on Solana + multi-agent pipeline on Base.',
    type: 'website',
    images: [
      {
        url: 'https://cdn.muapi.ai/outputs/9f3d54aa24c14839bdff1ccfae881508.mp4/thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Agents That Pay Their Bills - Consensus 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentPay × Agent Studio | Consensus 2026',
    description: 'AI agents that reason, act, and pay.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}