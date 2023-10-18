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
import { Layout } from 'antd'

const { Header, Content, Footer, Sider } = Layout

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
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <>
      <Layout hasSider>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
      </Layout>
    </>
  )
}

export default GroupsPage
