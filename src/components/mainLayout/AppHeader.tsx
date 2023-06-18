import { FC } from 'react';
import { Button, Layout, Space, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const AppHeader: FC<{
  collapsed: boolean;
  onMenuOpenerClick: () => void;
}> = ({ collapsed, onMenuOpenerClick }) => {
  return (
    <Layout.Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    >
      <Space align="baseline">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onMenuOpenerClick}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <Typography.Title level={1} style={{ fontSize: '20px' }}>
          Hello! I'm Martyna, React Developer. Welcome on my page!
        </Typography.Title>
      </Space>
    </Layout.Header>
  );
};

export default AppHeader;
