import { Brain, Cpu, Bot, CircuitBoard } from 'lucide-react'
import { motion } from 'framer-motion'

const Feature = ({ icon: Icon, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center ring-1 ring-white/10">
        <Icon className="w-5 h-5 text-cyan-300" />
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-slate-300 text-sm leading-relaxed">{text}</p>
  </motion.div>
)

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_10%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About</h2>
          <p className="mt-4 text-slate-300">I design, train, and deploy machine intelligence across perception, language, and control. My work spans model research to product engineering, bringing AI into real-world systems and robots.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={Brain} title="Machine Learning" text="Supervised, unsupervised, and reinforcement learning with strong MLOps and evaluation practices." />
          <Feature icon={Cpu} title="Deep Learning" text="Modern architectures: CNNs, Transformers, Graph Nets, and diffusion models for complex tasks." />
          <Feature icon={CircuitBoard} title="Computer Vision & NLP" text="From detection and tracking to LLM-powered pipelines, robust data curation, and fine-tuning." />
          <Feature icon={Bot} title="Robotics" text="Perception, planning, and control on ROS with sensor fusion, SLAM, and embedded deployments." />
        </div>
      </div>
    </section>
  )
}
