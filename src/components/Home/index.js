import React from "react"
import styles from "./home.module.css"
import image1 from "../../static/illustrations/undraw_web_developer_p3e5.svg"

const Home = () => {
  return (
    <div className={styles.container}>
      <h1> Main Title</h1>
      <img className={styles.hero_image} src={image1} alt="" />
    </div>
  )
}

export default Home
