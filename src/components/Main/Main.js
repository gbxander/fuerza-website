import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Layout, Menu, Row, Col, Icon, Button, Avatar } from "antd"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Home from "../Home/Home"
import About from "../About/About"
import Philosophy from "../Philosophy"
import Teams from "../Teams/Teams"
import Contact from "../Contact/Contact"
import Donate from "../Donate/Donate"
import Pipeline from "../Pipeline"
import "./Main.css"

const { Header, Content, Footer } = Layout
const { SubMenu } = Menu
const footerContentStyle = { marginBottom: 10, fontSize: 17 }
const Main = props => {
  const iconStyle = { fontSize: 30, marginRight: 10 }
  const isHome = true
  const stickyStyle = { position: "fixed", top: 0, width: "100%", zIndex: 1 }
  console.log("props: ", props)
  return (
    <React.Fragment>
      <Layout className="layout">
        <Router>
          <Header style={stickyStyle}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{
                lineHeight: "45px",
                fontSize: "17px",
                background: "rgba(0, 0, 0, 0)",
              }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">About</Link>
              </Menu.Item>

              <SubMenu key="sub1" title="Program">
                <Menu.Item key="3">
                  <Link to="/teams">Teams</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/tuition">Program Tuition</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="5">
                <Link to="/contact">Contact</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/donate">Donate</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/teams" component={Teams} />
            <Route path="/tuition" component={Philosophy} />
            <Route path="/contact" component={Contact} />
            <Route path="/donate" component={Donate} />
          </React.Fragment>
          <Footer className="footer-container">
            <Col>
              <div
                style={{
                  ...footerContentStyle,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {"Connect with us:"}
              </div>
              <div style={footerContentStyle}>{`info@fuerza.com`}</div>
              <div style={footerContentStyle}>{"(323) 555-5555"}</div>
              <SocialMediaRow isFooter={true} />
              <hr></hr>
              <Row type="flex" align="center" className="footer-bottom">
                <MiddleDot />
                <div>{"A 501(c)3 non-profit"}</div>
                <MiddleDot />
                <div>EIN 44-2222</div>
                <MiddleDot />
                <div>{"©2019 Fuerza Basketball Academy"}</div>
                <MiddleDot />
                <Button>Donate</Button>
              </Row>
            </Col>
          </Footer>
        </Router>
      </Layout>
    </React.Fragment>
  )
}

const MiddleDot = () => (
  <span
    style={{ fontSize: "20px", fontFamily: "sans-serif", margin: "0 10px" }}
  >
    &#183;
  </span>
)
const SocialMediaRow = ({ isFooter = false }) => {
  const iconStyle = {
    fontSize: isFooter ? 30 : 20,
    marginRight: 15,
  }

  const iconSize = 50
  return (
    <Row style={{ marginBottom: 20 }} className="social-media-row">
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar icon="facebook" size={iconSize} style={iconStyle} />
      </a>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar icon="instagram" size={iconSize} style={iconStyle} />
      </a>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar icon="youtube" size={iconSize} style={iconStyle} />
      </a>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar icon="mail" size={iconSize} style={iconStyle} />
      </a>
    </Row>
  )
}
export default Main
