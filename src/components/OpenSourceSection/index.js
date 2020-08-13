import React, { useState } from "react"
import styles from "./opensource.module.css"
import { useStaticQuery, graphql } from "gatsby"
import OpenSourceCard from "../OpenSourceCard"

import image1 from "../../static/OpenSource/github-ar21.svg"
import image2 from "../../static/OpenSource/stackoverflow-ar21.svg"

import image4 from "../../static/OpenSource/top3stack.png"

const OpenSourceSection = () => {
  const githubData = useStaticQuery(query)

  //query destructuring
  const { allGithubData } = githubData
  const { nodes } = allGithubData
  const { rawResult } = nodes[0]
  const { data } = rawResult
  const { viewer } = data
  const { repositories } = viewer
  const { edges } = repositories

  const results = edges.filter(
    item =>
      item.node.name !== "alligator-drafts" &&
      item.node.name !== "alligator-mini"
  )

  return (
    <div>
      <div className={styles.stackoverflow}>
        <img src={image2} alt="" />
        <div className={styles.stack_list}>
          <div>
            I have answered a lot of React, Redux, Auth0 and Node questions on
            stackoverflow, and many of them were the correct or top answer.
          </div>
          <div>I reached Top 3% overall for May 2019</div>
          <div>I was Ranked Top 10% overall for 2019</div>
        </div>
        <div className={styles.stack_title}>
          <a
            href="https://stackoverflow.com/users/7355935/iqbal125"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>View Stackoverflow Profile</div>
          </a>
        </div>
        <img className={styles.stack_pics} src={image4} />
      </div>
      <div className={styles.github_section}>
        <img className={styles.github_logo} src={image1} alt="" />
        <div className={styles.github_title1}>
          I'm passionate about open source and have contributed to several major
          open source projects as well as creating many of my own.
        </div>
        <div className={styles.github_list}>
          <div>
            Contributed to official Cypress Docs &nbsp;
            <a
              href="https://github.com/cypress-io/cypress-documentation/pull/1809"
              rel="noopener noreferrer"
              target="_blank"
            >
              PR #1809
            </a>
          </div>
          <div>
            Contributed to official React Docs &nbsp;
            <a
              href="https://github.com/reactjs/reactjs.org/pull/2088"
              rel="noopener noreferrer"
              target="_blank"
            >
              PR #2088
            </a>
          </div>
          <div>
            Contributed to react-testing-library &nbsp;
            <a
              href="https://github.com/testing-library/testing-library-docs/pull/162"
              rel="noopener noreferrer"
              target="_blank"
            >
              PR #162
            </a>
            ,&nbsp;
            <a
              href="https://github.com/testing-library/testing-library-docs/pull/170"
              rel="noopener noreferrer"
              target="_blank"
            >
              PR #170
            </a>
            ,&nbsp;
            <a
              href="https://github.com/testing-library/testing-library-docs/pull/198"
              rel="noopener noreferrer"
              target="_blank"
            >
              PR #198
            </a>
          </div>
          <div>
            Contributed to Mozilla Docs &nbsp;
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType"
              rel="noopener noreferrer"
              target="_blank"
            >
              Performance Entry
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://github.com/iqbal125"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.github_title2}>View Github Profile</div>
          </a>
        </div>
      </div>
      <div className={styles.github2}>
        <div className={styles.github2_title}>
          I have created many open source projects that have been well recieved
          by the community.
        </div>
        <div className={styles.card_row}>
          {results.map(({ node }) => (
            <OpenSourceCard node={node} key={node.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

const query = graphql`
  query MyQuery {
    allGithubData {
      nodes {
        rawResult {
          data {
            viewer {
              repositories {
                edges {
                  node {
                    id
                    description
                    forkCount
                    name
                    url
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default OpenSourceSection
