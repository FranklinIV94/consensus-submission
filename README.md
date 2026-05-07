# AI Agents That Pay Their Bills — Consensus 2026 Miami

> Two hackathon submissions. One integrated narrative. Agent Studio initiates on Base — AgentPay approves on Solana.

**Live:** [consensus-submission.vercel.app](https://consensus-submission.vercel.app)

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