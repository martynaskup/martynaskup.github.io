import { Layout } from 'antd';

const AppContent = () => {
  return (
    <Layout.Content style={{ margin: '24px 16px 0' }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        content
      </div>
    </Layout.Content>
  );
};

export default AppContent;
