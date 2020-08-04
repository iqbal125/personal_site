import React from "react"
import styles from "./home.module.css"
import image1 from "../../static/illustrations/undraw_web_developer_p3e5.svg"
import image2 from "../../static/illustrations/undraw_code_review_l1q9.svg"
import image3 from "../../static/SkillsIcons/reactjs-icon.svg"

const Home = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.hero_container}>
        <h1 className={styles.hero_text}> Main Title</h1>
        <img className={styles.hero_image} src={image1} alt="" />
      </div>
      <div className={styles.row1}>
        <img className={styles.row1_image} src={image2} alt="" />
        <h1>Row 1</h1>
        <img className={styles.row1_image} src={image3} alt="" />
      </div>
    </div>
  )
}

export default Home
