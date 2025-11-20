import { useState, useEffect } from 'react'
import { Menu, X, Bot } from 'lucide-react'

const NavLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm md:text-[15px] text-slate-200 hover:text-cyan-300 transition-colors px-3 py-2 rounded-md hover:bg-white/5"
  >
    {label}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center ring-1 ring-white/20 shadow-lg shadow-cyan-500/20">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-200 font-semibold tracking-tight group-hover:text-white">AI • ML • Robotics</span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            <NavLink href="#home" label="Home" />
            <NavLink href="#about" label="About" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#contact" label="Contact" />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:text-white hover:bg-white/10"
            aria-label="Toggle navigation"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#home" label="Home" onClick={close} />
            <NavLink href="#about" label="About" onClick={close} />
            <NavLink href="#projects" label="Projects" onClick={close} />
            <NavLink href="#skills" label="Skills" onClick={close} />
            <NavLink href="#contact" label="Contact" onClick={close} />
          </div>
        </div>
      )}
    </header>
  )
}
