import React from 'react'
import './index.scss'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd'
import { Avatar, List } from 'antd'

const { Header, Content, Footer, Sider } = Layout

const data = [
  {
    title: 'МТ-401',
  },
  {
    title: 'МТ-402',
  },
  {
    title: 'МТ-403',
  },
  {
    title: 'МТ-404',
  },
]

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}))

const GroupsPage = () => {
  return (
    <>
      <Layout>
        <Header className="header">
          <h1 className="logo">Логотип</h1>
          <div className="user-icon"></div>
        </Header>
        <Layout hasSider>
          <Sider
            style={{
              overflow: 'auto',
              height: 'calc(100vh - 64px)',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['4']}
              items={items}
            />
          </Sider>
          <Content className="content">
            <List
              className="list"
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <a href={<Navigate to={'/group1'} />}>{item.title}</a>
                    }
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default GroupsPage
