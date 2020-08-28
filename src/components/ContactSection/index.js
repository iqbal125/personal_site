import React from "react"
import contacts from "./contacts"
import styles from "./contact.module.css"
import image1 from "../../static/OpenSource/linkedin-ar21.svg"
import image6 from "../../static/OpenSource/freecodecamp.svg"

const ContactSection = () => (
  <div className={styles.container}>
    <img src={image1} className={styles.linked} />
    <div className={styles.contact_row}>
      {contacts.map(contact => (
        <img className={styles.icon} src={contact.icon} />
      ))}
    </div>

    <img src={image6} className={styles.img2} />
  </div>
)

export default ContactSection
