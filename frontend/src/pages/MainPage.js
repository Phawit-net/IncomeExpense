import React, { Component } from 'react'
import { Row, Col, Menu, Layout, Avatar } from 'antd';
import { InfoCircleOutlined, HistoryOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
const { Content, Sider } = Layout;

export default class MainPage extends Component {
  render() {
    return (
      <Layout>
        <Sider width={300} style={{ backgroundColor: 'fff' }}>
          <Menu style={{ backgroundColor: 'fff', boxShadow: '6px 0px 12px 0px rgba(156,156,156,1)' }}>
            <Menu.Item key='0' style={{ height: '120px', paddingTop: '20px', cursor: 'default' }} disabled>
              <Row type='flex' justify='center' align='middle'>
                <Col span = {8}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </Col>
                <Col span={16}>
                  <div style={{fontSize:'20px'}}>
                    Phawit Rojanakijpanich
                  </div>
                  <div>
                    sadas
                  </div>
                </Col>
              </Row>
            </Menu.Item>
            <Menu.Item key='1'>
              <InfoCircleOutlined />
              <span>Transcation</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <HistoryOutlined />
              <span>Stats Overview</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <PieChartOutlined />
              <span>Account</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Content>
          <div style={{ width: '100%', height: '100%' }}>
            asdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            assssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasssss
            sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdssdsdasdadsasd
            asdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            assssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasssss
            sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdssdsdasdadsasd
            asdasdasdasdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            assssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasssss
            sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasdasdasdssdsdasdadsasd
            </div>
        </Content>
      </Layout>
    )
  }
}
