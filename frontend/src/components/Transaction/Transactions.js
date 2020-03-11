import React, { Component } from 'react'
import RecordCard from './RecordCard'
import { Row, Col, DatePicker } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons';
import "./Transaction.css";
import AddModal from './AddModal';
import moment from 'moment';
import Axios from '../../config/api.service'
import TotalCard from './TotalCard';
const monthFormat = 'YYYY MMMM';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      cardList: [],
      monthValue: moment().format("MM-YYYY")
    }
  };

  componentDidMount() {
    Axios.get("/date")
      .then(result => {
        this.setState({
          cardList: result.data
        });
      })
  }

  showModal = (e) => {
    this.setState({
      visible: true,
    });
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

  handleChange = (month, monthString) => {
    let covert = moment(monthString).format("MM-YYYY")
    this.setState({ monthValue: covert })
  }

  render() {
    return (
      <>
        <Row type='flex' justify='center' style={{ backgroundColor: 'f0f4f5', display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <DatePicker defaultValue={moment()} format={monthFormat} picker="month" size='large'
            onChange={this.handleChange} />
        </Row>
        <Row type='flex' justify='center' style={{ backgroundColor: 'f0f4f5', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
          <TotalCard
          cardList = {this.state.cardList}
          monthValue={this.state.monthValue}/>
        </Row>
        <Row type='flex' justify='center' style={{ backgroundColor: 'f0f4f5', display: 'flex', justifyContent: 'center' }}>
          <Col >
            {this.state.cardList.map((card) => {
              if (card.published_date.split("-").slice(1,3).join('-') === this.state.monthValue){
                return (  <RecordCard
                  key={card.id}
                  card={card}
                />)
              }
            })}
          </Col>
        </Row>
        <AddModal
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          visible={this.state.visible}
        />
        <div style={{ position: 'fixed', right: '0', bottom: '0',zIndex:'100' }}>
          <div style={{ borderRadius: '50%', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span><PlusCircleOutlined style={{fontSize:'60px'}} onClick={this.showModal} /></span>
          </div>
        </div>
      </>
    )
  }
}

export default Transactions