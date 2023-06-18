import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  ContactsOutlined,
  HomeOutlined,
  ProjectOutlined,
  UserOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const AppMenu = () => {
  const projectItems: MenuItem[] = [
    { label: 'Project 1', key: '101' },
    { label: 'Project 2', key: '102' },
  ];

  const items: MenuItem[] = [
    { label: 'Welcome', key: '1', icon: <HomeOutlined /> },
    { label: 'About me', key: '2', icon: <UserOutlined /> },
    {
      label: 'Projects',
      key: 'sub1',
      icon: <ProjectOutlined />,
      children: projectItems,
    },
    { label: 'Contact me', key: '4', icon: <ContactsOutlined /> },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={items}
    />
  );
};

export default AppMenu;
