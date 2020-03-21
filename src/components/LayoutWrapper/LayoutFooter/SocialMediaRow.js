import React from "react"
import { Row, Avatar } from "antd"
import "./SocialMediaRow.less"

const SocialMediaRow = () => {
  const iconStyle = {
    fontSize: 30,
    marginRight: 15,
  }

  const iconSize = 50
  return (
    <Row className="social-media-row">
      <a
        href="https://www.facebook.com/abner.rodriguez.7334"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar icon="facebook" className="social-media-icon" />
      </a>
      <a
        href="https://www.instagram.com/fuerzabasketballassociation"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar icon="instagram" className="social-media-icon" />
      </a>
      <a
        href="mailto:info@fuerzabasketball.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar icon="mail" className="social-media-icon" />
      </a>
    </Row>
  )
}

export default SocialMediaRow
