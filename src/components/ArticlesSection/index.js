import React from "react"
import articles from "./articles"
import styles from "./articlessection.module.css"

const ArticlesSection = () => (
  <div>
    <div className={styles.text_section}>
      <h2>
        My Coding Tutorials have been very valuable to fellow engineers and have
        consequently reached very high Google search rankings
      </h2>
      <p>
        All my tutorials are on the First page of Google for their respective
        search terms and a few are the top search result, Current as of 1/07/21
      </p>
      <p>
        My tutorials have over 200,000 page views and continue to recieve over
        4,000 weekly views
      </p>
      <p>
        Because of my achievements I was awarded the FreeCodeCamp Top 100
        Contributors of 2019
      </p>
      <p>
        "Let me be the first to congratulate you: you are made freeCodeCamp's
        Top 100 Contributors for 2019 (the fCC 100). Thank you again for
        everything you're doing for the developer community through your
        writing." 
      </p>
      <p>-Quincy Larson, CEO/Founder FreeCodeCamp.</p>
      <p>My testing tutorial is the #1 Google search result for "react testing tutorial", even ahead of the offical React testing documentation</p>
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
