import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout, Button, Icon, BackTop } from "antd"
import About from "../About/About"
import Events from "../Events/Events"
import Teams from "../Teams/Teams"
import Contact from "../Contact/Contact"
import Donate from "../Donate/Donate"
import "./Home.less"
import { Element, Link } from "react-scroll"

const Home = () => {
  return (
    <React.Fragment>
      <Layout className="home-container">
        <BackTop />
        <section id="home" className="home-hero">
          <div className="hero-text">
            <h1>FUERZA BASKETBALL ACADEMY</h1>
            <p>'Hooping to make a difference'</p>
            <Link to="about" smooth={true} activeClass="active-link">
              <Button>Learn More</Button>
            </Link>
            <div className="hero-down-icon">
              <Icon
                type="down"
                className="down-button"
                style={{ fontSize: 35 }}
              />
            </div>
          </div>
        </section>
        <About />
        <Teams />
        <Events />
        <div className="full-scr-contact">
          <Contact />
        </div>
        <Donate />
      </Layout>
    </React.Fragment>
  )
}

export default Home
