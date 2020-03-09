import React, { Component } from 'react'
import { Row, Col, Tag } from 'antd'

export default class RecordCard extends Component {
  switchType(type,amount) {
    if (type.name == "Income") {
      return (<span style={{color:'#1a7bb9'}}>{amount}</span>)
    } else {
      return (<span style={{color:'#e25f51'}}>{amount}</span>)
    }
  }

  renderOrderList(orderList) {
    return orderList.map(order => (
      <Row type='flex' align='middle' style={{ padding: '10px 20px' }}>
        <Col span={6} style={{fontSize: '17px'}}>
          {order.category.name}
        </Col>
        <Col span={12}>
          <div style={{fontSize:'17px'}}>{order.description}</div>
          <div>{order.account.name}</div>
        </Col>
        <Col span={6} style={{ fontSize: '17px',display: 'flex', justifyContent: 'flex-end' }}>
          {/* {order.amount} */}
          {this.switchType(order.category.type , order.amount)}
        </Col>
      </Row>
    ))
  }

  renderCardList() {
    return this.props.cardList.map(card => (
      <div style={{ backgroundColor: '#fff', width: '480px', border: '1px solid #f0f0f0', boxShadow: '1px 2px 5px 1px #adadad' }}>
        <Row type='flex' align='middle' style={{ borderBottom: '1px solid #f0f0f0', padding: '0px 20px' }}>
          <Col span={12}>
            <Row type='flex' align='middle'>
              <Col span={7}>
                <span style={{ fontSize: '50px', padding: '0px' }}>{card.published_date.split('-')[0]}</span>
              </Col>
              <Col span={17}>
                <div>{card.published_date.split('-').slice(1,3).join('.')}</div>
                <Tag color="#2db7f5">friday</Tag>
              </Col>
            </Row>
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '17px' }}>
            $ 12,056.00
            </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '17px' }}>
            $ 372.00
            </Col>
        </Row>
        {this.renderOrderList(card.orders)}
      </div>
    ));
  }

  render() {
    // const { cardList } = this.props
    return (
      <>
        {this.renderCardList()}
      </>
    )
  }
}
