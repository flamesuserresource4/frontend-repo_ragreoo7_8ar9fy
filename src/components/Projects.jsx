import { motion } from 'framer-motion'
import { Cpu, Camera, Bot, Brain, Network, Chip } from 'lucide-react'

const techChips = (stack) => (
  <div className="mt-3 flex flex-wrap gap-2">
    {stack.map((t) => (
      <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-cyan-200 border border-white/10">{t}</span>
    ))}
  </div>
)

const Card = ({ icon: Icon, title, desc, stack }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition relative overflow-hidden"
  >
    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-cyan-500/10 blur-2xl" />
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center ring-1 ring-white/10">
        <Icon className="w-5 h-5 text-cyan-300" />
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-slate-300 text-sm leading-relaxed">{desc}</p>
    {techChips(stack)}
  </motion.div>
)

export default function Projects() {
  const items = [
    { icon: Camera, title: 'Computer Vision System', desc: 'Real-time detection and tracking for industrial QA with edge deployment.', stack: ['Python', 'OpenCV', 'TensorRT', 'YOLOv8'] },
    { icon: Brain, title: 'Neural Network Classifier', desc: 'Transformer-based classifier with active learning and robust evaluation.', stack: ['PyTorch', 'Transformers', 'Weights & Biases'] },
    { icon: Bot, title: 'Autonomous Robot', desc: 'Perception, SLAM, and navigation on ROS 2 with multi-sensor fusion.', stack: ['ROS 2', 'Nav2', 'LiDAR', 'RTAB-Map'] },
    { icon: Cpu, title: 'Edge AI Pipeline', desc: 'Quantized models for ARM with CI/CD, monitoring, and OTA updates.', stack: ['ONNX', 'TFLite', 'Docker', 'Grafana'] },
    { icon: Network, title: 'NLP Service', desc: 'RAG pipeline with semantic search and domain adaptation.', stack: ['Python', 'Faiss', 'LangChain', 'FastAPI'] },
    { icon: Chip, title: 'Robotic Arm Control', desc: 'Imitation learning and MPC for precision pick-and-place.', stack: ['PyTorch', 'ROS', 'OpenCV', 'Arduino'] },
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_10%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Projects</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">A selection of work spanning perception, language, and robotics — from research to production systems.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
