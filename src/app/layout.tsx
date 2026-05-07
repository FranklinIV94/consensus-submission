import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Agents That Pay Their Bills · Consensus 2026 Miami',
  description: 'Two hackathon submissions. One narrative. AgentPay on Solana + Agent Studio on Base — mobile-first AI payment governance with human oversight.',
  keywords: 'AI agents, blockchain, Solana, Base, Coinbase, AWS, x402, hackathon, Consensus 2026',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'AI Agents That Pay Their Bills · Consensus 2026',
    description: 'AgentPay on Solana · Agent Studio on Base · Human oversight at every step.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'AI Agents That Pay Their Bills - Consensus 2026 Miami',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents That Pay Their Bills · Consensus 2026',
    description: 'Mobile-first AI payment governance on Solana + Base. Human oversight at every step.',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
