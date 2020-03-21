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
         { /*
          <a href="https://www.paypal.com/" target="_blank">
            <Button>
              Donate <Icon type="heart" />
            </Button>
          </a> */}
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="83GS3LYBAC4TL" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        </div>


      </div>
    </section>
  )
}

export default Donate
