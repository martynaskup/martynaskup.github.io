import { FC } from 'react';
import { Button, Layout, Space, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const AppHeader: FC<{
  collapsed: boolean;
  onMenuOpenerClick: () => void;
}> = ({ collapsed, onMenuOpenerClick }) => {
  const { sm } = useBreakpoint();
  return (
    <Layout.Header
      className="site-layout-sub-header-background"
      style={{ padding: 0, height: 'auto' }}
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
        <Typography.Title level={5} style={{ fontSize: sm ? '16px' : '12px' }}>
          Hello! I'm Martyna, React Developer. Welcome on my page!
        </Typography.Title>
      </Space>
    </Layout.Header>
  );
};

export default AppHeader;
