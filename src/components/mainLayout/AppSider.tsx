import React, { Dispatch, FC, SetStateAction } from 'react';
import { Layout } from 'antd';

import AppMenu from './AppMenu';

const AppSider: FC<{
  collapsed: boolean;
  onCollapse: Dispatch<SetStateAction<boolean>>;
}> = ({ collapsed, onCollapse }) => {
  return (
    <Layout.Sider
      breakpoint="md"
      collapsedWidth="0"
      collapsible
      collapsed={collapsed}
      trigger={null}
      onBreakpoint={(broken) => {
        onCollapse(broken);
        console.log('broken', broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <AppMenu />
    </Layout.Sider>
  );
};

export default AppSider;
