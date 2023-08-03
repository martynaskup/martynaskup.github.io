import React from 'react';
import { Layout } from 'antd';
import AppSider from './AppSider';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import { SiderCollapseProvider } from './SiderCollapseContext';

function AppLayout() {
  return (
    <Layout>
      <SiderCollapseProvider
        children={
          <Layout>
            <AppSider />
            <Layout>
              <AppHeader />
              <AppContent />
            </Layout>
          </Layout>
        }
      />
      <AppFooter />
    </Layout>
  );
}

export default AppLayout;
