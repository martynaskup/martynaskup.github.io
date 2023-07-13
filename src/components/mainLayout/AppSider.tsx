import React from 'react';
import { Avatar, Layout, Typography } from 'antd';
import AppMenu from './AppMenu';
import { CollapseType } from 'antd/es/layout/Sider';
import profilePic from '../../assets/images/profilePicture.jpeg';
import { StyledSiderLogoSpace } from './MainLayout.styles';

type AppSiderProps = {
  collapsed: boolean;
  collapseType: CollapseType | undefined;
  onCollapse: (
    shouldCollapse: boolean,
    collapseType: CollapseType | undefined
  ) => void;
};

function AppSider({ collapsed, collapseType, onCollapse }: AppSiderProps) {
  return (
    <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      collapsed={collapsed}
      trigger={null}
      onBreakpoint={(broken) => {
        if (collapsed && collapseType !== 'responsive') {
          onCollapse(collapsed, collapseType);
        } else {
          onCollapse(broken, 'responsive');
        }
      }}
    >
      <StyledSiderLogoSpace>
        <Avatar alt="profile picture" size="large" src={profilePic} />
        <Typography.Text>
          I'm Martyna
          <br />
          React Developer
        </Typography.Text>
      </StyledSiderLogoSpace>
      <AppMenu />
    </Layout.Sider>
  );
}

export default AppSider;
