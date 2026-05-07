# AI Agents That Pay Their Bills — Consensus 2026 Miami

> Two hackathon submissions. One integrated narrative. Agent Studio initiates on Base — AgentPay approves on Solana.

**Live:** [consensus-submission.vercel.app](https://consensus-submission.vercel.app)

## 🎬 Demo

**Demo Video (Full Flow):** [30s Consensus Demo Reel — Miami intro → AgentPay on Seeker → Agent Studio on Seeker → Process animation](https://cdn.muapi.ai/outputs/9face131c0774a3892432e2a1e917e3c_consensus_demo_compressed.mp4)

**Seeker Screen Recordings:** [AgentPay on Seeker](https://cdn.muapi.ai/outputs/0bf67131c36b44838bb09aac61def522.mp4) · [Agent Studio on Seeker](https://cdn.muapi.ai/outputs/40a295da47984436bddb53da6f31f638.mp4)

### Screenshots

| AgentPay on Seeker | Agent Studio on Seeker | Both Phones |
|---------------------|----------------------|-------------|
| ![AgentPay](https://raw.githubusercontent.com/FranklinIV94/consensus-submission/main/public/demo_screens/seeker_agentpay.png) | ![Agent Studio](https://raw.githubusercontent.com/FranklinIV94/consensus-submission/main/public/demo_screens/seeker_agent_studio.png) | ![Both](https://raw.githubusercontent.com/FranklinIV94/consensus-submission/main/public/demo_screens/phones_side_by_side.jpg) |

## ⛓️ Cross-Chain Flow

1. **Agent Studio (Base):** AI agent pipeline reasons, validates via Bedrock, requests x402 micropayment on Base Sepolia
2. **AgentPay (Solana):** Human receives notification, approves/rejects payment on Solana Devnet
3. **Settlement:** Both chains settle independently — Base handles x402 data payments, Solana handles remittance approval with escrow


## Overview

This is the submission site for Consensus 2026 Miami, showcasing two integrated projects:

1. **AgentPay Solana** — The human control layer. Set spending limits, approve or reject AI agent transactions from your phone. One tap, instant settlement on Solana.
2. **Agent Studio** — The AI agent side. Multi-agent pipeline that reasons, validates risk via AWS Bedrock, and settles x402 payments on Base.

Together = full-stack agentic commerce.

## Key Numbers

| Metric | Value |
|--------|-------|
| On-chain instructions | 8 |
| AWS API endpoints | 11 |
| CloudFormation resources | 62+ |
| Settlement speed | <400ms |
| Chains | Solana + Base |

## Tech Stack

- **Solana Anchor** — Smart contracts for agent wallets, spending limits, and payment approval
- **Next.js 14** — Frontend for both apps
- **AWS Lambda + CDK** — Serverless backend for agent request processing
- **AWS Bedrock Nova Pro** — LLM risk evaluation
- **Coinbase Wallet SDK** — Smart wallet on Base Sepolia
- **DeepSeek AI** — LLM reasoning for payment requests
- **Firebase** — Real-time state management
- **x402 Protocol** — HTTP 402 micropayments on Base

## Live Apps

- **AgentPay:** [agentpay-solana.vercel.app](https://agentpay-solana.vercel.app) — Solana Seeker track
- **Agent Studio:** [agent-studio-fawn.vercel.app](https://agent-studio-fawn.vercel.app) — Coinbase + AWS Agentic track
- **Submission Site:** [consensus-submission.vercel.app](https://consensus-submission.vercel.app)

## Built By

**Franklin Bryant IV** — Architect & Decision Maker  
**Prospyr + Northstar** — AI Execution & Operations

Human defines outcome → AI agents build → Human reviews → AI deploys.

## License

MIT