import React from "react"
import { Layout, Row, Col, Button, Card } from "antd"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GiBasketballJersey } from "react-icons/gi"
import { Element } from "react-scroll"
import "./Teams.less"

const { Content } = Layout

const Teams = () => {
  const imgData = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "fuerza_14u.jpeg" }) {
        childImageSharp {
          fixed(height: 150, width: 150, grayscale: false) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageTwo: file(relativePath: { eq: "fuerza_18ugirls.jpeg" }) {
        childImageSharp {
          fixed(height: 150, width: 150, grayscale: false) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageThree: file(relativePath: { eq: "fuerza_18u.jpeg" }) {
        childImageSharp {
          fixed(height: 150, width: 150, grayscale: false) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section id="teams" className="team-layout">
      <Content
        style={{
          background: "white",
          width: "75%",
          margin: "25px auto",
        }}
      >
        <Col style={{ textAlign: "center" }}>
          <Row type="flex" align="middle" justify="center">
            <h1>OUR TEAMS</h1>
            <GiBasketballJersey className="jersey-icon" />
          </Row>
          <Col span={18} offset={3}>
            <div className="teams-info-prompt">
              The Fuerza Basketball Academy is always looking for competitive
              basketball players who are interested in competing for our teams.
              We serve various age groups ranging from ages 8 - 18 years old.
              Register below to join our team.
            </div>
          </Col>
          <Col span={24}>
            <Row
              type="flex"
              justify="center"
              align="middle"
              className="team-row"
            >
              <Col span={7}>
                <Card
                  cover={
                    <Img
                      fixed={imgData.imageOne.childImageSharp.fixed}
                      className="teams-img"
                    />
                  }
                >
                  <Card.Meta
                    title="14U (8th Grade)"
                    description={`BORN: Between 2003-2004`}
                  />
                  <Button type="primary">Register</Button>
                </Card>
              </Col>
              <Col span={7} offset={1}>
                <Card
                  cover={
                    <Img
                      fixed={imgData.imageThree.childImageSharp.fixed}
                      className="teams-img"
                    />
                  }
                >
                  <Card.Meta
                    title={<span>18U (High School) </span>}
                    description={`BORN: Between 2003-2004`}
                  />
                  <Button type="primary">Register</Button>
                </Card>
              </Col>
              <Col span={7} offset={1}>
                <Card
                  cover={
                    <Img
                      fixed={imgData.imageTwo.childImageSharp.fixed}
                      className="teams-img"
                    />
                  }
                >
                  <Card.Meta
                    title="18U Girls (High School)"
                    description={`BORN: Between 2003-2004`}
                  />
                  <Button type="primary">Register</Button>
                </Card>
              </Col>
            </Row>
          </Col>
        </Col>
      </Content>
    </section>
  )
}

/* TODO: Create Metadata component */

export default Teams
