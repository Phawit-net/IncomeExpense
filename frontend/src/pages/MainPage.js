import React, { Component } from 'react'
import { Row, Col, Menu, Layout, Avatar ,Button } from 'antd';
import { UnorderedListOutlined, CreditCardOutlined, PieChartOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Transactions from '../components/Transaction/Transactions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../redux/actions/actions'
import "./MainPage.css";
const { Content, Sider } = Layout;

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectCategory: '1'
    }
  }

  handleRenderCategory() {
    switch (this.state.selectCategory) {
      case '1':
        return <Transactions />
      default:
        return
    }
  }

  handleLogOut = () => {
    this.props.logout()
    this.props.history.push('/')
    window.location.reload(true);
  }

  handleSelectCategory(e) {
    console.log(e.key)
    this.setState({
      selectCategory: e.key
    })
  }
  render() {
    let user = this.props.user
    return (
      <>
      <div style={{background: 'linear-gradient(45deg, rgba(251,103,124,1) 0%, rgba(253,213,68,1) 100%)',width:'100%',height:'50px',zIndex:'10'}}></div>
      <Layout>  
        <Sider breakpoint="lg" collapsedWidth="0" width={350} style={{ backgroundColor: 'fff' }}>
          <Menu className ='mainmenu' onSelect={(e) => this.handleSelectCategory(e)} style={{ backgroundColor: 'fff', boxShadow: '6px 0px 12px 0px rgba(156,156,156,1)' }}>
            <Menu.Item key='0' style={{ height: '100px', cursor: 'default' }} disabled>
              <Row type='flex' justify='center' align='middle'>
                <Col span={7} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar size={64} icon={<img src={this.props.user.avatar}/>} />
                </Col>
                <Col span={17}>
                  <div style={{ fontSize: '20px', color:'#595959', marginTop: '10px' }}>
                    {user.username}
                  </div>
                  <div style={{color:'#595959'}}>
                  {user.email}
                  </div>
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item key='1' style={{ paddingLeft: '30px' }}>
              <UnorderedListOutlined />
              <span>Transcation</span>
            </Menu.Item>
            <Menu.Item disabled key='2' style={{ paddingLeft: '30px' }}>
              <PieChartOutlined />
              <span>Stats Overview</span>
            </Menu.Item>
            <Menu.Item disabled key='3' style={{ paddingLeft: '30px' }}>
              <CreditCardOutlined />
              <span>Account</span>
            </Menu.Item>
          </Menu>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="danger" onClick={this.handleLogOut}>Log out</Button>
          </div>
        </Sider>

        <Content>
          {this.handleRenderCategory()}
        </Content>
      </Layout>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    user: state.user,
  }
}

const mapDispatchToProps = {
  logout: logout,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage))