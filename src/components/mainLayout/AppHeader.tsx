import { Space, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import {
  StyledAppHeaderLayout,
  StyledMenuFoldingButton,
} from './MainLayout.styles';

type AppHeaderProps = {
  collapsed: boolean;
  onMenuOpenerClick: () => void;
};

function AppHeader({ collapsed, onMenuOpenerClick }: AppHeaderProps) {
  const { sm } = useBreakpoint();

  return (
    <StyledAppHeaderLayout>
      <Space align="baseline">
        <StyledMenuFoldingButton
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onMenuOpenerClick}
        />
        <Typography.Title level={3} style={{ fontSize: sm ? '16px' : '12px' }}>
          Hello! I'm Martyna, React Developer. Welcome on my page!
        </Typography.Title>
      </Space>
    </StyledAppHeaderLayout>
  );
}

export default AppHeader;
