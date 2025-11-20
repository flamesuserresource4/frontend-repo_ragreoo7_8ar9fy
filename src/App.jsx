import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-400/30 selection:text-white">
      <Navbar />

      {/* Hero with Spline */}
      <Hero />

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Your Name — AI · ML · DL · Robotics
        </div>
      </footer>
    </div>
  )
}

export default App
