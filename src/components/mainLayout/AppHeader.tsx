import { Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import {
  StyledAppHeaderLayout,
  StyledMenuFoldingButton,
} from './MainLayout.styles';
import AppHeaderText from './AppHeaderText';
import { useContext } from 'react';
import {
  SiderCollapseContext,
  SiderCollapseType,
} from './SiderCollapseContext';

function AppHeader() {
  const { collapsed, setCollapsed, setCollapseType } = useContext(
    SiderCollapseContext
  ) as SiderCollapseType;

  function handleClick() {
    setCollapsed(!collapsed);
    setCollapseType('clickTrigger');
  }

  return (
    <StyledAppHeaderLayout>
      <Space align="baseline">
        <StyledMenuFoldingButton
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handleClick}
        />
        <AppHeaderText />
      </Space>
    </StyledAppHeaderLayout>
  );
}

export default AppHeader;
