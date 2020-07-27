import React from "react"
import articles from "./articles"
import styles from "./articlessection.module.css"

const ArticlesSection = () => (
  <div>
    <div className={styles.card_row}>
      {articles.map(article => (
        <div className={styles.card}>
          <div className={styles.header}>
            <h3>{article.title}</h3>
          </div>
          <small>{article.date}</small>
          <p>
            <strong>Google Search Ranking:</strong>
          </p>
          <div> {article.ranking}</div>
        </div>
      ))}
    </div>
  </div>
)

export default ArticlesSection
