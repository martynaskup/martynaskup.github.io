import React, { FC } from 'react';
import { Avatar, Layout, Space, Typography } from 'antd';
import AppMenu from './AppMenu';
import { CollapseType } from 'antd/es/layout/Sider';
import profilePic from '../../assets/images/profilePicture.jpeg';

const AppSider: FC<{
  collapsed: boolean;
  collapseType: CollapseType | undefined;
  onCollapse: (
    shouldCollapse: boolean,
    collapseType: CollapseType | undefined
  ) => void;
}> = ({ collapsed, collapseType, onCollapse }) => {
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
      <div className="logo">
        <Space>
          <Avatar alt="profile picture" size="large" src={profilePic} />
          <Typography.Text>
            I'm Martyna
            <br />
            React Developer
          </Typography.Text>
        </Space>
      </div>
      <AppMenu />
    </Layout.Sider>
  );
};

export default AppSider;
