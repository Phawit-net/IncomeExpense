import React, { Component } from 'react'
import { Row, Col, Tag, Button, Card } from 'antd'

export default class TotalCard extends Component {

  calculateInc(cardList){
    let totalIncome = 0
    cardList.map((card) => {
      if (card.published_date.split("-").slice(1,3).join('-') === this.props.monthValue){
        card.orders.map(amount=>{
          if (amount.category.type.name === "Income"){
            totalIncome += parseInt(amount.amount)
          }
        })
      }
    })
    return (<span style={{ fontSize: '20px', color: '#1a7bb9' }}>&#3647; {totalIncome}</span>)
  }

  calculateExp(cardList){
    let totalExpense = 0
    cardList.map((card) => {
      if (card.published_date.split("-").slice(1,3).join('-') === this.props.monthValue){
        card.orders.map(amount=>{
          if (amount.category.type.name === "Expense"){
            totalExpense += parseInt(amount.amount)
          }
        })
      }
    })
    return (<span style={{ fontSize: '20px', color: '#e25f51' }}>&#3647; {totalExpense}</span>)
  }

  calculateTotal(cardList){
    let totalIncome = 0
    let totalExpense = 0
    cardList.map((card) => {
      if (card.published_date.split("-").slice(1,3).join('-') === this.props.monthValue){
        card.orders.map(amount=>{
          if (amount.category.type.name === "Income"){
            totalIncome += parseInt(amount.amount)
          }
          else if(amount.category.type.name === "Expense"){
            totalExpense += parseInt(amount.amount)
          }
        })
      }
    })
    return (<span style={{ fontSize: '20px'}}>&#3647; {totalIncome - totalExpense}</span>)
  }

  render() {
    const { cardList,monthValue } = this.props
    return (
      <div style={{ backgroundColor: '#fff', width: '480px', border: '1px solid #f0f0f0', boxShadow: '1px 2px 5px 1px #adadad', marginBottom: '15px' }}>
        <Row type='flex' align='middle' style={{ borderBottom: '1px solid #f0f0f0', padding: '0px 20px' }}>
          <Col span={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}>
            <Row>
              <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>Income</Col>
              <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>{this.calculateInc(cardList)}</Col>
            </Row>
          </Col>
          <Col span={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}>
            <Row>
              <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>Expense</Col>
              <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>{this.calculateExp(cardList)}</Col>
            </Row>
          </Col>
          <Col span={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}>
            <Row>
              <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>Total</Col>
              <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>{this.calculateTotal(cardList)}</Col>
            </Row>
          </Col>
        </Row>
        {/* {this.calculate(cardList)} */}
      </div>
    )
  }
}
