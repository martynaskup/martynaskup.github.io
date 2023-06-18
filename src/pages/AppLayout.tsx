import React, { JSX, useState } from 'react';
import { Layout } from 'antd';
import './AppLayout.css';
import AppSider from '../components/mainLayout/AppSider';
import AppHeader from '../components/mainLayout/AppHeader';
import AppContent from '../components/mainLayout/AppContent';
import AppFooter from '../components/mainLayout/AppFooter';

function AppLayout(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <AppSider collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <AppHeader
          collapsed={collapsed}
          onMenuOpenerClick={() => setCollapsed(!collapsed)}
        />
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default AppLayout;
