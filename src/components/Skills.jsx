import { motion } from 'framer-motion'

const Skill = ({ name, level }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-200">{name}</span>
      <span className="text-cyan-300">{level}%</span>
    </div>
    <div className="h-2 rounded bg-white/5 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  </div>
)

export default function Skills() {
  const core = [
    { name: 'Python', level: 95 },
    { name: 'TensorFlow', level: 85 },
    { name: 'PyTorch', level: 92 },
    { name: 'Keras', level: 80 },
  ]

  const domains = [
    { name: 'Computer Vision', level: 90 },
    { name: 'NLP', level: 82 },
    { name: 'Robotics (ROS, Arduino)', level: 78 },
    { name: 'Deep Learning Architectures', level: 88 },
  ]

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_10%,rgba(8,145,178,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skills</h2>
          <p className="mt-3 text-slate-300">A mix of research depth and engineering rigor across the full AI stack — from data to deployment.</p>

          <div className="mt-8 space-y-5">
            {core.map((s) => (
              <Skill key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <h3 className="text-white font-semibold">Domains & Systems</h3>
          <div className="mt-4 space-y-5">
            {domains.map((s) => (
              <Skill key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
