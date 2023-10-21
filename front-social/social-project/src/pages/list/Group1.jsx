import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, theme, Card, Button, Input, Form, InputNumber } from 'antd'
import { Avatar, List, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
import { items } from '../../shared/sideBarRouting'
import { useState } from 'react'

const { Header, Content, Footer, Sider } = Layout

const data = [
  {
    title: 'Данилов Дмитрий',
    description: (
      <span>
        соц.рейтинг: <b style={{ color: '#3dc906' }}>105</b>
      </span>
    ),
  },
  {
    title: 'Лавров Иван',
    description: (
      <span>
        соц.рейтинг: <b style={{ color: '#3dc906' }}>90</b>
      </span>
    ),
  },
  {
    title: 'Спиридонова Василиса',
    description: (
      <span>
        соц.рейтинг: <b style={{ color: '#3dc906' }}>89</b>
      </span>
    ),
  },
  {
    title: 'Мещеряков Тимофей',
    description: (
      <span>
        соц.рейтинг: <b style={{ color: '#f0c454' }}>67</b>
      </span>
    ),
  },
  {
    title: 'Петров Роман',
    description: (
      <span>
        соц.рейтинг: <b style={{ color: '#f0c454' }}>52</b>
      </span>
    ),
  },
  {
    title: 'Дроздов Григорий',
    description: (
      <span>
        соц.рейтинг: <b style={{ color: '#f75d4f' }}>45</b>
      </span>
    ),
  },
  {
    title: 'Шубина Сара',
    description: (
      <span>
        соц.рейтинг: <b style={{ color: '#f75d4f' }}>43</b>
      </span>
    ),
  },
  {
    title: 'Осипов Матвей',
    description: (
      <span>
        соц.рейтинг: <b style={{ color: '#f75d4f' }}>24</b>
      </span>
    ),
  },
]

const Group1 = () => {
  const nav = useNavigate()
  const [open, setOpen] = useState(false)

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
              defaultSelectedKeys={['3123']}
              items={items}
            />
          </Sider>
          <Content className="content">
            <Card>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[
                      <Button
                        key="list-loadmore-edit"
                        type="link"
                        onClick={() => setOpen(!open)}
                      >
                        изменить рейтинг
                      </Button>,
                      <Button
                        type="link"
                        icon={<ArrowRightOutlined />}
                        onClick={() => nav('/user')}
                      />,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                        />
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Content>
        </Layout>
      </Layout>
      <Modal
        centered
        title='Запрос на изменение соц.рейтинга'
        open={open}
        onCancel={() => setOpen(!open)}
        onOk={() => setOpen(!open)}
        cancelText='Отменить'
        okText='Подтвердить'
      >
        <Form style={{width: '450px'}}>
          <Form.Item>
            <label htmlFor="Описание">Описание</label>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <label htmlFor="Рейтинг">Рейтинг</label>
            <br />
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Group1
