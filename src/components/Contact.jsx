import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Contact</div>
        <h2 className={styles.heading}>
          Let&apos;s <span className={styles.accent}>build something</span> together
        </h2>
        <p className={styles.sub}>
          Open to AI engineering roles, Claude Corps fellowship, and impactful collaborations.
          If you&apos;re working on something that matters — I&apos;d love to hear about it.
        </p>

        <div className={styles.cards}>
          <a href="mailto:ishwaryaa2k1@gmail.com" className={styles.card}>
            <div className={styles.icon}>✉</div>
            <div className={styles.cardTitle}>Email</div>
            <div className={styles.cardVal}>ishwaryaa2k1@gmail.com</div>
          </a>

          <a
            href="https://www.linkedin.com/in/aishwarya-golla"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <div className={styles.icon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>LinkedIn</div>
            <div className={styles.cardVal}>aishwarya-golla</div>
          </a>

          <a href="tel:9015388011" className={styles.card}>
            <div className={styles.icon}>📞</div>
            <div className={styles.cardTitle}>Phone</div>
            <div className={styles.cardVal}>(901) 538-8011</div>
          </a>
        </div>

        <div className={styles.cta}>
          <a href="mailto:ishwaryaa2k1@gmail.com" className={styles.btn}>
            Send me a message ↗
          </a>
        </div>
      </div>
    </section>
  )
}
