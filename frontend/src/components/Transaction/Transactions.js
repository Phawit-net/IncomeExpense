import React, { Component } from 'react'
import RecordCard from './RecordCard'
import { Row } from 'antd'

export default class Transactions extends Component {
  render() {
    return (
      <>
        <div style={{position:'absolute',right:'0',bottom:'0'}}>
          <div style={{ borderRadius: '50%', backgroundColor: 'red', width: '100px', height: '100px'}}></div>
        </div>
        <Row type='flex' justify='center' style={{backgroundColor:'f0f4f5'}}>
          <RecordCard />
        </Row>
        
      </>
    )
  }
}
