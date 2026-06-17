import styles from './Skills.module.css'

const categories = [
  {
    title: 'Generative AI & LLMs',
    color: '#9333ea',
    items: [
      'Claude / Anthropic API', 'OpenAI / GPT', 'Prompt Engineering',
      'RAG (Retrieval-Augmented Gen)', 'LangChain', 'LangGraph',
      'AI Agents', 'Function Calling', 'LLM Evaluation',
      'Conversational AI', 'Semantic Search', 'Amazon Bedrock',
      'Azure OpenAI', 'Vertex AI',
    ],
  },
  {
    title: 'Cloud Platforms',
    color: '#7c3aed',
    items: [
      'AWS (Lambda, Glue, Kinesis, S3, Redshift, CDK)',
      'Azure (Data Factory, Databricks, Synapse, ML)',
      'GCP (BigQuery, Dataflow, Pub/Sub, GKE)',
      'Azure DevOps', 'CloudWatch',
    ],
  },
  {
    title: 'Data Engineering',
    color: '#a855f7',
    items: [
      'Apache Airflow', 'Apache Kafka', 'Apache Spark',
      'dbt', 'Snowflake', 'BigQuery', 'Redshift',
      'Delta Lake', 'ETL / ELT Pipelines',
    ],
  },
  {
    title: 'Vector Databases',
    color: '#c084fc',
    items: ['Pinecone', 'ChromaDB', 'FAISS'],
  },
  {
    title: 'Programming',
    color: '#7c3aed',
    items: ['Python', 'SQL', 'PySpark', 'Java', 'Scala'],
  },
  {
    title: 'Other Tools',
    color: '#a855f7',
    items: [
      'Docker', 'Kubernetes', 'CI/CD', 'REST APIs',
      'Streamlit', 'FastAPI', 'Jupyter',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Technical Skills</div>
        <h2 className={styles.heading}>
          Tools I <span className={styles.accent}>build with</span>
        </h2>

        <div className={styles.grid}>
          {categories.map(cat => (
            <div key={cat.title} className={styles.card}>
              <div className={styles.cardHeader} style={{ '--cat-color': cat.color }}>
                <div className={styles.dot} />
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div className={styles.tags}>
                {cat.items.map(item => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
