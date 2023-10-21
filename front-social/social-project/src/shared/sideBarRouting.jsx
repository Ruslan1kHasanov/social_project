import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  StarFilled,
  StarOutlined,
  TeamOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const items = [
    {
      key: 1,
      icon: <UserOutlined />,
      label: 'Профиль'
    },
    {
      key: 2,
      icon: <TeamOutlined />,
      label: <Link to={'/groups'}>Группы</Link>
    },
    {
      key: 12,
      icon: <StarOutlined />,
      label: 'Мои группы',
      children: [
        {
          key: 3123,
          label: <Link to={'/group1'}>МТ-402</Link>
        },
        {
          key: 4123,
          label: 'MT-401'
        },
        {
          key: 7,
          label: 'MT-403'
        },
      ]
    },
    {
      key: 344,
      type: 'divider'
    },
    {
      key: 3,
      icon: <SettingOutlined />,
      label: 'Настройки'
    },
    {
      key: 4,
      icon: <LogoutOutlined />,
      label: 'Выход'
    },
  ]