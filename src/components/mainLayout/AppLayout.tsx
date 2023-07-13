import React, { useState } from 'react';
import { Layout } from 'antd';
import AppSider from './AppSider';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import { CollapseType } from 'antd/es/layout/Sider';
import AppHeader from './AppHeader';

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentCollapseType, setCurrentCollapseType] = useState<
    CollapseType | undefined
  >(undefined);

  return (
    <Layout>
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
        </Layout>
      </Layout>
      <AppFooter />
    </Layout>
  );
}

export default AppLayout;
