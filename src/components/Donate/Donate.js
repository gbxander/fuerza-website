import React from "react"
import { Button, Icon } from "antd"
import { FaHandHoldingHeart } from "react-icons/fa"
import "./Donate.less"

const Donate = () => {
  return (
    <div className="donation-container">
      <div className="donate-prompt-container">
        <div className="donate-prompt">
          <FaHandHoldingHeart style={{ fontSize: 60, marginBottom: 20 }} />
          <h1>- SHOW YOUR SUPPORT -</h1>
          <div className="donate-paragraph">
            Thank you for considering making a donation to the Fuerza Basketball
            Academy. Our program is dedicated to providing high quality youth
            basketball training as well as life-long skills and values to
            children from underserved communities. We appreciate any
            contribution you feel inclined to make to help support our mission.
          </div>
          <a href="https://www.paypal.com/" target="_blank">
            <Button>
              Donate <Icon type="heart" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Donate
