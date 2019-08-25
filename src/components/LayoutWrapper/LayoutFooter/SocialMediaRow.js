import React from "react"
import { Row, Avatar } from "antd"
import "./SocialMediaRow.less"

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

export default SocialMediaRow
