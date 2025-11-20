import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_90%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contact</h2>
          <p className="mt-3 text-slate-300">Interested in collaborating or discussing a project? Reach out through any of the channels below.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl">
          <a href="https://github.com/" target="_blank" className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center ring-1 ring-white/10">
              <Github className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-white font-semibold">GitHub</p>
              <p className="text-slate-400 text-sm group-hover:text-slate-300">Open-source work and code</p>
            </div>
          </a>
          <a href="https://linkedin.com/" target="_blank" className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center ring-1 ring-white/10">
              <Linkedin className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-white font-semibold">LinkedIn</p>
              <p className="text-slate-400 text-sm group-hover:text-slate-300">Professional profile</p>
            </div>
          </a>
          <a href="mailto:your.email@example.com" className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center ring-1 ring-white/10">
              <Mail className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-white font-semibold">Email</p>
              <p className="text-slate-400 text-sm group-hover:text-slate-300">your.email@example.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
