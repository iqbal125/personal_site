import React from "react"
import image1 from "../../static/Education/1581585555.svg"
import styles from "./education.module.css"
import { degrees, certs } from "./education"

const EducationSection = () => (
  <div className={styles.top_row}>
    <div className={styles.college_header}>
      <img className={styles.icon} src={image1} alt="" />
      <h2>College Degrees</h2>
    </div>
    <div>
      {degrees.map(degree => (
        <div>
          <div>{degree.degree}</div>
          <div>{degree.school}</div>
          <div>{degree.description}</div>
          <div>{degree.learned}</div>
        </div>
      ))}
    </div>
    <div>
      {certs.map(cert => (
        <div>
          <div>{cert.title}</div>
          <div>{cert.description}</div>
        </div>
      ))}
    </div>
  </div>
)

export default EducationSection
