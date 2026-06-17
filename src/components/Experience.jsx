import styles from './Experience.module.css'

const experiences = [
  {
    role: 'AI & Data Engineer',
    company: 'Current Role',
    period: '2024 – Present',
    type: 'Full-time',
    points: [
      'Designed and deployed end-to-end RAG pipelines using LangChain, ChromaDB, and AWS, reducing manual research time by 60%.',
      'Built multi-turn conversational AI agents with function calling and tool use via Anthropic & OpenAI APIs.',
      'Developed automated data workflows with Apache Airflow and dbt on Snowflake, improving pipeline reliability.',
      'Led cross-functional stakeholder sessions to scope AI use cases and translate them into sprint-ready deliverables.',
      'Created training materials and ran AI fluency workshops for non-technical teams, driving adoption.',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'Previous Role',
    period: '2022 – 2024',
    type: 'Full-time',
    points: [
      'Built scalable ETL pipelines on AWS Glue, Lambda, and Kinesis for real-time and batch data processing.',
      'Migrated on-premise data warehouses to Snowflake, achieving 40% cost reduction and improved query performance.',
      'Integrated Azure Data Factory and Databricks for ML feature engineering pipelines.',
      'Implemented semantic search capabilities using FAISS and vector embeddings for healthcare data.',
      'Collaborated with data science teams to operationalize ML models into production pipelines.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Experience</div>
        <h2 className={styles.heading}>
          Where I&apos;ve <span className={styles.accent}>created impact</span>
        </h2>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.line}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.track} />}
              </div>

              <div className={styles.card}>
                <div className={styles.meta}>
                  <div className={styles.roleWrap}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <span className={styles.badge}>{exp.type}</span>
                  </div>
                  <div className={styles.companyRow}>
                    <span className={styles.company}>{exp.company}</span>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                </div>

                <ul className={styles.points}>
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
