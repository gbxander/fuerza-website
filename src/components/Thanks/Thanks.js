import React from "react"
import { Button, Icon } from "antd"
import { navigate } from "gatsby-link"
import "./Thanks.less"

const Thanks = () => (
  <div className="thanks-container">
    <div className="thanks-prompt">
      <h1>Thank you for getting in touch!</h1>
      <Icon type="like" />
      <p>
        We appreciate you contacting us. One of our staff members will get back
        in touch with you soon. Have a great day!
      </p>
      <Button onClick={() => navigate("/")} type="primary">
        Return to site
      </Button>
    </div>
  </div>
)

export default Thanks
