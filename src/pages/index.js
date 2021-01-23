import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const header =
    typeof window !== "undefined" &&
    window &&
    window.document &&
    document.getElementsByTagName("header") &&
    document.getElementsByTagName("header")[0] &&
    document.getElementsByTagName("header")[0].clientHeight

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window &&
      window.document &&
      document.getElementsByTagName("header")
    ) {
      setHeaderHeight(document.getElementsByTagName("header")[0] ? document.getElementsByTagName("header")[0].clientHeight : 0)
    }
  }, [header])

  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="hero"
        style={
          typeof window !== "undefined" &&
          window &&
          window.innerHeight ?
          {
            height: `calc(${window.innerHeight}px - ${headerHeight}px)`
          } : {}
        }>
        <div className="hero-grid">
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
          <div className="hero-grid__item" />
        </div>
        <div className="hero-content">
          <h1>
            Anya and Sharu
          </h1>
          <p>A report of the year 2020 when Sharu mama visited Anya in the USA.</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
