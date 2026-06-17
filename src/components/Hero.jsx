import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          AI &amp; Data Engineer
        </div>

        <h1 className={styles.name}>
          Aishwarya<br />
          <span className={styles.gradient}>Golla</span>
        </h1>

        <p className={styles.tagline}>
          Building intelligent systems that{' '}
          <span className={styles.highlight}>automate</span>,{' '}
          <span className={styles.highlight}>learn</span>, and{' '}
          <span className={styles.highlight}>scale</span>.
        </p>

        <p className={styles.sub}>
          2+ years crafting Generative AI solutions, RAG pipelines, AI agents,
          and cloud-native data platforms across healthcare, finance &amp; insurance.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnSecondary}>Get in Touch</a>
        </div>

        <div className={styles.techRow}>
          {['Claude / Anthropic', 'LangChain', 'RAG', 'AWS', 'Azure', 'GCP', 'Python'].map(t => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
