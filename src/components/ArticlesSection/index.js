import React from "react"
import articles from "./articles"
import styles from "./articlessection.module.css"

const ArticlesSection = () => (
  <div>
    <div className={styles.text_section}>
      <h2>
        My Coding Tutorials have Provided exceptional value to fellow engineers
        and have consequently reached very high Google search rankings
      </h2>
      <p>
        All my tutorials are on the First page of Google for their respective
        search terms and a few are the top search result, Current as of 7/27/20
      </p>
      <p>
        Get in touch with me to see how I can help you reach high Google Search
        rankings
      </p>
    </div>
    <div className={styles.card_row}>
      {articles.map(article => (
        <div className={styles.card}>
          <a href={article.url} rel="noopener noreferrer" target="_blank">
            <div className={styles.header}>
              <h3>{article.title}</h3>
            </div>
            <small>{article.date}</small>

            <p>
              <strong>Google Search Ranking:</strong>
            </p>
            <div> {article.ranking}</div>
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default ArticlesSection
