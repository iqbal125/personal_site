import React from "react"
import styles from "./courses.module.css"
import courses from "./courses"

const CoursesSection = () => {
  return (
    <div>
      <h2 className={styles.title}>
        I'm one of the top React + Redux instructors on the internet, having
        over 70,000 students between my 3 courses
      </h2>
      <div className={styles.card_row}>
        {courses.map(course => (
          <div className={styles.card}>
            <div className={styles.top_row}>
              <img src={course.img} alt="" />
              <div className={styles.header_text}>
                <h2>{course.title}</h2>
                <div>
                  <strong>Students:</strong>
                </div>
                <div>{course.students}</div>
              </div>
            </div>
            <div className={styles.course_details}>
              <p>{course.description}</p>
              <div>
                <strong>Topics Covered:</strong>
              </div>
              <div>{course.topics}</div>
              <div>{course.technologies}</div>
            </div>
            <div className={styles.tech_row}>
              {course.technolgies.map(tech => (
                <div>{tech}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesSection
