import React from "react"
import { Row, Col, Button, Layout } from "antd"
import SocialMediaRow from "./SocialMediaRow"
import "./LayoutFooter.less"

const { Footer } = Layout

const LayoutFooter = () => {
  const footerContentStyle = { marginBottom: 10, fontSize: 17 }

  return (
    <Footer className="footer-container">
      <Col>
        <div
          style={{
            ...footerContentStyle,
            fontSize: 20,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          {"CONNECT WITH US:"}
        </div>
        <div style={footerContentStyle}>{`info@fuerzabasketball.org`}</div>
        <SocialMediaRow isFooter={true} />
        <hr></hr>
        <Row type="flex" justify="center" className="footer-bottom">
          <MiddleDot />
          <div>{"A 501(c)3 non-profit"}</div>
          <MiddleDot />
          <div>EIN 84-2604412</div>
          <MiddleDot />
          <div>{"©2019 Fuerza Basketball Academy"}</div>
        </Row>
      </Col>
    </Footer>
  )
}

const MiddleDot = () => (
  <span
    style={{ fontSize: "20px", fontFamily: "sans-serif", margin: "0 10px" }}
  >
    &#183;
  </span>
)

export default LayoutFooter
