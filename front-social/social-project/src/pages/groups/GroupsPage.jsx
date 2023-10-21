import React from 'react'
import './index.scss'
import { Navigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { List, Card } from 'antd'
import { items } from '../../shared/sideBarRouting'

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
              width: '300px',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['2']}
              items={items}
            />
          </Sider>
          <Content className="content">
            <Card>
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
            </Card>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default GroupsPage
