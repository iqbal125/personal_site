import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import styles from "./layout.module.css"
import SEO from "../SEO"
import image1 from "../../static/illustrations/overlay3.svg"

const Layout = ({ props, title, description, children }) => {
  const seoData = {
    title,
    description,
  }

  return (
    <>
      <div className={styles.layout}>
        <SEO seoData={seoData} />
        <Header props={{ ...props }} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
