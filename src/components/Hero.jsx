import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(800px_500px_at_0%_100%,rgba(59,130,246,0.25),transparent)]" />

      {/* Spline 3D scene */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-cyan-300/90 bg-white/5 px-3 py-1 rounded-full ring-1 ring-white/10"
          >
            AI • Machine Learning • Deep Learning • Robotics
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Building intelligent systems that see, learn, and act
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-slate-300 leading-relaxed"
          >
            I specialize in applied AI across vision, NLP, and robotics — delivering production-grade models, edge deployments, and end-to-end automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-900 font-semibold px-5 py-3 ring-1 ring-white/10 shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 text-cyan-200 px-5 py-3 hover:bg-white/5 transition">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* gradient overlay not blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
    </section>
  )
}
