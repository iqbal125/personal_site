import React, { useState, useRef, useEffect } from "react"
import styles from "./home.module.css"
import image1 from "../../static/illustrations/undraw_web_developer_p3e5.svg"
import image2 from "../../static/illustrations/undraw_code_review_l1q9.svg"

import { skills } from "./skills"

const Home = () => {
  const intersectTarget = useRef(null)
  const [isIntersect, setIntersect] = useState(false)

  useEffect(() => {
    const opts = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    }
    const callback = list => {
      list.forEach(entry => {
        if (entry.isIntersecting) {
          setIntersect(true)
        }
      })
    }
    const observerScroll = new IntersectionObserver(callback, opts)

    observerScroll.observe(intersectTarget.current)
  }, [])

  return (
    <div className={styles.layout}>
      <div className={styles.hero_container}>
        <h1 className={styles.hero_text}> Main Title</h1>
        <img className={styles.hero_image} src={image1} alt="" />
      </div>
      <div ref={intersectTarget} className={styles.skill_row}>
        <fieldset>
          <legend className={styles.legend}>Skills</legend>
          {skills.map(skill => (
            <img
              className={isIntersect ? styles.skill_image : styles.no_show_img}
              src={skill}
              alt=""
            />
          ))}
        </fieldset>
      </div>
      <div className={styles.row1}>
        <img className={styles.row1_image} src={image2} alt="" />
        <h1>Row 1</h1>
      </div>
    </div>
  )
}

export default Home
