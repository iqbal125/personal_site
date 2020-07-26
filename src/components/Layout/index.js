import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import styles from "./layout.module.css"
import SEO from "../SEO"

const Layout = ({ props, title, description, children }) => {
  const seoData = {
    title,
    description,
  }

  const uri = props ? props.uri : ""

  return (
    <>
      <div className={uri === "/" ? styles.home_layout : ""}>
        <SEO seoData={seoData} />
        <Header props={{ ...props }} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
