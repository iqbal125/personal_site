import React from "react"
import contacts from "./contacts"
import styles from "./contact.module.css"
import image1 from "../../static/OpenSource/linkedin-ar21.svg"
import image6 from "../../static/OpenSource/freecodecamp.svg"

const ContactSection = () => (
  <div className={styles.container}>
    <h2>Connect with me on LinkedIn for Business inquiries</h2>
    <img src={image1} className={styles.linked} />
    <h3>
      Feel Free to connect with me on my other accounts just to chat or to see
      my work
    </h3>
    <div className={styles.contact_row}>
      {contacts.map(contact => (
        <img className={styles.icon} src={contact.icon} />
      ))}
    </div>
    <img src={image6} className={styles.freecode} />
  </div>
)

export default ContactSection
