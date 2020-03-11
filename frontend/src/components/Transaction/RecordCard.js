import React, { Component } from 'react'
import { Row, Col, Tag, Button, Card } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import "./RecordCard.css";
import Axios from '../../config/api.service'
import moment from 'moment';
import EditModal from './EditModal';

export default class RecordCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyOrder: [],
      visible: false,
      orderId: '',
      dateId: '',
      orderSelectEdit: []
    }
  };

  handleEdit = (orderId, dateId) => () => {
    console.log(orderId)
    console.log(dateId)
    Axios.get(`/editDate/${dateId}/${orderId}`)
      .then(result => {
        this.setState({
          orderSelectEdit: result.data,
        });
      }).then(result => {
        this.setState({
          visible: true,
          orderId: orderId,
          dateId: dateId
        })
      })
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  totalIncome(orders) {
    let totalIncome = 0
    orders.map(order => {
      if (order.category.type.name == 'Income') {
        totalIncome += parseInt(order.amount)
      }
    })
    return (<span style={{ fontSize: '20px', color: '#1a7bb9' }}>&#3647; {totalIncome}</span>)
  }
  totalExpense(orders) {
    let totalExpense = 0
    orders.map(order => {
      if (order.category.type.name == 'Expense') {
        totalExpense += parseInt(order.amount)
      }
    })
    return (<span style={{ fontSize: '20px', color: '#e25f51' }}>&#3647; {totalExpense}</span>)
  }

  switchColor(day) {
    if (day == 'Monday') {
      return (<Tag color="gold">{day}</Tag>)
    } else if (day === 'Tuesday') {
      return (<Tag color="magenta">{day}</Tag>)
    } else if (day === 'Wednesday') {
      return (<Tag color="green">{day}</Tag>)
    } else if (day === 'Thursday') {
      return (<Tag color="volcano">{day}</Tag>)
    } else if (day === 'Friday') {
      return (<Tag color="blue">{day}</Tag>)
    } else if (day === 'Saturday') {
      return (<Tag color="purple">{day}</Tag>)
    } else if (day === 'Sunday') {
      return (<Tag color="red">{day}</Tag>)
    }
  }

  switchType(type, amount) {
    if (type.name === "Income") {
      return (<span style={{ color: '#1a7bb9' }}>&#3647; {amount}</span>)
    } else if (type.name === "Expense") {
      return (<span style={{ color: '#e25f51' }}>&#3647; {amount}</span>)
    }
  }

  handleDelete = (orderId, dateId) => () => {
    console.log(orderId)
    console.log(dateId)
    Axios.delete(`/deleteOrder/${orderId}`)
      .then(result => {
        Axios.get(`/dateEmpty/${dateId}`)
          .then(result2 => {
            console.log(result2.data[0].orders)
            if (result2.data[0].orders == '') {
              Axios.delete(`/deleteDate/${dateId}`)
                .then(result => {
                  console.log(result)
                })
                .catch(err => {
                  console.error(err)
                })
              window.location.reload(true);
            }
            else {
              window.location.reload(true);
            }
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
  }


  renderOrderList(orderList) {
    return orderList.map(order => (
      <Row key={order.id} className='block' type='flex' align='middle' style={{ padding: '10px 20px' }}>
        <Col span={6} style={{ fontSize: '17px' }}>
          {order.category.name}
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '17px' }}>{order.description}</div>
          <div>{order.account.name}</div>
        </Col>
        <Col span={6} style={{ fontSize: '17px', display: 'flex', justifyContent: 'flex-end' }}>
          {this.switchType(order.category.type, order.amount)}
        </Col>
        <Col span={2} style={{ fontSize: '17px', display: 'flex', justifyContent: 'flex-end' }}>
          <span><EditOutlined className='editBtn' onClick={this.handleEdit(order.id, this.props.card.id)} /></span>
        </Col>
        <Col span={2} style={{ fontSize: '17px', display: 'flex', justifyContent: 'flex-end' }}>
          <span><DeleteOutlined className='deleteBtn' onClick={this.handleDelete(order.id, this.props.card.id)} /></span>
        </Col>
      </Row>
    ))
  }

  render() {
    const { card } = this.props
    return (
      <div style={{ backgroundColor: '#fff', width: '480px', border: '1px solid #f0f0f0', boxShadow: '1px 2px 5px 1px #adadad', marginBottom: '15px' }}>
        <Row type='flex' align='middle' style={{ borderBottom: '1px solid #f0f0f0', padding: '0px 20px' }}>
          <Col span={12}>
            <Row type='flex' align='middle'>
              <Col span={7}>
                <span style={{ fontSize: '50px', padding: '0px' }}>{card.published_date.split('-')[0]}</span>
              </Col>
              <Col span={17}>
                <div>{card.published_date.split('-').slice(1, 3).join('.')}</div>
                {this.switchColor(moment(card.published_date, 'DD-MM-YYYY').format('dddd'))}
              </Col>
            </Row>
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '17px' }}>
            {this.totalIncome(card.orders)}
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '17px' }}>
            {this.totalExpense(card.orders)}
          </Col>
        </Row>
        {this.renderOrderList(card.orders)}
        <EditModal
          selectOrderId={this.state.orderId}
          selectDateId={this.state.dateId}
          orderSelectEdit={this.state.orderSelectEdit}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          visible={this.state.visible}
        />
      </div>
    )
  }
}
