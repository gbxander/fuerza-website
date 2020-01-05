import React from "react"
import { IoMdCalendar, IoIosCalendar } from "react-icons/io"
import { GoCalendar } from "react-icons/go"
import { Button, Icon, Layout, Row } from "antd"

import { Element } from "react-scroll"
import "./Events.less"

const Events = () => {
  return (
    <section id="events" className="events-container">
      <Row type="flex" align="middle" justify="center">
        <h1>OUR UPCOMING EVENTS</h1>
        <GoCalendar className="calendar-icon" />
      </Row>
    </section>
  )
}

export default Events
