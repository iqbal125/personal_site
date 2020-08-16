import React, { useState, useRef, useEffect } from "react"
import styles from "./home.module.css"
import image1 from "../../static/illustrations/undraw_web_developer_p3e5.svg"
import image2 from "../../static/illustrations/undraw_code_review_l1q9.svg"
import { Link } from "gatsby"
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
        <h1 className={styles.hero_text}>
          Hi, I'm Moe. I build high performance web apps with modern
          technologies
        </h1>

        <img className={styles.hero_image} src={image1} alt="" />
      </div>
      <div ref={intersectTarget} className={styles.skill_section}>
        <fieldset>
          <legend className={styles.legend}>Skills</legend>
          <div className={styles.skill_row}>
            {skills.map(skill => (
              <img
                className={
                  isIntersect ? styles.skill_image : styles.no_show_img
                }
                src={skill}
                alt=""
              />
            ))}
          </div>
        </fieldset>
      </div>
      <div className={styles.row1}>
        <img className={styles.row1_image} src={image2} alt="" />
        <div className={styles.text_section}>
          <h2 className={styles.text_section_title}>A Little About me</h2>
          <p>
            I'm very passionate about technology and teaching. I have worked on
            several startups as part of a web dev agency. I have 3 React courses
            with tens of thousands of students and several tutorials on the
            first page of Google. I have also contributed to several major open
            source projects and have created many of my own. I have 8 coding
            certificates for various technologies. Im constantly learning new
            stuff and looking for new challenges.
          </p>
          <h2 className={styles.text_section_title}>
            Select a Section below for More Details about my Work
          </h2>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.row2_list}>
          <Link to="/projects" className={styles.row2_item}>
            Projects
          </Link>
          <Link to="/courses" className={styles.row2_item}>
            Courses
          </Link>
          <Link to="/opensource" className={styles.row2_item}>
            Open Source
          </Link>
          <Link to="/education" className={styles.row2_item}>
            Education
          </Link>
          <Link to="/articles" className={styles.row2_item}>
            Articles
          </Link>
        </div>
        <div className={styles.contact}>
          <Link to="/" className={styles.contact_button}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
