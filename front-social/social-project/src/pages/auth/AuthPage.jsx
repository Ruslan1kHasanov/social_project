import './index.scss'
import { Form, Input, Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import { useState } from 'react'
import { CheckCircleTwoTone } from '@ant-design/icons'

const AuthPage = () => {
  const navigate = useNavigate()
  const [api, contextHolder] = notification.useNotification()
  const [name, setName] = useState('')

  const openNotification = (placement) => {
    api.info({
      message: 'Успешно!',
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
      description: (
        <span>
          Добро пожаловать в систему{' '}
          <b>{name}</b>
        </span>
      ),
      placement,
    })
  }

  const onClickAuth = () => {
    openNotification('top')
    setTimeout(() => {
      navigate('/groups')
    }, 1000)
  }

  return (
    <>
      {contextHolder}
      <div className="auth_container">
        <div className="auth_container__window">
          <div className="auth_container__window__logo_container">
            <Typography.Title>Social Project</Typography.Title>
          </div>
          <Form>
            <Form.Item>
              <Input
                placeholder="Логин"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" onClick={onClickAuth}>
                Авторизоваться
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default AuthPage
