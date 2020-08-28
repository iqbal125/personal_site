import React from "react"
import contacts from "./contacts"
import styles from "./contact.module.css"
import image1 from "../../static/OpenSource/linkedin-ar21.svg"
import image6 from "../../static/OpenSource/freecodecamp.svg"

const ContactSection = () => (
  <div className={styles.container}>
    <h2>Connect with me on LinkedIn for Business inquiries</h2>
    <a
      href="https://www.linkedin.com/in/iqbal125/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={image1} className={styles.linked} />
    </a>
    <h3>
      Feel Free to connect with me on my other accounts just to chat or to see
      my work
    </h3>
    <div className={styles.contact_row}>
      {contacts.map(contact => (
        <div className={styles.icon_wrap}>
          <a href={contact.url} rel="noopener noreferrer" target="_blank">
            <img className={styles.icon} src={contact.icon} />
          </a>
        </div>
      ))}
    </div>
    <a
      href="https://www.freecodecamp.org/news/author/iqbal125/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={image6} className={styles.freecode} />
    </a>
  </div>
)

export default ContactSection
