import React from "react"
import styles from "./opensource.module.css"
import { useStaticQuery, graphql } from "gatsby"

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
      {edges.map(({ node }) => (
        <div className={styles.opensource_card}>
          <div>{node.name}</div>
          <div>{node.description}</div>
        </div>
      ))}
      <div></div>
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
