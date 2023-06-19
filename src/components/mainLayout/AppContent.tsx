import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const AppContent = () => {
  return (
    <>
      <Layout.Content style={{ margin: '16px 16px 0', textAlign: 'center' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 500 }}
        >
          <Outlet />
        </div>
      </Layout.Content>
    </>
  );
};

export default AppContent;
