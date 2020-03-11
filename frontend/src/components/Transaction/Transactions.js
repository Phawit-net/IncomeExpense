import React, { Component } from 'react'
import RecordCard from './RecordCard'
import { Row, Button, Col, DatePicker } from 'antd'
import "./Transaction.css";
import AddModal from './AddModal';
import moment from 'moment';
import Axios from '../../config/api.service'
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
    console.log(this.state)
    console.log(monthString)
    let covert = moment(monthString).format("MM-YYYY")
    this.setState({ monthValue: covert })
  }

  render() {
    return (
      <>
        <div style={{ position: 'absolute', right: '0', bottom: '0' }}>
          <div style={{ borderRadius: '50%', backgroundColor: 'red', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={this.showModal}> + </Button>
          </div>
        </div>
        <Row type='flex' justify='center' style={{ backgroundColor: 'f0f4f5', display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <DatePicker defaultValue={moment()} format={monthFormat} picker="month" size='large'
            onChange={this.handleChange} />
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
      </>
    )
  }
}

export default Transactions