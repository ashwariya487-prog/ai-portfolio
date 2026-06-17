import styles from './About.module.css'

const highlights = [
  { icon: '🤖', label: 'Generative AI', desc: 'RAG systems, AI agents, LLM evaluation & prompt engineering' },
  { icon: '☁️', label: 'Cloud Native', desc: 'AWS, Azure, GCP — multi-cloud data platforms at scale' },
  { icon: '📊', label: 'Data Engineering', desc: 'Pipelines, Spark, dbt, Snowflake, Kafka & Delta Lake' },
  { icon: '🎯', label: 'Impact Focused', desc: 'Healthcare, finance & insurance — solutions that matter' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>About Me</div>
        <h2 className={styles.heading}>
          Engineering AI that <span className={styles.accent}>solves real problems</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p>
              I&apos;m an <strong>AI &amp; Data Engineer</strong> with 2+ years of experience designing
              and delivering intelligent automation solutions, cloud-native data platforms, and
              AI-powered applications.
            </p>
            <p>
              My work spans <strong>Generative AI</strong>, Retrieval-Augmented Generation (RAG),
              conversational AI agents, and workflow automation — built with Python, SQL, and modern
              LLM frameworks like LangChain and LangGraph.
            </p>
            <p>
              I&apos;m passionate about transforming ambiguous business challenges into scalable technical
              solutions that actually ship. Whether it&apos;s a RAG pipeline, an agentic automation, or a
              data product — I scope, build, and hand it off so it survives me.
            </p>
            <p>
              Currently seeking opportunities to put AI to work on problems that matter, especially
              in social impact, public service, and community-focused domains.
            </p>

            <div className={styles.links}>
              <a href="mailto:ishwaryaa2k1@gmail.com" className={styles.link}>
                ✉ ishwaryaa2k1@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/aishwarya-golla" target="_blank" rel="noreferrer" className={styles.link}>
                ↗ LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.cards}>
            {highlights.map(h => (
              <div key={h.label} className={styles.card}>
                <span className={styles.cardIcon}>{h.icon}</span>
                <div>
                  <div className={styles.cardLabel}>{h.label}</div>
                  <div className={styles.cardDesc}>{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
