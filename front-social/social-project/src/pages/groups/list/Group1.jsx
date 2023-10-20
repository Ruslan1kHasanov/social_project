import React from 'react'
import '../index.scss'
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
import { Layout, Menu, theme } from 'antd'
import { Avatar, List } from 'antd'

const { Header, Content, Footer, Sider } = Layout

const data = [
  {
    title: 'Данилов Дмитрий',
  },
  {
    title: 'Лавров Иван',
  },
  {
    title: 'Спиридонова Василиса',
  },
  {
    title: 'Мещеряков Тимофей',
  },
  {
    title: 'Петров Роман',
  },
  {
    title: 'Дроздов Григорий',
  },
  {
    title: 'Шубина Сара',
  },
  {
    title: 'Осипов Матвей',
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

const Group1 = () => {
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
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item
                  actions={[
                    <a key="list-loadmore-edit">edit</a>,
                    <a key="list-loadmore-more">more</a>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="помогите"
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

export default Group1
