import React, { Component } from 'react'
import { Row, Button, Modal, Select, Radio, Col, Form, Input, DatePicker, TimePicker } from 'antd'
import Axios from '../../config/api.service'
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;
const dateConfig = {
  rules: [{ type: 'object', required: true, message: 'Please select Date!' }],
};
const timeConfig = {
  rules: [{ type: 'object', required: true, message: 'Please select Date!' }],
};

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Income',
      accounts: [],
      categories: [],
      dateValue: '',
      timeValue: '',
      accountValue: '',
      categoryValue: '',
      dateId: ''
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

  onSelected = (e) => {
    this.setState({
      type: e.target.value
    }, () => {
      Axios.get(`/category/${this.state.type}`)
        .then(result => {
          this.setState({
            categories: result.data
          });
        })
    });
  }

  // onFinish = (values) => {
  //   Axios.post("/addDate", {
  //     published_date: this.state.dateValue
  //   })
  //     .then(result => {
  //       Axios.get(`/dateId/${this.state.dateValue}`)
  //         .then(result => {
  //           this.setState({
  //             dateId: result.data
  //           });
  //         })
  //         .then(date_result => {
  //           console.log(this.state)
  //           Axios.post("/addOrder", {
  //             account_id: this.state.accountValue,
  //             category_id: this.state.categoryValue,
  //             amount: values.amount,
  //             description: values.description,
  //             date_id: this.state.dateId[0].id,
  //           })
  //             .then(result => {
  //               console.log(result)
  //             })
  //             .catch(err => {
  //               console.error(err)
  //             })
  //         })
  //         .catch(err => {
  //           console.error(err)
  //         })
  //     })
  //     .catch(err => {
  //       Axios.get(`/dateId/${this.state.dateValue}`)
  //         .then(result => {
  //           this.setState({
  //             dateId: result.data
  //           });
  //         })
  //         .then(date_result => {
  //           console.log(this.state)
  //           Axios.post("/addOrder", {
  //             account_id: this.state.accountValue,
  //             category_id: this.state.categoryValue,
  //             amount: values.amount,
  //             description: values.description,
  //             date_id: this.state.dateId[0].id,
  //           })
  //             .then(result => {
  //               console.log(result)
  //             })
  //             .catch(err => {
  //               console.error(err)
  //             })
  //         })
  //         .catch(err => {
  //           console.error(err)
  //         })
  //     })
  //   this.formRef.current.resetFields();
  //   window.location.reload(true);
  // }

  onFinish = (values) => {
    console.log('press')
    Axios.get(`/dateId/${this.state.dateValue}`)
      .then(result => {
        if (result.data[0] != undefined) {
          this.setState({
            dateId: result.data
          })
        }
        else if (result.data[0] == undefined) {
          console.log("No Time")
          Axios.post("/addDate", {
            published_date: this.state.dateValue
          })
            .then(result => {
              Axios.get(`/dateId/${this.state.dateValue}`)
                .then(result => {
                  this.setState({
                    dateId: result.data
                  });
                }).then(date_result => {
                  console.log(this.state)
                  Axios.post("/addOrder", {
                    account_id: this.state.accountValue,
                    category_id: this.state.categoryValue,
                    amount: values.amount,
                    description: values.description,
                    date_id: this.state.dateId[0].id,
                  })
                    .then(result => {
                      console.log(result)
                    })
                    .catch(err => {
                      console.error(err)
                    })
                })
                .catch(err => {
                  console.error(err)
                })
            })
        }
      }).then(date_result => {
        console.log(this.state)
        Axios.post("/addOrder", {
          account_id: this.state.accountValue,
          category_id: this.state.categoryValue,
          amount: values.amount,
          description: values.description,
          date_id: this.state.dateId[0].id,
        })
          .then(result => {
            console.log(result)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
    this.formRef.current.resetFields();
    window.location.reload(true);
  }

  formRef = React.createRef();
  render() {
    const { handleOk, handleCancel, loading, visible } = this.props;
    return (
      <Modal
        destroyOnClose={true}
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
        footer={null}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Form onFinish={this.onFinish} ref={this.formRef}>
            <Row style={{ width: 450 }}>
              <Col span={12}>
                <Form.Item name="date" label="Date" {...dateConfig}>
                  <DatePicker format='YYYY-MM-DD' defaultOpenValue={moment()} onChange={(date, dateString) => { this.setState({ dateValue: dateString }) }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="time" label="Time" {...timeConfig}>
                  <TimePicker format="HH:mm" defaultOpenValue={moment()} onChange={(time, timeString) => { this.setState({ timeValue: timeString }) }} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Account" name="account"
                  rules={[{ required: true, message: 'Please select your country!' }]}>
                  <Select
                    style={{ width: 450 }}
                    onChange={(value) => { this.setState({ accountValue: value }) }}>
                    {this.state.accounts.map(account => (
                      <Option value={account.id} key={account.id}>
                        {account.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Category" name="category"
                  rules={[{ required: true, message: 'Please select your country!' }]}>
                  <Select
                    style={{ width: 450 }}
                    onChange={(value) => { this.setState({ categoryValue: value }) }}>
                    {this.state.categories.map(category => (
                      <Option value={category.id} key={category.id}>
                        {category.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Amount" name="amount"
                  rules={[{ required: true, message: 'Please input your Amount' }]}>
                  <Input
                    style={{ width: 450 }} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Description" name="description"
                  rules={[{ required: true, message: 'Please input your Description' }]}>
                  <TextArea rows={4}
                    style={{ width: 450 }} />
                </Form.Item>
              </Col>
              <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Item>
                  <Button
                    type="primary"
                    loading={loading}
                    htmlType="submit"
                    onClick={handleOk}>
                    ADD
                </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal >
    )
  }
}

