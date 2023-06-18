import React, { JSX } from 'react';
import { Layout } from 'antd';
import './AppLayout.css';
import AppSider from '../components/mainLayout/AppSider';
import AppHeader from '../components/mainLayout/AppHeader';
import AppContent from '../components/mainLayout/AppContent';
import AppFooter from '../components/mainLayout/AppFooter';

function AppLayout(): JSX.Element {
  return (
    <Layout>
      <AppSider />
      <Layout>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default AppLayout;
