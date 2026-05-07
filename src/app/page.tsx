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

function VideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const [playing, setPlaying] = useState(false)
  const ref = useRef<HTMLVideoElement>(null)
  
  return (
    <div className="relative rounded-xl overflow-hidden bg-black/50 border border-white/10">
      <video
        ref={ref}
        src={src}
        poster={poster}
        className="w-full aspect-video object-cover"
        controls
        muted
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, featured = false }: { project: typeof PROJECTS[0]; featured?: boolean }) {
  const [showVideo, setShowVideo] = useState(false)
  
  return (
    <div className={`relative group ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
      <div className="relative glass rounded-2xl p-6 h-full">
        {/* Track badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 mb-4">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {project.track}
        </div>
        
        {/* Title */}
        <h3 className={`text-2xl font-bold gradient-text mb-2`}>{project.name}</h3>
        <p className="text-white/60 mb-4">{project.tagline}</p>
        
        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-6">{project.description}</p>
        
        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(tech => (
            <span key={tech} className="px-2 py-1 rounded bg-white/5 text-xs text-white/50">
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
            className={`w-full py-3 rounded-xl bg-gradient-to-r ${project.color} font-semibold text-white hover:opacity-90 transition flex items-center justify-center gap-2`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.554z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch in Action
          </button>
        )}
        
        {/* Links */}
        <div className="flex items-center gap-4 mt-4">
          <a href={`https://${project.live}`} target="_blank" rel="noopener" 
             className="text-sm text-white/40 hover:text-white transition flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {project.live}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'agentpay' | 'studio'>('all')
  
  const filtered = PROJECTS.filter(p => activeTab === 'all' || p.id === activeTab)
  
  return (
    <main className="min-h-screen hero-gradient">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/80">Consensus 2026 Miami • May 7</span>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI Agents</span>
            <br />
            <span className="text-white">That Pay Their Bills</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Two hackathon submissions. One narrative. AI agents spending money autonomously — 
            with humans in the loop, on-chain, across chains.
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white hover:opacity-90 transition flex items-center gap-2">
              See the Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a href="https://github.com/FranklinIV94" target="_blank" rel="noopener"
               className="px-8 py-4 rounded-xl glass font-semibold text-white/80 hover:text-white transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373 12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
          </div>
          
          {/* Demo reel preview */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-lg opacity-30" />
            <div className="relative glass rounded-2xl overflow-hidden">
              <video
                src="/videos/consensus_demo_reel.mp4"
                className="w-full aspect-video"
                controls
                muted
                playsInline
                poster="/agentpay_hero.png"
              />
            </div>
            <p className="text-white/40 text-sm mt-3">AI-generated demo reel • Miami drone + AgentPay + Agent Studio</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* The Problem */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-red-400">The Problem</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '💸', title: 'Unchecked Spending', desc: 'AI agents get API keys with unlimited access. One runaway agent = massive bills.' },
              { icon: '🔍', title: 'No Transparency', desc: 'You find out what your agent spent after the money\'s gone.' },
              { icon: '📱', title: 'No Mobile Control', desc: 'Managing AI spending requires a desktop. By the time you check, it\'s too late.' },
              { icon: '⛓️', title: 'Fragmented Oversight', desc: 'Agents operate on Base, Solana, Ethereum. Spending is invisible and siloed.' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-6 flex gap-4">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/40 mt-12 text-lg">
            <span className="text-purple-400">$340M+</span> in unintended AI spending in 2025 alone.
          </p>
        </div>
      </section>
      
      {/* The Solution */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">The Solution</span>
          </h2>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">AgentPay (Solana)</h3>
                  <p className="text-white/60 mb-6">The mobile control layer. Humans set spending limits, approve or reject transactions from their Seeker phone — one tap, instant settlement.</p>
                  <ul className="space-y-3">
                    {['🔒 On-chain spending limits agents cannot exceed', '⚡ One-tap approve/reject with real-time alerts', '🪙 SKR staking for 2x spending limits', '📊 Live dashboard with daily spend tracking'].map((item, i) => (
                      <li key={i} className="text-white/80 text-sm flex items-start gap-2">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Agent Studio (Base + AWS)</h3>
                  <p className="text-white/60 mb-6">The AI agent side. Multi-agent pipeline that reasons, validates risk via AWS Bedrock, and settles x402 payments on Base.</p>
                  <ul className="space-y-3">
                    {['🧠 Director parses intent with LLM reasoning', '📈 Quant analyzes markets on Base', '🛡️ Risk validates via AWS Bedrock Nova Pro', '💳 Execution settles x402 payments on-chain'].map((item, i) => (
                      <li key={i} className="text-white/80 text-sm flex items-start gap-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Connection arrow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-2xl">⛓️</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-white/40 mt-8 text-sm">
            Together: full-stack agentic commerce. <span className="text-purple-400">Agent Studio pays on Base.</span> <span className="text-cyan-400">Human approves on Solana.</span>
          </p>
        </div>
      </section>
      
      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">The Projects</span>
          </h2>
          <p className="text-white/40 text-center mb-12">Two tracks. Two teams. One narrative.</p>
          
          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {(['all', 'agentpay', 'studio'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm transition ${
                  activeTab === tab 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/40 hover:text-white/60'
                }`}>
                {tab === 'all' ? 'All Projects' : tab === 'agentpay' ? 'AgentPay' : 'Agent Studio'}
              </button>
            ))}
          </div>
          
          {/* Project cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Architecture */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            <span className="gradient-text">Built Different</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: '8', label: 'On-chain instructions', sub: 'Anchor program deployed to Solana devnet' },
              { stat: '11', label: 'AWS API endpoints', sub: 'Lambda + DynamoDB + CloudWatch' },
              { stat: '62+', label: 'CloudFormation resources', sub: 'CDK stack, production-grade infra' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <div className="text-5xl font-bold gradient-text mb-2">{item.stat}</div>
                <div className="text-white font-semibold mb-1">{item.label}</div>
                <div className="text-white/40 text-sm">{item.sub}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 glass rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Solana Anchor', 'Next.js 14', 'AWS Lambda', 'AWS Bedrock Nova Pro', 'Coinbase Wallet SDK', 'Base Sepolia', 'x402 Protocol', 'DeepSeek AI', 'Firebase', 'Vercel'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Ready to see it live?</span>
          </h2>
          <p className="text-white/60 mb-10">Both projects are deployed and working. Open them on the Solana Seeker phone.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://agentpay-solana.vercel.app" target="_blank" rel="noopener"
               className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white hover:opacity-90 transition">
              Open AgentPay →
            </a>
            <a href="https://agent-studio-fawn.vercel.app" target="_blank" rel="noopener"
               className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white hover:opacity-90 transition">
              Open Agent Studio →
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm">
            Built for <span className="text-purple-400">Consensus 2026</span> • Miami, FL
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/FranklinIV94" target="_blank" rel="noopener"
               className="text-white/40 hover:text-white transition text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373 12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              @FranklinIV94
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}