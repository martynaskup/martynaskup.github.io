import { FC } from 'react';
import { Button, Layout, Space } from 'antd';
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
      <Space>
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
        HEADER
      </Space>
    </Layout.Header>
  );
};

export default AppHeader;
