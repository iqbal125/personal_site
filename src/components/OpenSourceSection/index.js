import React, { useState } from "react"
import styles from "./opensource.module.css"
import { useStaticQuery, graphql } from "gatsby"
import OpenSourceCard from "../OpenSourceCard"

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

  console.log(edges)

  return (
    <div>
      <div className={styles.card_row}>
        {edges.map(({ node }) => (
          <OpenSourceCard node={node} key={node.id} />
        ))}
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
