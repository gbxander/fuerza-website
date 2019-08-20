import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "antd"
import Img from "gatsby-image"
import "./Home.css"

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
        <section className="home-img-container"></section>

        <Content
          style={{
            background: "white",
            width: "900px",
            margin: "25px auto",
          }}
        >
          <div className="home-container">
            <h1>ANNOUNCEMENTS</h1>
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  )
}

export default Home
