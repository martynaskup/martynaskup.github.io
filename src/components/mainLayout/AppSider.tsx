import React, { FC } from 'react';
import { Layout } from 'antd';
import AppMenu from './AppMenu';
import { CollapseType } from 'antd/es/layout/Sider';

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
      <div className="logo" />
      <AppMenu />
    </Layout.Sider>
  );
};

export default AppSider;
