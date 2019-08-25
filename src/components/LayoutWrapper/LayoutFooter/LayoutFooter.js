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
