import { Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import {
  StyledAppHeaderLayout,
  StyledMenuFoldingButton,
} from './MainLayout.styles';
import AppHeaderText from './AppHeaderText';

type AppHeaderProps = {
  collapsed: boolean;
  onMenuOpenerClick: () => void;
};

function AppHeader({ collapsed, onMenuOpenerClick }: AppHeaderProps) {
  return (
    <StyledAppHeaderLayout>
      <Space align="baseline">
        <StyledMenuFoldingButton
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onMenuOpenerClick}
        />
        <AppHeaderText />
      </Space>
    </StyledAppHeaderLayout>
  );
}

export default AppHeader;
