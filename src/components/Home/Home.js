import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout, Button } from "antd"
import Img from "gatsby-image"
import "./Home.css"
import { Link } from "react-router-dom"

const { Content } = Layout

const Home = () => {
  const imgData = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "fuerza_coach.jpeg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <Layout>
        <div className="home-hero">
          <div className="hero-text">
            <h1>FUERZA BASKETBALL ACADEMY</h1>
            <p>'Dribbling towards success'</p>
            <Link to="/about">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>

        <Content
          style={{
            background: "white",
            width: "900px",
            margin: "25px auto",
          }}
        >
          <div className="home-container">
            <div className="announcement-title">ANNOUNCEMENTS</div>
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  )
}

export default Home
