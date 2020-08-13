import React from "react"
import styles from "./courses.module.css"
import courses from "./courses"

const CoursesSection = () => {
  return (
    <div>
      <h2 className={styles.title}>
        I'm one of the top React - Redux instructors on the internet, having
        over 70,000 students between my 3 courses
      </h2>
      <div className={styles.card_row}>
        {courses.map(course => (
          <div className={styles.card}>
            <a href={course.url} rel="noopener noreferrer" target="_blank">
              <div className={styles.top_row}>
                <img src={course.img} alt="" />
                <div className={styles.header_text}>
                  <div className={styles.course_title}>{course.title}</div>
                  <div className={styles.course_subtitle}>
                    {course.subtitle}
                  </div>
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
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesSection
