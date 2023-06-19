import React, { JSX, useState } from 'react';
import { Layout } from 'antd';
import './AppLayout.css';
import AppSider from './AppSider';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import { CollapseType } from 'antd/es/layout/Sider';

function AppLayout(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const [currentCollapseType, setCurrentCollapseType] = useState<
    CollapseType | undefined
  >(undefined);

  return (
    <Layout>
      <AppSider
        collapsed={collapsed}
        collapseType={currentCollapseType}
        onCollapse={(
          shouldCollapse: boolean,
          collapseType: CollapseType | undefined
        ) => {
          setCollapsed(shouldCollapse);
          setCurrentCollapseType(collapseType);
        }}
      />
      <Layout>
        <AppHeader
          collapsed={collapsed}
          onMenuOpenerClick={() => {
            setCollapsed(!collapsed);
            setCurrentCollapseType('clickTrigger');
          }}
        />
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default AppLayout;
