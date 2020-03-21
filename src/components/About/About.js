import React from "react"
import { Layout, Row, Col } from "antd"
import { useStaticQuery, graphql } from "gatsby"
import { IoIosBook, IoIosRocket } from "react-icons/io"
import { Link } from "@reach/router"
import Img from "gatsby-image"
import { Element } from "react-scroll"
import "./About.less"

const About = () => {
  const imgData = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "fuerza_coach.jpeg" }) {
        childImageSharp {
          fixed(height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageTwo: file(relativePath: { eq: "fuerza_18ugirls.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "fuerza2_18u.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section id="about" className="about-layout">
      <div>
        <Col
          md={{ span: 12, offset: 6 }}
          xs={{ span: 18, offset: 3 }}
          style={{ marginBottom: 50 }}
        >
          <Row
            type="flex"
            align="middle"
            justify="center"
            className="about-header"
          >
            <h1>OUR MISSION</h1>
            <IoIosRocket className="target-icon" />
          </Row>
          <div className="about-prompt">
            <p>
              To provide high quality and transformative youth basketball
              training to athletes from underserved communities across the city
              of Los Angeles.
            </p>
          </div>
          <Col>
            <div className="about-our-teams"></div>
          </Col>
        </Col>
      </div>
      <Col span={16} offset={4}>
        <Row
          type="flex"
          align="middle"
          justify="center"
          className="about-header"
        >
          <h1>OUR STORY</h1>
          <IoIosBook className="target-icon" />
        </Row>
        <Row type="flex" justify="center" align="top">
          <Col md={{ span: 7 }} xs={{ span: 32, offset: 0 }}>
            <div className="about-our-process"></div>
          </Col>

          <Col md={{ span: 13, offset: 2 }} xs={{ span: 32, offset: 0 }}>
            <div className="about-prompt">
              <p>
                As a team of coaches with a collective desire and commitment to
                inspiring and uplifting our communities through basketball, we
                started the Fuerza Basketball Academy with the primary goal of
                developing and teaching the fundamentals of basketball while
                promoting a growth mindset and important life skills such as
                leadership, sportsmanship, and teamwork to young athletes
                residing in underserved communities across Los Angeles.
              </p>
              <p>
                We wholeheartedly believe in the positive effect that sports can
                have on the individual, which is why we've dedicated our time
                and effort as an organization to cultivating a safe and
                inclusive training environment where prospective athletes can
                thrive without fear of failure and grow as individuals.
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </section>
  )
}
export default About

/* 

          <Carousel effect="fade" autoplay={true}>
            <div>
              <Img fluid={imgData.imageOne.childImageSharp.fluid} />
            </div>
            <div>
              <Img fluid={imgData.imageTwo.childImageSharp.fluid} />
            </div>
            <div>
              <Img fluid={imgData.imageThree.childImageSharp.fluid} />
            </div>
          </Carousel>
          
          */
