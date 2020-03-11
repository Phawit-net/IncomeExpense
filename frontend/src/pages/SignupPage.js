import React from 'react'
import { Row, Form, Icon, Input, Col, Button } from 'antd'
import logo from '../images/logo.png'
import Axios from '../config/api.service'

class SignupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDirty: false,
    }
  }

  handleDirtyBlur = e => {
    const { value } = e.target
    this.setState({ isDirty: this.state.isDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Password และ Confirm password ไม่ตรงกัน')
    } else {
      callback()
    }
  }

  compareToSecondPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.isDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback()
  }

  handleSubmit = (value) => {
    Axios.post('/registerUser', {
      username: value.username,
      password: value.password,
      name: value.name,
      email:value.email
    })
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.error(err)
      })
    this.props.form.resetFields()
  }

  formRef = React.createRef();
  render() {
    return (
      <Row type="flex" style={{ height: '100vh' }} align="middle">
        <Col span={24} >
          <Row type="flex" justify="center" align="middle">
            <Col>
              <img src={logo} alt="Logo" style={{ height: '100%', maxHeight: '300px' }}></img>
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Form onFinish={this.handleSubmit} ref={this.formRef} style={{ maxWidth: '400px', width: '100%' }}>
              <Form.Item label="Username" name="username"
                rules={[{ required: true, message: 'Please input your username' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Password" name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label="Confirm password" name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label="Name" name='name'
                rules={[{ required: true, message: 'Please input your name' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Email" name='email'
                rules={[{ required: true, message: 'Please input your email' }]}>
                <Input />
              </Form.Item>
              <Row type="flex" justify="center">
                <Col md={8} sm={12} xs={24}>
                  <Form.Item>
                    <Button block type="primary" htmlType="submit" className="login-form-button">
                      Sign Up
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Row>
        </Col>
      </Row >
    )
  }
}
export default SignupPage;
