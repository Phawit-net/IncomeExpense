import React from 'react'
import { Row, Col, Form, Icon, Input, Button } from 'antd';
import logo from '../images/logo.png'
import { connect } from 'react-redux'
import { login } from '../redux/actions/actions'
import jwtDecode from 'jwt-decode'
import Axios from '../config/api.service'
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {

  handleSubmit = (values) => {
    Axios.post('/loginUser', {
      username: values.username,
      password: values.password
    })
      .then(result => {
        const user = jwtDecode(result.data.token)
        this.props.login(user, result.data.token)
        this.props.history.push('/')
        window.location.reload(true);
      })
      .catch(err => {
        console.error(err);
        this.props.form.resetFields()
      })
  }

  formRef = React.createRef();
  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
          <Col>
            <img src={logo} alt="Logo" style={{ width: '100%', paddingLeft: '24px', paddingRight: '24px', maxWidth: '400px' }}></img>
          </Col>
          <Col >
            <Form onFinish={this.handleSubmit} ref={this.formRef} style={{ width: '100%' }}>
              <Col span={24}>
                <Form.Item label="Username" name="username"
                  rules={[{ required: true, message: 'Please input your username' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Password" name="password"
                  rules={[{ required: true, message: 'Please input your password' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Link to='/signup'>
                      <Button block type="link" >
                        Signup
                      </Button>
                    </Link>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Button block type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row >
      </div >
    )
  }
}

const mapDispatchToProps = {
  login: login
}

// const LoginForm = Form.create({ name: 'login' })(LoginPage);
export default connect(null, mapDispatchToProps)(LoginPage)