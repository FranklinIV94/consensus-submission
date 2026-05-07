/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState, useEffect, useRef } from 'react'

const VIDEOS = {
  miami: 'https://cdn.muapi.ai/outputs/756ba8f59e9e4c7993c43f62894c419b.mp4',
  agentpay: 'https://cdn.muapi.ai/outputs/0bf67131c36b44838bb09aac61def522.mp4',
  agentstudio: 'https://cdn.muapi.ai/outputs/40a295da47984436bddb53da6f31f638.mp4',
}

const PROJECTS = [
  {
    id: 'agentpay',
    name: 'AgentPay Solana',
    track: 'Solana Seeker Track',
    tagline: 'The payment layer for AI agents',
    description: 'Mobile-first dashboard letting humans govern AI agent spending in real-time. Built for the Solana Seeker phone — agents request payments, humans approve or reject with one tap.',
    stack: ['Solana Anchor', 'Next.js', 'DeepSeek AI', 'AWS Lambda'],
    live: 'agentpay-solana.vercel.app',
    github: 'github.com/FranklinIV94/agentpay-solana',
    gradientClass: 'from-purple-600 to-pink-500',
    borderColor: 'border-purple-500/20',
    textColor: 'text-purple-400',
    bgAccent: 'bg-purple-500/10',
    trackBadge: 'SOLANA SEEKER',
    video: VIDEOS.agentpay,
    steps: [
      { label: 'Agent requests payment', desc: 'AI agent submits tx on-chain' },
      { label: 'Human gets alert', desc: 'Seeker phone notification' },
      { label: 'One tap approve/reject', desc: 'Instant on-chain settlement' },
    ],
  },
  {
    id: 'studio',
    name: 'Agent Studio',
    track: 'Coinbase + AWS Agentic Track',
    tagline: 'AI agents that reason, act, and pay',
    description: 'Multi-agent AI pipeline for autonomous commerce. Director parses intent, Quant analyzes markets, Risk validates via AWS Bedrock Nova Pro, Execution settles x402 payments on Base.',
    stack: ['Coinbase Wallet', 'AWS Bedrock Nova Pro', 'Base Sepolia', 'Firebase'],
    live: 'agent-studio-fawn.vercel.app',
    github: 'github.com/FranklinIV94/agent-studio',
    gradientClass: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/20',
    textColor: 'text-cyan-400',
    bgAccent: 'bg-cyan-500/10',
    trackBadge: 'BASE + AWS',
    video: VIDEOS.agentstudio,
    steps: [
      { label: 'Director', desc: 'Parses intent with LLM' },
      { label: 'Quant', desc: 'Analyzes markets on Base' },
      { label: 'Risk (Bedrock)', desc: 'Validates via Nova Pro' },
      { label: 'Execution', desc: 'Settles x402 on-chain' },
    ],
  },
]

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

function SectionReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Custom branded play button overlay
function VideoPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="relative rounded-xl overflow-hidden bg-black border border-white/10">
      <video
        ref={videoRef}
        src={src}
        className="w-full aspect-video object-cover"
        controls={playing}
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      {!playing && (
        <button
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 flex items-center justify-center group"
          aria-label="Play demo"
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="relative w-16 h-16 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/25 transition-all shadow-2xl">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" className="ml-0.5">
              <path d="M1 2L17 10L1 18V2Z" fill="white" />
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative rounded-2xl p-7 border transition-all duration-300 bg-black/50 ${project.borderColor} pcard`}
      style={{ transform: hovered ? 'translateY(-6px) scale(1.01)' : 'scale(1)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-5">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${project.bgAccent} ${project.textColor} border ${project.borderColor}`}>
          {project.trackBadge}
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${project.textColor}`} />
          <span className="text-xs text-white/20">Live</span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
        <p className="text-sm text-white/50">{project.tagline}</p>
      </div>

      <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>

      <div className="mb-6">
        <p className="text-xs text-white/20 uppercase tracking-widest mb-3 font-medium slabel">How it works</p>
        <div className="space-y-2.5">
          {project.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${project.bgAccent} ${project.textColor} border ${project.borderColor} step-num ${i === 0 ? 'active' : ''}`}>
                {i + 1}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm text-white/80 font-medium">{step.label}</span>
                <span className="text-xs text-white/30">{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map(tech => (
          <span key={tech} className={`px-2.5 py-1 rounded-lg text-xs tpill ${project.bgAccent} ${project.textColor} border ${project.borderColor}`}>
            {tech}
          </span>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
          expanded
            ? 'border border-white/10 text-white/40'
            : `bg-gradient-to-r ${project.gradientClass} text-white shadow-lg`
        }`}
      >
        <span className="text-base">{expanded ? '▲ Close' : '▶ Watch Demo'}</span>
      </button>

      {expanded && <div className="mt-4"><VideoPlayer src={project.video} /></div>}

      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <a href={`https://${project.live}`} target="_blank" rel="noopener"
           className="text-xs text-white/40 hover:text-white/70 transition flex items-center gap-1 font-medium">
          ↗ {project.live}
        </a>
        <a href={`https://${project.github}`} target="_blank" rel="noopener"
           className="text-xs text-white/20 hover:text-white/40 transition flex items-center gap-1">
          {project.github}
        </a>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'agentpay' | 'studio'>('all')
  const filtered = PROJECTS.filter(p => activeTab === 'all' || p.id === activeTab)

  return (
    <main className="min-h-screen bg-black text-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate { animation: fadeInUp 0.8s ease-out forwards; }
        .hero-animate-delay-1 { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .hero-animate-delay-2 { animation: fadeInUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .hero-animate-delay-3 { animation: fadeInUp 0.8s ease-out 0.6s forwards; opacity: 0; }
      `}</style>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-white/80 tracking-wide">Consensus 2026 · Miami</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://github.com/FranklinIV94" target="_blank" rel="noopener"
               className="text-xs text-white/30 hover:text-white/70 transition">GitHub</a>
            <a href="https://agentpay-solana.vercel.app" target="_blank" rel="noopener"
               className="text-xs px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition font-medium">
              Open App ↓
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — Miami video IS the hook, title overlays on top */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Miami Beach — hero video as the first thing judges see */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/30 hero-animate mb-12">
            {/* Deep scrim for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/45 z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/25 via-transparent to-cyan-900/25 z-20 pointer-events-none" />
            {/* Video fills the container */}
            <video
              src={VIDEOS.miami}
              className="w-full block md:min-h-[40vh]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ maxHeight: '40vh', objectFit: 'cover' }}
            />
            {/* Title overlay at bottom of video */}
            <div className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-10 pb-5 md:pb-8">
              <span className="inline-block px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg bg-white/10 border border-white/20 text-[10px] md:text-xs text-white/70 backdrop-blur-md font-medium mb-3 md:mb-4">
                Miami Beach · Consensus 2026
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight md:leading-[1.02] mb-2 md:mb-4">
                <span className="text-white">AI Agents </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  That Pay Their Bills
                </span>
              </h1>
              <p className="text-xs md:text-lg text-white/40 max-w-md md:max-w-xl leading-relaxed hidden sm:block">
                Two hackathon submissions. One integrated narrative. Agent Studio initiates on Base — AgentPay approves on Solana.
              </p>
            </div>
          </div>

          {/* Stats row — gradient fill numbers */}
          <div className="grid grid-cols-3 gap-2 md:gap-px bg-transparent md:bg-white/10 rounded-2xl md:overflow-hidden hero-animate-delay-1 mt-8 md:mt-0">
            {[
              { stat: '8', label: 'On-chain instructions' },
              { stat: '11', label: 'AWS API endpoints' },
              { stat: '62+', label: 'CloudFormation resources' },
            ].map((item, i) => (
              <div key={i} className="bg-black/50 md:bg-black/70 backdrop-blur-xl px-4 py-5 md:px-10 md:py-8 text-center rounded-xl md:rounded-none border border-white/5">
                <div className="stat-n mb-1 md:mb-2 text-2xl md:text-base">{item.stat}</div>
                <div className="text-[10px] md:text-xs text-white/30 uppercase tracking-wider md:tracking-widest leading-tight">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="h-px w-16 bg-white/10" />
              <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] slabel">Built by</span>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <SectionReveal delay={0}>
              <div className="bg-black/50 rounded-2xl p-8 border border-white/5 hover:border-purple-500/20 transition-colors acard">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center text-2xl shrink-0">👤</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5">Franklin Bryant IV</h3>
                    <p className="text-sm font-semibold text-purple-400/80 mb-3 tracking-wide">Architect & Decision Maker</p>
                    <p className="text-white/50 text-sm leading-relaxed">Directs the work. Defines architecture. Makes the calls. Brings domain expertise in business operations, data security, and AI-accelerated development.</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Business Strategy', 'System Architecture', 'Quality Control'].map(skill => (
                        <span key={skill} className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300/70 text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={100}>
              <div className="bg-black/50 rounded-2xl p-8 border border-white/5 hover:border-cyan-500/20 transition-colors acard">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center text-2xl shrink-0">🤖</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5">Prospyr + Northstar</h3>
                    <p className="text-sm font-semibold text-cyan-400/80 mb-3 tracking-wide">Execution & Operations</p>
                    <p className="text-white/50 text-sm leading-relaxed">Franklin's AI team. Handles coding, deployment, research, and orchestration. Built the Anchor programs, wired the AWS CDK stack, deployed the frontends, and generated all AI video assets.</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Smart Contracts', 'AWS CDK', 'Frontend Dev', 'Video Generation'].map(skill => (
                        <span key={skill} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300/70 text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/50">💭 Franklin defines outcome</span>
              <span className="text-white/20 text-lg">→</span>
              <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/50">⚙️ AI agents build</span>
              <span className="text-white/20 text-lg">→</span>
              <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/50">🔍 Franklin reviews</span>
              <span className="text-white/20 text-lg">→</span>
              <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/50">🚀 AI deploys</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="h-px w-16 bg-white/10" />
              <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] slabel">The Problem</span>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: '💸', title: 'Unchecked Spending', desc: 'AI agents get API keys with unlimited access. One runaway agent = massive unexpected bills.', bg: 'bg-red-500/10' },
              { icon: '🔍', title: 'No Transparency', desc: 'By the time spending is visible, the money is gone. No real-time oversight.', bg: 'bg-orange-500/10' },
              { icon: '📱', title: 'No Mobile Control', desc: "Managing AI spending requires a desktop. By the time you check, it's already too late.", bg: 'bg-yellow-500/10' },
              { icon: '⛓️', title: 'Fragmented Oversight', desc: 'Agents operate across Base, Solana, Ethereum. Spending is invisible and siloed by chain.', bg: 'bg-white/5' },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 80}>
                <div className="bg-black/40 rounded-2xl p-7 border border-white/5 flex gap-5 hover:bg-black/60 transition-colors">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center text-3xl shrink-0`}>{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={400}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-baseline gap-3 px-8 py-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-5xl font-black text-white">$340M+</span>
                <span className="text-white/40 text-sm max-w-xs text-left">in unintended AI spending in 2025 alone</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="h-px w-16 bg-white/10" />
              <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] slabel">The Solution</span>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <SectionReveal delay={0}>
              <div className="bg-black/50 rounded-2xl p-8 border border-purple-500/10 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
                  <h3 className="text-xl font-bold text-white">AgentPay — Solana</h3>
                </div>
                <p className="text-white/40 text-sm mb-6 leading-relaxed">The human control layer. Set spending limits, approve or reject transactions from your phone — one tap, instant settlement.</p>
                <ul className="space-y-3">
                  {[['🔒', 'On-chain spending limits agents cannot exceed'], ['⚡', 'One-tap approve/reject with real-time alerts'], ['🪙', 'SKR staking for 2× spending limits'], ['📊', 'Live dashboard with daily spend tracking']].map(([icon, text]) => (
                    <li key={text} className="text-white/50 text-sm flex items-start gap-3"><span className="mt-0.5">{icon}</span><span>{text}</span></li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={100}>
              <div className="bg-black/50 rounded-2xl p-8 border border-cyan-500/10 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  <h3 className="text-xl font-bold text-white">Agent Studio — Base + AWS</h3>
                </div>
                <p className="text-white/40 text-sm mb-6 leading-relaxed">The AI agent side. Multi-agent pipeline that reasons, validates risk via AWS Bedrock, and settles x402 payments on Base.</p>
                <ul className="space-y-3">
                  {[['🧠', 'Director parses intent with LLM reasoning'], ['📈', 'Quant agent analyzes markets on Base'], ['🛡️', 'Risk validates via AWS Bedrock Nova Pro'], ['💳', 'Execution settles x402 payments on-chain']].map(([icon, text]) => (
                    <li key={text} className="text-white/50 text-sm flex items-start gap-3"><span className="mt-0.5">{icon}</span><span>{text}</span></li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={200}>
            <p className="text-center text-white/30 text-sm py-6 px-6 rounded-xl bg-white/[0.02] border border-white/5">
              Together = full-stack agentic commerce.{' '}
              <span className="text-purple-400 font-medium">Agent Studio pays on Base.</span>{' · '}
              <span className="text-cyan-400 font-medium">Human approves on Solana.</span>
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <span className="h-px w-16 bg-white/10" />
                <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] slabel">The Projects</span>
              </div>
              <h2 className="text-4xl font-black text-white hidden md:block">Two Tracks. One Narrative.</h2>
              <h2 className="text-3xl font-bold text-white md:hidden">Two Tracks</h2>
            </div>
          </SectionReveal>

          <div className="flex gap-1.5 bg-white/5 rounded-xl p-1.5 w-fit mb-10">
            {(['all', 'agentpay', 'studio'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab ? 'bg-white text-black' : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}>
                {tab === 'all' ? 'All' : tab === 'agentpay' ? 'AgentPay' : 'Agent Studio'}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <SectionReveal key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Infrastructure */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="h-px w-16 bg-white/10" />
              <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] slabel">AI Infrastructure</span>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: 'Prospyr', role: 'Cloud Gateway', desc: 'Email, WhatsApp, external communications. Production deployments via Oracle VPS.', color: 'border-purple-500/20', dot: 'bg-purple-500' },
              { name: 'Northstar', role: 'Heavy Lifting', desc: 'Local inference, Obsidian vault, research, deep work. This machine.', color: 'border-cyan-500/20', dot: 'bg-cyan-500' },
              { name: 'Southstar', role: 'Office Compute', desc: 'GPU workloads, dashboard rendering, resource-intensive tasks. Office Paled server.', color: 'border-green-500/20', dot: 'bg-green-500' },
            ].map((agent, i) => (
              <SectionReveal key={i} delay={i * 80}>
                <div className={`bg-black/40 rounded-xl p-6 border ${agent.color} hover:-translate-y-1 transition-transform`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-2.5 h-2.5 rounded-full ${agent.dot}`} />
                    <h3 className="font-semibold text-white">{agent.name}</h3>
                  </div>
                  <p className="text-xs text-white/30 mb-1">{agent.role}</p>
                  <p className="text-sm text-white/40">{agent.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <p className="text-center text-white/30 text-sm mt-8">All three agents share memory, coordinate via sessions, and operate under Franklin's oversight.</p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionReveal>
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="h-px w-12 bg-white/10" />
              <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] slabel">Tech Stack</span>
              <span className="h-px w-12 bg-white/10" />
            </div>
          </SectionReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {['Solana Anchor', 'Next.js 14', 'AWS Lambda', 'AWS Bedrock Nova Pro', 'Coinbase Wallet SDK', 'Base Sepolia', 'x402 Protocol', 'DeepSeek AI', 'Firebase', 'Vercel', 'AWS CDK', 'DynamoDB'].map(tech => (
              <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-sm tpill">{tech}</span>
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
