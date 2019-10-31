import React from "react"
import { Form, Input, Button, Row, Col, Icon, Layout } from "antd"
import "./Contact.less"

const { Content } = Layout
const { TextArea } = Input

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleConfirmBlur = this.handleConfirmBlur.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
    })
  }

  handleConfirmBlur(e) {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 10 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 10 },
        sm: { span: 12 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 20,
          offset: 0,
        },
        sm: {
          span: 11,
          offset: 10,
        },
      },
    }

    return (
      <Layout>
        <Content className="content-container">
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
                Interested in learning more about our program? &nbsp;Get in
                touch with us for more information.
              </div>
            </Col>
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              className="contact-form"
              netlify
            >
              <Form.Item label="Name">
                {getFieldDecorator("firstname", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your name.",
                      whitespace: true,
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="E-mail">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Subject">
                <Input />
              </Form.Item>
              <Form.Item label="Message">
                {getFieldDecorator("message", {
                  rules: [
                    {
                      required: true,
                      message: "Message empty",
                      whitespace: true,
                    },
                  ],
                })(<TextArea autosize={{ minRows: 4 }} />)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    )
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(Contact)

export default WrappedRegistrationForm
