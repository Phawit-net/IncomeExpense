import React, { Component } from 'react'
import { Row, Col, Tag } from 'antd'

export default class RecordCard extends Component {
  renderOrderList(orderList) {
    return orderList.map(order => (
      <Row type='flex' align='middle' style={{ padding: '10px 20px' }}>
        <Col span={6} style={{fontSize: '17px'}}>
          {order.category}
        </Col>
        <Col span={12}>
          <div style={{fontSize:'17px'}}>{order.description}</div>
          <div>{order.account}</div>
        </Col>
        <Col span={6} style={{ fontSize: '17px',display: 'flex', justifyContent: 'flex-end' }}>
          {order.price}
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
                <span style={{ fontSize: '50px', padding: '0px' }}> 06 </span>
              </Col>
              <Col span={17}>
                <div>{card.date}</div>
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
    const { cardList } = this.props
    return (
      <>
        {this.renderCardList()}
      </>
    )
  }
}
