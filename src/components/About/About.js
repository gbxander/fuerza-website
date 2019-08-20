import React from "react"
import { Carousel, Layout, Row, Col } from "antd"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "react-router-dom"
import "./About.css"

const { Content } = Layout

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
    <React.Fragment>
      <Layout className="about-layout">
        <Content
          style={{
            background: "white",
            width: "75%",
            margin: "25px auto",
          }}
        >
          <Col span={18} offset={3}>
            <h1>- OUR MISSION -</h1>
            <p>
              A lacus vestibulum sed arcu non odio euismod lacinia at. Tincidunt
              nunc pulvinar sapien et ligula ullamcorper malesuada. Imperdiet
              massa tincidunt nunc pulvinar sapien et. Nibh tortor id aliquet
              lectus proin nibh nisl condimentum. Sed viverra ipsum nunc
              aliquet. Erat velit scelerisque in dictum. Aliquet porttitor lacus
              luctus accumsan tortor.
            </p>{" "}
          </Col>
          <Col span={18} offset={3}>
            <h1> - OUR STORY -</h1>
            <Row type="flex" justify="center" align="middle">
              <Col span={22}>
                <div className="about-prompt">
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>{" "}
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </Col>
            </Row>
            <Row type="flex" justify="center" align="middle">
              <Col span={11}>
                <Link to="/teams">
                  <div className="about-our-teams">
                    <h1> - OUR TEAMS - </h1>
                  </div>
                </Link>
              </Col>
              <Col span={11} offset={2}>
                <Link to="/teams">
                  <div className="about-our-process">
                    <h1> - OUR PROCESS - </h1>
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Content>
      </Layout>
    </React.Fragment>
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
