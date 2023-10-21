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
import { Layout, Menu, theme } from 'antd'
import { Avatar, List } from 'antd'

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Card } from 'antd'

const { Meta } = Card

const gridStyle = {
  width: '100%',
  textAlign: 'center',
}

const { Header, Content, Footer, Sider } = Layout

const data = [
  {
    title: <span className="decrement">-5 очков СР</span>,
    description: 'Опоздание более чем на 15 минут',
  },
  {
    title: <span className="increment">+50 очков СР</span>,
    description: 'Участие в олимпиаде',
  },
  {
    title: <span className="decrement">-10 очков СР</span>,
    description: 'Отсутствие на паре',
  },
  {
    title: <span className="increment">+30 очков СР</span>,
    description: 'Своевременная сдача дз',
  },
  {
    title: <span className="increment">+50 очков СР</span>,
    description: 'Посещение мероприятия',
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

const User = () => {
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
          <Content className="cards">
            <Card
              style={{
                width: 800,
                height: 400,
              }}
            >
              <Card.Grid hoverable={false} style={gridStyle}>
                <Meta
                  avatar={
                    <Avatar
                      className="avatar"
                      src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                    />
                  }
                  title={<span className="name">Данилов Дмитрий</span>}
                  description={
                    <span className="span-1">
                      Математический факультет <br /> Группа: МТ-401 <br />
                      Социальный рейтинг: 105
                    </span>
                  }
                />
              </Card.Grid>
              <Meta
                description={
                  <div className="card-2">
                    <span className="span-2">
                      Это активный, ответственный, целеустремленный,
                      добросовестный, отзывчивый, успешный в учебе человек с
                      обширными многосторонними интересами, основная сфера
                      интересов которого – учеба и будущая профессия.
                    </span>
                  </div>
                }
              />
            </Card>
            <Card
              style={{
                width: 800,
                height: 750,
              }}
            >
              <Meta
                title={
                  <span className="history">История социального рейтинга</span>
                }
              />
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<p>{item.title}</p>}
                      description={<p>{item.description}</p>}
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

export default User
