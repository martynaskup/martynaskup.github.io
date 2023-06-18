import { Layout } from 'antd';

const AppContent = () => {
  return (
    <Layout.Content style={{ margin: '16px 16px 0' }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 500 }}
      >
        content
      </div>
    </Layout.Content>
  );
};

export default AppContent;
