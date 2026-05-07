/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState, useRef } from 'react'

// Video URLs (CDN hosted via MuAPI)
const VIDEOS = {
  miami: 'https://cdn.muapi.ai/outputs/9f3d54aa24c14839bdff1ccfae881508.mp4',
  agentpay: 'https://cdn.muapi.ai/outputs/0bf67131c36b44838bb09aac61def522.mp4',
  agentstudio: 'https://cdn.muapi.ai/outputs/40a295da47984436bddb53da6f31f638.mp4',
}

const PROJECTS = [
  {
    id: 'agentpay',
    name: 'AgentPay Solana',
    track: 'Solana Seeker Track',
    tagline: 'The payment layer for AI agents on Solana',
    description: 'Mobile-first dashboard letting humans govern AI agent spending in real-time. Built for the Solana Seeker phone — agents request payments, humans approve or reject with one tap.',
    stack: ['Solana Anchor', 'Next.js', 'DeepSeek AI', 'AWS Lambda'],
    live: 'agentpay-solana.vercel.app',
    github: 'github.com/FranklinIV94/agentpay-solana',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
    video: VIDEOS.agentpay,
  },
  {
    id: 'studio',
    name: 'Agent Studio',
    track: 'Coinbase + AWS Agentic Track',
    tagline: 'AI agents that reason, act, and pay',
    description: 'Multi-agent AI pipeline for autonomous commerce. Director parses intent, Quant analyzes markets, Risk validates via AWS Bedrock Nova Pro, Execution settles x402 payments on Base.',
    stack: ['Coinbase Wallet SDK', 'AWS Bedrock', 'Base Sepolia', 'Firebase'],
    live: 'agent-studio-fawn.vercel.app',
    github: 'github.com/FranklinIV94/agent-studio',
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/30',
    video: VIDEOS.agentstudio,
  },
]

function VideoPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  
  return (
    <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/10">
      <video
        ref={ref}
        src={src}
        className="w-full aspect-video"
        controls
        muted
        playsInline
      />
    </div>
  )
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [showVideo, setShowVideo] = useState(false)
  
  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500`} />
      <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        {/* Track badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-green-400" />
            <span className="text-xs font-medium text-white/50 uppercase tracking-wider">{project.track}</span>
          </div>
          <a href={`https://${project.live}`} target="_blank" rel="noopener"
             className="text-xs text-white/30 hover:text-white/60 transition flex items-center gap-1">
            ↗ {project.live}
          </a>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
        <p className="text-sm text-white/40 mb-5">{project.tagline}</p>
        
        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed mb-6">{project.description}</p>
        
        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(tech => (
            <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/40 border border-white/5">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Video or CTA */}
        {showVideo ? (
          <VideoPlayer src={project.video} />
        ) : (
          <button
            onClick={() => setShowVideo(true)}
            className={`w-full py-3 rounded-xl bg-gradient-to-r ${project.color} font-medium text-white hover:opacity-90 transition flex items-center justify-center gap-2 text-sm`}
          >
            ▶ Watch in Action
          </button>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'agentpay' | 'studio'>('all')
  const filtered = PROJECTS.filter(p => activeTab === 'all' || p.id === activeTab)
  
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-sm font-medium text-white/80">Consensus 2026 · Miami</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/FranklinIV94" target="_blank" rel="noopener"
               className="text-xs text-white/30 hover:text-white/60 transition">GitHub</a>
            <a href="https://agentpay-solana.vercel.app" target="_blank" rel="noopener"
               className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition">
              Open App ↓
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Pre-title */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-white/20" />
            <span className="text-xs font-medium text-white/30 uppercase tracking-widest">Hackathon Submission · May 7, 2026</span>
          </div>
          
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">AI Agents</span>
            <br />
            <span className="text-white/90">That Pay Their Bills</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-white/40 max-w-2xl leading-relaxed mb-12">
            Two hackathon submissions. One integrated narrative. Agent Studio initiates payments on Base 
            — AgentPay approves them on Solana. Human oversight at every step, running on a phone.
          </p>
          
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
            {[
              { stat: '8', label: 'On-chain instructions' },
              { stat: '11', label: 'AWS API endpoints' },
              { stat: '62+', label: 'CloudFormation resources' },
            ].map((item, i) => (
              <div key={i} className="bg-black/60 px-8 py-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                <div className="text-xs text-white/30">{item.label}</div>
              </div>
            ))}
          </div>
          
          {/* Demo reel */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-white/30 uppercase tracking-widest">Demo Reel</span>
              <span className="text-xs text-white/20">·</span>
              <span className="text-xs text-white/30">Miami · AgentPay · Agent Studio</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <video
                src="/videos/consensus_demo_reel.mp4"
                className="w-full"
                controls
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-12 bg-white/10" />
            <span className="text-xs font-medium text-white/30 uppercase tracking-widest">Built by</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Human */}
            <div className="bg-black/40 rounded-2xl p-8 border border-white/5">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-xl shrink-0">
                  👤
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-0.5">Franklin Bryant IV</h3>
                  <p className="text-xs text-purple-400/80 mb-3">Architect & Decision Maker</p>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Directs the work. Defines architecture. Makes the calls. Brings domain expertise in business operations, data security, and AI-accelerated development.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Business Strategy', 'System Architecture', 'Quality Control'].map(skill => (
                      <span key={skill} className="px-2 py-1 rounded bg-white/5 text-xs text-white/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI */}
            <div className="bg-black/40 rounded-2xl p-8 border border-white/5">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-xl shrink-0">
                  🤖
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-0.5">Prospyr + Northstar</h3>
                  <p className="text-xs text-cyan-400/80 mb-3">Execution & Operations</p>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Franklin's AI team. Handles coding, deployment, research, and orchestration. Built the Anchor programs, wired the AWS CDK stack, deployed the frontends, and generated all AI video assets.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Smart Contracts', 'AWS CDK', 'Frontend Dev', 'Video Generation'].map(skill => (
                      <span key={skill} className="px-2 py-1 rounded bg-white/5 text-xs text-white/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Collaboration flow */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-white/30">
            <span className="px-3 py-1.5 rounded-lg bg-white/5">💭 Franklin defines outcome</span>
            <span className="text-white/10">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5">⚙️ AI agents build</span>
            <span className="text-white/10">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5">🔍 Franklin reviews</span>
            <span className="text-white/10">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5">🚀 AI deploys</span>
          </div>
        </div>
      </section>
      
      {/* The Problem */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-12 bg-white/10" />
            <span className="text-xs font-medium text-white/30 uppercase tracking-widest">The Problem</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '💸', title: 'Unchecked Spending', desc: 'AI agents get API keys with unlimited access. One runaway agent = massive unexpected bills.' },
              { icon: '🔍', title: 'No Transparency', desc: 'By the time spending is visible, the money is gone. No real-time oversight.' },
              { icon: '📱', title: 'No Mobile Control', desc: 'Managing AI spending requires a desktop. By the time you check, it\'s already too late.' },
              { icon: '⛓️', title: 'Fragmented Oversight', desc: 'Agents operate across Base, Solana, Ethereum. Spending is invisible and siloed by chain.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] rounded-xl p-6 border border-white/5 flex gap-4">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <span className="text-3xl font-bold text-white/20">$340M+</span>
            <span className="text-sm text-white/30 ml-3">in unintended AI spending in 2025 alone</span>
          </div>
        </div>
      </section>
      
      {/* The Solution */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-12 bg-white/10" />
            <span className="text-xs font-medium text-white/30 uppercase tracking-widest">The Solution</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* AgentPay */}
            <div className="bg-black/40 rounded-2xl p-8 border border-purple-500/10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <h3 className="text-lg font-semibold text-white">AgentPay — Solana</h3>
              </div>
              <p className="text-white/40 text-sm mb-6">The human control layer. Set spending limits, approve or reject transactions from your phone — one tap, instant settlement.</p>
              <ul className="space-y-3">
                {[
                  '🔒 On-chain spending limits agents cannot exceed',
                  '⚡ One-tap approve/reject with real-time alerts',
                  '🪙 SKR staking for 2× spending limits',
                  '📊 Live dashboard with daily spend tracking',
                ].map((item, i) => (
                  <li key={i} className="text-white/60 text-sm flex items-start gap-2">{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Agent Studio */}
            <div className="bg-black/40 rounded-2xl p-8 border border-cyan-500/10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-cyan-500" />
                <h3 className="text-lg font-semibold text-white">Agent Studio — Base + AWS</h3>
              </div>
              <p className="text-white/40 text-sm mb-6">The AI agent side. Multi-agent pipeline that reasons, validates risk via AWS Bedrock, and settles x402 payments on Base.</p>
              <ul className="space-y-3">
                {[
                  '🧠 Director parses intent with LLM reasoning',
                  '📈 Quant agent analyzes markets on Base',
                  '🛡️ Risk validates via AWS Bedrock Nova Pro',
                  '💳 Execution settles x402 payments on-chain',
                ].map((item, i) => (
                  <li key={i} className="text-white/60 text-sm flex items-start gap-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-center text-white/30 text-sm">
            Together = full-stack agentic commerce. <span className="text-purple-400/70">Agent Studio pays on Base.</span> · <span className="text-cyan-400/70">Human approves on Solana.</span>
          </p>
        </div>
      </section>
      
      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-white/10" />
            <span className="text-xs font-medium text-white/30 uppercase tracking-widest">The Projects</span>
          </div>
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-white">Two Tracks. One Narrative.</h2>
            <div className="flex gap-1 bg-white/5 rounded-lg p-1">
              {(['all', 'agentpay', 'studio'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-md text-xs transition ${
                    activeTab === tab ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/50'
                  }`}>
                  {tab === 'all' ? 'All' : tab === 'agentpay' ? 'AgentPay' : 'Studio'}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Infrastructure */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-12 bg-white/10" />
            <span className="text-xs font-medium text-white/30 uppercase tracking-widest">AI Infrastructure</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { name: 'Prospyr', role: 'Cloud Gateway', desc: 'Email, WhatsApp, external communications. Production deployments via Oracle VPS.', color: 'border-purple-500/20', dot: 'bg-purple-500' },
              { name: 'Northstar', role: 'Heavy Lifting', desc: 'Local inference, Obsidian vault, research, deep work. This machine.', color: 'border-cyan-500/20', dot: 'bg-cyan-500' },
              { name: 'Southstar', role: 'Office Compute', desc: 'GPU workloads, dashboard rendering, resource-intensive tasks. Office Paled server.', color: 'border-green-500/20', dot: 'bg-green-500' },
            ].map((agent, i) => (
              <div key={i} className={`bg-black/40 rounded-xl p-6 border ${agent.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${agent.dot}`} />
                  <h3 className="font-semibold text-white">{agent.name}</h3>
                </div>
                <p className="text-xs text-white/30 mb-1">{agent.role}</p>
                <p className="text-sm text-white/40">{agent.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/30 text-sm">
            All three agents share memory, coordinate via sessions, and operate under Franklin's oversight.
          </p>
        </div>
      </section>
      
      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="h-px w-12 bg-white/10" />
            <span className="text-xs font-medium text-white/30 uppercase tracking-widest">Tech Stack</span>
            <span className="h-px w-12 bg-white/10" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Solana Anchor', 'Next.js 14', 'AWS Lambda', 'AWS Bedrock Nova Pro', 'Coinbase Wallet SDK', 'Base Sepolia', 'x402 Protocol', 'DeepSeek AI', 'Firebase', 'Vercel', 'AWS CDK', 'DynamoDB'].map(tech => (
              <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See it live</h2>
          <p className="text-white/40 mb-10">Both apps are deployed and running. Open them on the Solana Seeker to see the full flow.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://agentpay-solana.vercel.app" target="_blank" rel="noopener"
               className="px-8 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition text-sm">
              Open AgentPay →
            </a>
            <a href="https://agent-studio-fawn.vercel.app" target="_blank" rel="noopener"
               className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/70 font-medium hover:bg-white/10 hover:text-white transition text-sm">
              Open Agent Studio →
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>Consensus 2026 · Miami, FL</span>
          <span>Human + AI Collaboration</span>
          <a href="https://github.com/FranklinIV94" target="_blank" rel="noopener"
             className="hover:text-white/60 transition flex items-center gap-1">
            @FranklinIV94 ↗
          </a>
        </div>
      </footer>
    </main>
  )
}