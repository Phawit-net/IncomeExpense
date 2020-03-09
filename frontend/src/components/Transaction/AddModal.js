import React, { Component } from 'react'
import { Row, Button, Modal, Select, Radio, Col, Form, Input, DatePicker, TimePicker } from 'antd'
import Axios from '../../config/api.service'
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';
const timeFormar = 'HH:mm';
const { Option } = Select;
const { TextArea } = Input;

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type:'Income',
      accounts: [],
      categories: []
    };
  }

  componentDidMount() {
    Axios.get("/accounts")
      .then(result => {
        this.setState({
          accounts: result.data
        });
      })
      Axios.get(`/category/${this.state.type}`)
      .then(result => {
        this.setState({
          categories: result.data
        });
      })
  }

  onSelected=(e)=>{
    this.setState({
      type: e.target.value
    },()=>{
      Axios.get(`/category/${this.state.type}`)
      .then(result => {
        this.setState({
          categories: result.data
        });
      })
    });
  }

  render() {
    const { handleOk, handleCancel, loading, visible } = this.props;
    return (
      <Modal
        title={[
          <Radio.Group style={{ display: 'flex', justifyContent: 'center' }} size="large" buttonStyle="solid" defaultValue="Income" onChange={this.onSelected}>
            <Radio.Button className='inc' style={{ fontSize: "20px" }} value="Income">Income</Radio.Button>
            <Radio.Button className='exp' style={{ fontSize: "20px" }} value="Expense">Expense</Radio.Button>
            <Radio.Button className='trn' style={{ fontSize: "20px" }} value="Transfer">Transfer</Radio.Button>
          </Radio.Group>
        ]}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Form onSubmit={this.submitForm}>
            <Row style={{ width: 450 }}>
              <Col span={24}>
                <Form.Item label="Date">
                  {/* {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ],
                    })(<Input />)} */}
                  <DatePicker style={{ margin: '0px 10px' }} format={dateFormat} />
                  <TimePicker format={timeFormar} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Account">
                  {/* {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ],
                    })(<Input />)} */}
                  <Select
                    labelInValue
                    // defaultValue={{ key: 'lucy' }}
                    style={{ width: 120 }}
                    onChange={this.handleChange}>
                    {this.state.accounts.map(account => (
                      <Option value={account.id} key={account.id}>
                        {account.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Category">
                  {/* {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ],
                    })(<Input />)} */}
                  <Select
                    labelInValue
                    // defaultValue={{ key: 'lucy' }}
                    style={{ width: 120 }}
                    onChange={this.handleChange}>
                     {this.state.categories.map(category => (
                      <Option value={category.id} key={category.id}>
                        {category.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Amount">
                  {/* {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ],
                    })(<Input />)} */}
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Description">
                  {/* {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ],
                    })(<Input />)} */}
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    )
  }
}
