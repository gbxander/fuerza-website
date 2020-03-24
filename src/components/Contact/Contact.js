import React, { useState } from "react"
import { navigate } from "gatsby-link"
import { message, Row, Col, Icon } from "antd"
import "./Contact.less"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({})

  const success = () => {
    message.success("This is a success message")
  }

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        success()
        navigate(form.getAttribute("action"))
      })
      .catch(error => alert(error))
  }

  return (
    <section id="contact">
      <div className="contact-container">
        <Col>
          <Row type="flex" align="middle" justify="center">
            <h1>CONTACT US</h1>
            <Icon className="contact-icon" type="mail" />
          </Row>
          <hr></hr>
        </Col>
        <Col>
          <div className="contact-prompt">
            Interested in learning more about our program? &nbsp;Get in touch
            with us for more information.
          </div>
        </Col>
        <Row type="flex" align="middle" justify="center">
          <form
            className="form-container"
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                <span className="form-ast">*</span> Your name:
                <br />
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                <span className="form-ast">*</span> Your email:
                <br />
                <input type="email" name="email" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Subject:
                <br />
                <input type="text" name="subject" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                <span className="form-ast">*</span> Message:
                <br />
                <textarea
                  name="message"
                  onChange={handleChange}
                  style={{ height: 150 }}
                />
              </label>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <p className="form-btn-container">
              <button className="form-btn" type="submit">
                Send
              </button>
            </p>
          </form>
        </Row>
      </div>
    </section>
  )
}

export default Contact
