import React, { Component } from 'react'
import RecordCard from './RecordCard'
import { Row, Button, Col } from 'antd'
import "./Transaction.css";
import AddModal from './AddModal';
import { addNote } from '../../redux/actions/actions';
import { connect } from 'react-redux'
import store from '../../redux/store/store'
import Axios from '../../config/api.service'

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      cardList: []
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
    // console.log(this.state);
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    // console.log(e);
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
        <Row type='flex' justify='center' style={{ backgroundColor: 'f0f4f5',display:'flex' , justifyContent:'center' }}>
          <Col >
            <RecordCard
              cardList={this.state.cardList}
            />
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

const mapDispatchToProps = {
  addNewNote: addNote
}

export default connect(null, mapDispatchToProps)(Transactions)