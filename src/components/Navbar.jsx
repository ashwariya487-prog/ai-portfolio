import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'AI Assistant', href: '#robot' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        <span className={styles.logoAI}>AI</span>
        <span className={styles.logoDot}>•</span>
        <span className={styles.logoName}>Aishwarya</span>
      </a>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : ''} />
        <span className={menuOpen ? styles.barHide : ''} />
        <span className={menuOpen ? styles.barOpen2 : ''} />
      </button>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
