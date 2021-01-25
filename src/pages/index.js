import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [windowHeight, setWindowHeight] = useState(0)
  const [secret, setSecret] = useState("")
  const trigger =
    typeof window !== "undefined" &&
    window &&
    window.innerHeight

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window &&
      window.innerHeight
    ) {
      setWindowHeight(window.innerHeight)
    }
  }, [trigger])

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
            height: `${windowHeight}px`
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
      <section className="align-center">
        <div className="wrapper">
          <h2>Indoor Games</h2>
          <div className="split">
            <div className="split-33">
              <img src="https://cf.geekdo-images.com/VosGBqkOjkhgC2QFS1o3_g__itemrep/img/mIw3ZMq4f_QbAgBsy9NOma2-AX8=/fit-in/246x300/filters:strip_icc()/pic212893.jpg" alt="Sequence" height="246" />
              <br />
              <p>68 Games played</p>
            </div>
            <div className="split-33">
              <img src="https://cf.geekdo-images.com/v0YHI6x4g8dJdtSqaxMdiA__itemrep/img/7CVBQJiB_ir4w8Ek8-T7XsTYGI8=/fit-in/246x300/filters:strip_icc()/pic4132194.jpg" alt="Ticket to Ride: New York" />
              <br />
              <p>18 Games played</p>
            </div>
            <div className="split-33">
              <img src="https://cf.geekdo-images.com/gJq8JOmOmmZSFpbrWGQMDQ__itemrep/img/FiZ52EiPrJFOWCufNvBuYzmkxZM=/fit-in/246x300/filters:strip_icc()/pic4666620.png" alt="Ticket to Ride: London" />
              <br />
              <p>12 Games played</p>
            </div>
            <div className="split-33">
              <img src="https://cf.geekdo-images.com/8kHMSAvFxf-ygPoTEf3lsg__itemrep/img/vmxbe6duuOgTyuPqMFwmesnsr5U=/fit-in/246x300/filters:strip_icc()/pic716758.jpg" alt="Monopoly Deal" height="246" />
              <br />
              <p>62 Games played</p>
            </div>
            <div className="split-33">
              <img src="https://icdn.kiwico.com/logos/kiwico-logo.svg" alt="Kiwico" height="246" />
              <br />
              <p>9 Crates built</p>
            </div>
            <div className="split-33">
              <img src="https://www.lego.com/static/favicon/lego-logo-512.png" alt="Lego" height="246" />
              <br />
              <p>40 hours played</p>
            </div>
          </div>
        </div>        
      </section>
      <section className="align-center bg-black">
        <div className="wrapper">
          <h2>Video Games</h2>
          <div className="split">
            <div className="split-33">
              <img src="https://store-images.s-microsoft.com/image/apps.18195.14259955503324792.fee0f975-9292-4852-ad19-c6ec880d57d3.35e9f104-1086-48a4-a429-c1c8dd863347" alt="Hollow Knight" height="246" />
              <br />
              <p>Sharu played: 112 hours</p>
              <p>Anya watched: 49 hours</p>
            </div>
            <div className="split-33">
              <img src="https://cdn.akamai.steamstatic.com/steam/apps/1057090/capsule_616x353.jpg?t=1605538811" alt="Ori Will of the wisps" height="246" />
              <br />
              <p>Sharu played: 40 hours</p>
              <p>Anya watched: 13 hours</p>
            </div>
            <div className="split-33">
              <img src="https://news.xbox.com/en-us/wp-content/uploads/sites/2/Ori_FOB_RGB.png?resize=950%2C675" alt="Ori Blind forest" height="246" />
              <br />
              <p>Sharu played: 51 hours</p>
              <p>Anya watched: 18 hours</p>
            </div>
            <div className="split-33">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Super_Lucky%27s_Tale.jpg/220px-Super_Lucky%27s_Tale.jpg" alt="Super lucky's tale" height="246" />
              <br />
              <p>Anya played: 3 hours</p>
              <p>Sharu watched: 3 hours</p>
            </div>
            <div className="split-33">
              <img src="https://hb.imgix.net/5158374397f9f66eb62b41394ce2a950bc8f3df1.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=32f211fd15b9d2207a8a2e307b23daa2" alt="Rush" height="246" />
              <br />
              <p>Anya played: 5 hours</p>
              <p>Sharu watched: 5 hours</p>
            </div>
            <div className="split-33">
              <img src="https://images-na.ssl-images-amazon.com/images/I/719PUFz3kCL._SX522_.jpg" alt="Disney" height="246" />
              <br />
              <p>Anya played: 3 hours</p>
              <p>Sharu watched: 3 hours</p>
            </div>
          </div>
        </div>        
      </section>
      <section className="align-center">
        <div className="wrapper">
          <h2>Outdoor Games</h2>
          <div className="split">
            <div className="split-50">
              <img src="https://static.theprint.in/wp-content/uploads/2019/06/D9MxwrnUwAANPby-1.jpg" alt="Cricket" height="246" />
              <br />
              <p>31 hours played / watched</p>
            </div>
            <div className="split-50">
              <img src="https://target.scene7.com/is/image/Target/GUEST_abdd129f-0de3-489f-88b1-d48742d1b249?wid=488&hei=488&fmt=pjpeg" alt="Skating" height="246" />
              <br />
              <p>12 sessions completed</p>
            </div>
          </div>
        </div>
      </section>
      <section className="align-center bg-black">
        <div className="wrapper">
          <h2>Secret summary</h2>
          <div className={`secret ${secret === "onion" && "secret-hidden"}`}>
            <br />
            <p>Please enter the super secret password to read this section.</p>
            <input placeholder="Secret" type="password" value={secret} onChange={e => setSecret(e.target.value)} />
            <br />
          </div>
          <div className={`${secret === "onion" ? "secret" : "secret-hidden"}`}>
            <p>This report is only about all the good times from this trip and I have loved every minute of it. This has been the best lockdown for me and I will never forget it. I will miss you sooooo much and hope that you will come visit me in AUSTRALIA soon.<br/>xoxo<br />Sharu mama.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
