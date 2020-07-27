import React, { useState } from "react"
import styles from "./opensourcecard.module.css"
import { GoRepoForked } from "react-icons/go"
import { AiFillStar } from "react-icons/ai"
import Shiitake from "shiitake"

const OpenSourceCard = ({ node }) => {
  const [trunc, setState] = useState(true)

  const setCard = () => {
    if (trunc === false) {
      setState(true)
    } else {
      setState(false)
    }
  }

  return (
    <div className={trunc ? styles.card : styles.card_full}>
      <div className={styles.card_header}>
        <a href={node.url} rel="noopener noreferrer" target="_blank">
          {" "}
          <h2>{node.name}</h2>
        </a>
      </div>

      <div className={styles.stats_row}>
        <div className={styles.icon_star}>
          <AiFillStar />
          <small>{node.stargazers.totalCount}</small>
        </div>
        <div className={styles.icon_fork}>
          <GoRepoForked />
          <small>{node.forkCount}</small>
        </div>
      </div>
      {trunc ? (
        <Shiitake
          lines={3}
          throttleRate={200}
          className={styles.card_desc}
          overflowNode={
            <div className={styles.read_more} onClick={setCard}>
              Read More...
            </div>
          }
        >
          {node.description}
        </Shiitake>
      ) : (
        <>
          <div className={styles.card_desc}> {node.description} </div>
          <div className={styles.collapse} onClick={setCard}>
            Collapse...
          </div>
        </>
      )}
    </div>
  )
}

export default OpenSourceCard
