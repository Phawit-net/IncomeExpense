import React, { Component } from 'react'
import RecordCard from './RecordCard'
import { Row, Button, Modal,Select, Radio } from 'antd'
import "./Transaction.css";
const { Option } = Select

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cardList :[
      //   {
      //     id :1,
      //     date:'06-02-2020',
      //     description:'ข้าว7',
      //     type:'expense',
      //     category:'food',
      //     account:'cash'
      //   },
      //   {
      //     id :2,
      //     date:'06-02-2020',
      //     description:'วินมอไซ',
      //     type:'expense',
      //     category:'transport',
      //     account:'cash'
      //   }
      // ]
      cardList: [
        {
          date: '06-02-2020',
          orders: [
            { id: 1, description: 'ข้าว7', type: 'expense', category: 'food', account: 'cash', price: '78' },
            { id: 2, description: 'วินมอไซ', type: 'expense', category: 'transport', account: 'cash', price: '25' }
          ]
        }
      ]
    }
  };


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <div style={{ position: 'absolute', right: '0', bottom: '0' }}>
          <div style={{ borderRadius: '50%', backgroundColor: 'red', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={this.showModal}> + </Button>
          </div>
        </div>
        <Row type='flex' justify='center' style={{ backgroundColor: 'f0f4f5' }}>
          <RecordCard
            cardList={this.state.cardList}
          />
        </Row>
        <Modal
          title={[
            <Radio.Group style={{display:'flex',justifyContent:'center'}} size="large" buttonStyle="solid">
              <Radio.Button className='inc'style={{fontSize:"20px"}} value="large">Income</Radio.Button>
              <Radio.Button className='exp'style={{fontSize:"20px"}} value="default">Expense</Radio.Button>
              <Radio.Button className='trn'style={{fontSize:"20px"}} value="small">Tranfer</Radio.Button>
            </Radio.Group>
          ]}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    )
  }
}
