import React, { useContext } from 'react';
import { Avatar, Layout } from 'antd';
import AppMenu from './AppMenu';
import { CollapseType } from 'antd/es/layout/Sider';
import profilePic from '../../assets/images/profilePicture.jpeg';
import { StyledSiderLogoSpace } from './MainLayout.styles';
import Text from '../shared/Text';
import {
  SiderCollapseContext,
  SiderCollapseType,
} from './SiderCollapseContext';

function AppSider() {
  const { collapsed, setCollapsed, collapseType, setCollapseType } = useContext(
    SiderCollapseContext
  ) as SiderCollapseType;

  function handleCollapse(
    shouldCollapse: boolean,
    collapseType: CollapseType | undefined
  ) {
    setCollapsed(shouldCollapse);
    setCollapseType(collapseType);
  }

  return (
    <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      collapsed={collapsed}
      trigger={null}
      onBreakpoint={(broken) => {
        if (collapsed && collapseType !== 'responsive') {
          handleCollapse(collapsed, collapseType);
        } else {
          handleCollapse(broken, 'responsive');
        }
      }}
    >
      <StyledSiderLogoSpace>
        <Avatar alt="profile picture" size="large" src={profilePic} />
        <Text
          children={
            <>
              I'm Martyna
              <br />
              React Developer
            </>
          }
        />
      </StyledSiderLogoSpace>
      <AppMenu />
    </Layout.Sider>
  );
}

export default AppSider;
