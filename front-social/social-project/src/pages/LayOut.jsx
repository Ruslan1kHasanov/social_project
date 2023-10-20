import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import './index.scss'

const MyLayout = () => {
  return (
    <div className="container" style={{ height: '100vh', width: '100vw' }}>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout className="main_content">
          <Layout.Sider>Sider</Layout.Sider>
          <Layout.Content>
            <Routes>
              <Route path="/dashboard/groups" element={<div>groups</div>} />
              <Route path="/dashboard/asd" element={<div>asd</div>} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default MyLayout
