import React, { Component } from 'react'
import { Row, Button, Modal, Select, Radio, Col, Form, Input, DatePicker, TimePicker } from 'antd'
import Axios from '../../config/api.service'
import moment from 'moment';

const { Option } = Select;

export default class EditModal extends Component {
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
      dateId: '',
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

  onFinish = (values) => {
    Axios.get(`/dateId/${this.props.orderSelectEdit.map(orders => orders.published_date)[0].split('-').reverse().join('-')}`)
      .then(result => {
        this.setState({
          dateId: result.data
        });
      })
      .then(date_result => {
        console.log("STEP2", this.state)
        Axios.put(`/changeOrder/${this.props.orderSelectEdit.map(orders => orders.orders.map(select => select.id)[0])[0]}`, {
          account_id: values.editAccount,
          category_id: values.editCategory,
          amount: values.editAmount,
          description: values.editDescription,
          date_id: this.state.dateId[0].id,
        })
          .then(result => {
            window.location.reload(true);
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
  }


  formRef = React.createRef();
  render() {
    const { handleOk, handleCancel, loading, visible, selectOrderId, selectDateId, orderSelectEdit } = this.props;
    return (
      <Modal
        destroyOnClose={true}
        title={[
          <Radio.Group name='type' style={{ display: 'flex', justifyContent: 'center' }} size="large" buttonStyle="solid" 
            defaultValue={this.props.orderSelectEdit.map(orders => orders.orders.map(select => select.category.type.name)[0])[0]} 
            onChange={this.onSelected}>
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
                <Form.Item name="editDate" label="Date" >
                  <DatePicker
                    disabled
                    defaultValue={moment(orderSelectEdit.map(orders => orders.published_date), 'DD-MM-YYYY')}
                    value={moment(orderSelectEdit.map(orders => orders.published_date), 'DD-MM-YYYY')}
                    onChange={(date, dateString) => { this.setState({ dateValue: dateString }) }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="editTime" label="Time" >
                  <TimePicker disabled defaultValue={moment(orderSelectEdit.map(orders => orders.orders.map(select => select.published_time)), "HH:mm")} onChange={(time, timeString) => { this.setState({ timeValue: timeString }) }} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Account" name="editAccount">
                  <Select
                    defaultValue={orderSelectEdit.map(orders => orders.orders.map(select => select.account.name))}
                    value={orderSelectEdit.map(orders => orders.orders.map(select => select.account.name))}
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
                <Form.Item label="Category" name="editCategory">
                  <Select
                    defaultValue={orderSelectEdit.map(orders => orders.orders.map(select => select.category.name))}
                    value={orderSelectEdit.map(orders => orders.orders.map(select => select.category.name))}
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
                <Form.Item label="Amount" name="editAmount">
                  <Input
                    defaultValue={orderSelectEdit.map(orders => orders.orders.map(select => select.amount))}
                    style={{ width: 450 }} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Description" name="editDescription">
                  <Input rows={4}
                    defaultValue={orderSelectEdit.map(orders => orders.orders.map(select => select.description))}
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
                    SAVE
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

