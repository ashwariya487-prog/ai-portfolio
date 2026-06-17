import styles from './Projects.module.css'

const projects = [
  {
    title: 'Multi-Agent RAG System',
    description:
      'Architected a production-grade multi-agent RAG pipeline using LangGraph and Claude. Agents autonomously retrieve, synthesize, and validate answers from enterprise document stores with citation tracking.',
    tags: ['LangGraph', 'Claude', 'RAG', 'ChromaDB', 'FastAPI', 'AWS'],
    type: 'GenAI',
  },
  {
    title: 'LLM Evaluation Harness',
    description:
      'Built a comprehensive evaluation framework to benchmark LLM outputs across accuracy, faithfulness, and latency. Integrated with CI/CD to catch regressions before production deployment.',
    tags: ['Python', 'Anthropic API', 'OpenAI', 'RAGAS', 'Pandas', 'Streamlit'],
    type: 'Evals',
  },
  {
    title: 'Healthcare Data Pipeline',
    description:
      'End-to-end HIPAA-compliant data pipeline processing millions of patient records daily using AWS Glue, Lambda, and Redshift. Reduced processing time by 65% through optimized Spark transformations.',
    tags: ['AWS Glue', 'Lambda', 'Redshift', 'PySpark', 'Airflow', 'dbt'],
    type: 'Data Eng',
  },
  {
    title: 'AI-Powered Workflow Automation',
    description:
      'Developed an intelligent document processing system using GPT and Claude to extract, classify, and route insurance claims — reducing manual review time from hours to minutes.',
    tags: ['Claude', 'OpenAI', 'Azure', 'Python', 'FastAPI', 'Kafka'],
    type: 'Automation',
  },
  {
    title: 'Conversational Analytics Bot',
    description:
      'Natural language interface to a Snowflake data warehouse. Users ask questions in plain English and get SQL-backed charts in seconds, powered by LangChain and function calling.',
    tags: ['LangChain', 'Snowflake', 'OpenAI', 'Streamlit', 'SQL', 'Python'],
    type: 'GenAI',
  },
  {
    title: 'Semantic Search Platform',
    description:
      'Vector search platform built with Pinecone and sentence transformers for a legal document corpus. Achieved 92% relevance score — enabling lawyers to surface precedents 10x faster.',
    tags: ['Pinecone', 'FAISS', 'Python', 'FastAPI', 'Sentence Transformers'],
    type: 'Search',
  },
]

const typeColors = {
  GenAI: '#9333ea',
  Evals: '#7c3aed',
  'Data Eng': '#a855f7',
  Automation: '#c084fc',
  Search: '#7c3aed',
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Projects</div>
        <h2 className={styles.heading}>
          Things I&apos;ve <span className={styles.accent}>built</span>
        </h2>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span
                  className={styles.type}
                  style={{ color: typeColors[p.type] || 'var(--purple-4)' }}
                >
                  {p.type}
                </span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.tags}>
                {p.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
