import React from "react"
import image1 from "../../static/Education/1581585555.svg"
import image2 from "../../static/Education/certificate.svg"
import styles from "./education.module.css"
import { degrees, certs } from "./education"

const EducationSection = () => (
  <div className={styles.top_row}>
    <div></div>
    <div>
      <div className={styles.college_header}>
        <img className={styles.icon1} src={image1} alt="" />
        <h2>College Degrees</h2>
      </div>
      <div className={styles.degree_section}>
        {degrees.map(degree => (
          <div className={styles.degrees}>
            <h2>{degree.degree}</h2>
            <h3 className={styles.school}>{degree.school}</h3>
            <div>{degree.description}</div>
            <div className={styles.learned}>Some Things I learned:</div>
            <div>{degree.learned}</div>
          </div>
        ))}
      </div>
      <div className={styles.cert_section}>
        <div className={styles.cert_header}>
          <img className={styles.icon2} src={image2} alt="" />
          <h2>Certificates</h2>
        </div>
        {certs.map(cert => (
          <div className={styles.certs}>
            <div>{cert.title}</div>
            <div>{cert.description}</div>
          </div>
        ))}
      </div>
    </div>
    <div></div>
  </div>
)

export default EducationSection
