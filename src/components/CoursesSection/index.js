import React from "react"
import styles from "./courses.module.css"
import courses from "./courses"

const CoursesSection = () => {
  return (
    <div>
      <h2>
        I'm one of the top React + Redux instructors on the internet, having
        over 70,000 students between my 3 courses
      </h2>
      <div className={styles.card_row}>
        {courses.map(course => (
          <div className={styles.card}>
            <div className={styles.top_row}>
              <img src={course.img} alt="" />
              <div className={styles.header_text}>
                <h3>{course.title}</h3>
                <h4>Students: </h4>
                <div>{course.students}</div>
              </div>
            </div>
            <div> {course.description}</div>
            <div> Topics Covered: {course.topics}</div>
            <div> {course.technologies}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesSection
