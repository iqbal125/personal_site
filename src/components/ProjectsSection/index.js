import React from "react"
import projects from "./projects"
import styles from "./projects.module.css"
import image1 from "../../static/CoursePics/2258296_130c_4.jpg"

const ProjectSection = () => {
  const Auth0ServerSideTestimonial = () => <div></div>

  return (
    <div className={styles.project_card}>
      <div className={styles.action_section}>
        <div className={styles.text_section}>
          <div>Title</div>
          <div>
            This was one of the most difficult projects Ive ever done. It was a
            full authentication server, built from the ground up. What made it
            particularly hard was that there were literally no tutorials on the
            internet on how to do it. The especially tricky parts were the
            “password reset” and “password forget” features, but I was able to
            get it done through a lot of trial and error. I also had to learn a
            lot of complex concepts like cryptography and hashing passwords.
          </div>
        </div>
        <div className={styles.button_section}>
          <button>View App</button>
          <button>View Code</button>
        </div>
        {/*{(() => {
          switch (project.title) {
            case "info":
              return <Info text={text} />
            case "warning":
              return <Warning text={text} />
            case "error":
              return <Error text={text} />
            default:
              return null
          }
        })()}*/}
      </div>
      <div className={styles.image_section}>
        <img src={image1} alt="" />
      </div>
    </div>
  )
}

export default ProjectSection
