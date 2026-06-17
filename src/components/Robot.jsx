import { useState, useRef, useCallback } from 'react'
import styles from './Robot.module.css'

const SPEECH_TEXT = `Hi there! I'm Aishwarya's AI assistant, and I'm thrilled to introduce her to you.

Aishwarya Golla is an AI and Data Engineer with over 2 years of experience designing and delivering intelligent automation solutions, cloud-native data platforms, and AI-powered applications across healthcare, financial services, and insurance domains.

She has hands-on experience developing Generative AI solutions, Retrieval-Augmented Generation systems, AI agents, workflow automation tools, and data-driven products using Python, SQL, cloud technologies, and modern LLM frameworks.

Aishwarya has a proven ability to transform ambiguous business challenges into scalable technical solutions through stakeholder collaboration, requirements gathering, discovery sessions, and end-to-end product delivery.

She is experienced in building AI-enabled workflows that improve operational efficiency, automate manual processes, and support data-informed decision-making.

She is a strong communicator with experience training users, creating technical documentation, developing knowledge-sharing resources, and driving AI adoption across technical and non-technical teams.

Aishwarya is passionate about leveraging Artificial Intelligence, automation, and data technologies to solve real-world challenges in education, healthcare, public service, and community-focused initiatives.

She is committed to building responsible, user-centric AI solutions that create sustainable impact, improve accessibility, and enable long-term organizational success.

Thank you for visiting her portfolio. If you'd like to connect, you can reach her at ishwaryaa2k1 at gmail dot com. Let's build something amazing together!`

function RobotSVG({ isTalking }) {
  return (
    <svg
      viewBox="0 0 200 280"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.robotSvg} ${isTalking ? styles.talking : ''}`}
    >
      {/* Antenna */}
      <line x1="100" y1="18" x2="100" y2="38" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="12" r="7" fill="#c084fc" className={isTalking ? styles.antennaGlow : ''} />

      {/* Head */}
      <rect x="52" y="38" width="96" height="76" rx="18" fill="#1a1530" stroke="#7c3aed" strokeWidth="2" />

      {/* Eyes */}
      <ellipse cx="78" cy="68" rx="13" ry="13" fill="#0f0d1a" stroke="#a855f7" strokeWidth="1.5" />
      <ellipse cx="122" cy="68" rx="13" ry="13" fill="#0f0d1a" stroke="#a855f7" strokeWidth="1.5" />
      {/* Pupils */}
      <circle cx="78" cy="68" r="7" fill="#7c3aed" className={isTalking ? styles.eyeGlow : ''} />
      <circle cx="122" cy="68" r="7" fill="#7c3aed" className={isTalking ? styles.eyeGlow : ''} />
      {/* Eye shine */}
      <circle cx="81" cy="65" r="2.5" fill="#e9d5ff" opacity="0.9" />
      <circle cx="125" cy="65" r="2.5" fill="#e9d5ff" opacity="0.9" />

      {/* Mouth */}
      <rect x="72" y="94" width="56" height="10" rx="5" fill="#0f0d1a" stroke="#a855f7" strokeWidth="1.5" />
      {isTalking && (
        <>
          <rect x="76" y="96" width="8" height="6" rx="2" fill="#a855f7" className={styles.mouthBar} style={{ animationDelay: '0ms' }} />
          <rect x="88" y="95" width="8" height="8" rx="2" fill="#c084fc" className={styles.mouthBar} style={{ animationDelay: '100ms' }} />
          <rect x="100" y="96" width="8" height="6" rx="2" fill="#a855f7" className={styles.mouthBar} style={{ animationDelay: '200ms' }} />
          <rect x="112" y="95" width="8" height="8" rx="2" fill="#c084fc" className={styles.mouthBar} style={{ animationDelay: '300ms' }} />
        </>
      )}

      {/* Neck */}
      <rect x="90" y="114" width="20" height="14" rx="4" fill="#1a1530" stroke="#7c3aed" strokeWidth="1.5" />

      {/* Body */}
      <rect x="40" y="128" width="120" height="100" rx="20" fill="#1a1530" stroke="#7c3aed" strokeWidth="2" />

      {/* Chest panel */}
      <rect x="62" y="148" width="76" height="58" rx="10" fill="#0f0d1a" stroke="#a855f7" strokeWidth="1.5" />

      {/* Chest indicators */}
      <circle cx="80" cy="168" r="8" fill={isTalking ? '#a855f7' : '#3b1f6e'} className={isTalking ? styles.chestLight : ''} />
      <circle cx="100" cy="168" r="8" fill={isTalking ? '#c084fc' : '#3b1f6e'} className={isTalking ? styles.chestLight2 : ''} />
      <circle cx="120" cy="168" r="8" fill={isTalking ? '#7c3aed' : '#3b1f6e'} className={isTalking ? styles.chestLight : ''} />

      {/* Chest display bars */}
      <rect x="70" y="186" width="60" height="4" rx="2" fill="#3b1f6e" />
      <rect x="70" y="186" width={isTalking ? '60' : '30'} height="4" rx="2" fill="#a855f7" className={isTalking ? styles.progressBar : ''} />
      <rect x="70" y="196" width="60" height="4" rx="2" fill="#3b1f6e" />
      <rect x="70" y="196" width={isTalking ? '45' : '20'} height="4" rx="2" fill="#7c3aed" className={isTalking ? styles.progressBar2 : ''} />

      {/* Left Arm */}
      <rect x="10" y="132" width="28" height="70" rx="14" fill="#1a1530" stroke="#7c3aed" strokeWidth="2"
        className={isTalking ? styles.armLeft : ''} />
      {/* Left Hand */}
      <circle cx="24" cy="208" r="12" fill="#1a1530" stroke="#a855f7" strokeWidth="1.5" />

      {/* Right Arm */}
      <rect x="162" y="132" width="28" height="70" rx="14" fill="#1a1530" stroke="#7c3aed" strokeWidth="2"
        className={isTalking ? styles.armRight : ''} />
      {/* Right Hand */}
      <circle cx="176" cy="208" r="12" fill="#1a1530" stroke="#a855f7" strokeWidth="1.5" />

      {/* Legs */}
      <rect x="62" y="228" width="32" height="40" rx="12" fill="#1a1530" stroke="#7c3aed" strokeWidth="2" />
      <rect x="106" y="228" width="32" height="40" rx="12" fill="#1a1530" stroke="#7c3aed" strokeWidth="2" />
      {/* Feet */}
      <ellipse cx="78" cy="270" rx="18" ry="9" fill="#1a1530" stroke="#a855f7" strokeWidth="1.5" />
      <ellipse cx="122" cy="270" rx="18" ry="9" fill="#1a1530" stroke="#a855f7" strokeWidth="1.5" />
    </svg>
  )
}

export default function Robot() {
  const [isTalking, setIsTalking] = useState(false)
  const [status, setStatus] = useState('idle')
  const utteranceRef = useRef(null)

  const speak = useCallback(() => {
    if (!window.speechSynthesis) {
      setStatus('not-supported')
      return
    }

    if (isTalking) {
      window.speechSynthesis.cancel()
      setIsTalking(false)
      setStatus('idle')
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(SPEECH_TEXT)
    utteranceRef.current = utterance

    const setFemaleVoice = () => {
      const voices = window.speechSynthesis.getVoices()
      const preferred = [
        'Google UK English Female',
        'Google US English',
        'Samantha',
        'Victoria',
        'Karen',
        'Moira',
        'Tessa',
        'Fiona',
      ]
      let chosen = null
      for (const name of preferred) {
        chosen = voices.find(v => v.name === name)
        if (chosen) break
      }
      if (!chosen) {
        chosen = voices.find(
          v => v.lang.startsWith('en') && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman'))
        )
      }
      if (!chosen) {
        chosen = voices.find(v => v.lang.startsWith('en'))
      }
      if (chosen) utterance.voice = chosen
    }

    if (window.speechSynthesis.getVoices().length > 0) {
      setFemaleVoice()
    } else {
      window.speechSynthesis.onvoiceschanged = setFemaleVoice
    }

    utterance.rate = 0.95
    utterance.pitch = 1.2
    utterance.volume = 1

    utterance.onstart = () => {
      setIsTalking(true)
      setStatus('speaking')
    }
    utterance.onend = () => {
      setIsTalking(false)
      setStatus('done')
      setTimeout(() => setStatus('idle'), 3000)
    }
    utterance.onerror = () => {
      setIsTalking(false)
      setStatus('error')
    }

    window.speechSynthesis.speak(utterance)
  }, [isTalking])

  return (
    <section id="robot" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>AI Assistant</div>
        <h2 className={styles.heading}>
          Meet my <span className={styles.accent}>AI companion</span>
        </h2>
        <p className={styles.sub}>
          Click the robot to hear a short introduction about Aishwarya — powered by your browser&apos;s
          built-in speech synthesis.
        </p>

        <div className={styles.stage}>
          <div className={styles.glow} />

          <div className={styles.robotWrap} onClick={speak} role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && speak()}
            aria-label={isTalking ? 'Stop speaking' : 'Start speaking'}
          >
            <RobotSVG isTalking={isTalking} />
          </div>

          <div className={styles.speechBubble} data-visible={status === 'speaking' || status === 'done'}>
            {status === 'idle' && <span className={styles.hint}>Click me to hear about Aishwarya ✨</span>}
            {status === 'speaking' && (
              <div className={styles.wave}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={styles.waveBar} style={{ animationDelay: `${i * 0.12}s` }} />
                ))}
                <span>Speaking…</span>
              </div>
            )}
            {status === 'done' && <span>That&apos;s a wrap! 🎉 Thanks for listening.</span>}
            {status === 'not-supported' && <span>⚠ Speech not supported in this browser.</span>}
            {status === 'error' && <span>⚠ Something went wrong. Try again!</span>}
          </div>

          <button
            className={`${styles.btn} ${isTalking ? styles.btnStop : ''}`}
            onClick={speak}
          >
            {isTalking ? '⏹ Stop' : '▶ Play Introduction'}
          </button>
        </div>

        <div className={styles.note}>
          💡 For best results, use Chrome or Edge. The voice uses your device&apos;s built-in speech engine.
        </div>
      </div>
    </section>
  )
}
