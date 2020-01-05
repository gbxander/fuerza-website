import React from "react"
import { Button, Icon, Row } from "antd"
import { FaHandHoldingHeart } from "react-icons/fa"
import { Element } from "react-scroll"
import "./Donate.less"

const Donate = () => {
  return (
    <section id="donate" className="donation-container">
      <div className="donate-prompt-container">
        <div className="donate-prompt">
          <Row type="flex" align="middle" justify="center">
            <h1>SHOW YOUR SUPPORT</h1>
            <FaHandHoldingHeart className="donation-icon" />
          </Row>
          <div className="donate-paragraph">
            Inspired by our work? Please consider making a donation to the
            Fuerza Basketball Academy. Our program is dedicated to providing
            high quality youth basketball training to children from underserved
            communities. We appreciate any contribution you feel inclined to
            make in support of our mission. Thank you!
          </div>
          <a href="https://www.paypal.com/" target="_blank">
            <Button>
              Donate <Icon type="heart" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Donate
