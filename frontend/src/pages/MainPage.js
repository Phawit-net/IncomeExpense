import React, { Component } from 'react'
import { Row, Col, Menu, Layout, Avatar } from 'antd';
import { UnorderedListOutlined, CreditCardOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import Transactions from '../components/Transaction/Transactions';
const { Content, Sider } = Layout;

export default class MainPage extends Component {
  render() {
    return (
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" width={350} style={{ backgroundColor: 'fff' }}>
          <Menu style={{ backgroundColor: 'fff', boxShadow: '6px 0px 12px 0px rgba(156,156,156,1)' }}>
            <Menu.Item key='0' style={{ height: '100px', cursor: 'default' }} disabled>
              <Row type='flex' justify='center' align='middle'>
                <Col span={7} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </Col>
                <Col span={17}>
                  <div style={{ fontSize: '20px', marginTop: '10px' }}>
                    Phawit Rojanakijpanich
                  </div>
                  <div>
                    Email
                  </div>
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item key='1' style={{ paddingLeft: '30px' }}>
              <UnorderedListOutlined />
              <span>Transcation</span>
            </Menu.Item>
            <Menu.Item key='2' style={{ paddingLeft: '30px' }}>
              <PieChartOutlined />
              <span>Stats Overview</span>
            </Menu.Item>
            <Menu.Item key='3' style={{ paddingLeft: '30px' }}>
              <CreditCardOutlined />
              <span>Account</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Content>
            <Transactions/>
        </Content>
      </Layout>
    )
  }
}
