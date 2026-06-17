import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Robot from './components/Robot'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Robot />
      </main>
      <footer className={styles.footer}>
        <p>
          Built with React &amp; ♥ by{' '}
          <span className={styles.name}>Aishwarya Golla</span>
          {' '}· AI &amp; Data Engineer
        </p>
        <p className={styles.sub}>
          Powered by Vite · Hosted on GitHub Pages
        </p>
      </footer>
    </div>
  )
}

export default App
