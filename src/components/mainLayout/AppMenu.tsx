import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  ContactsOutlined,
  HomeOutlined,
  ProjectOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const AppMenu = () => {
  const projectItems: MenuItem[] = [
    { label: 'Project 1', key: '101' },
    { label: 'Project 2', key: '102' },
  ];

  const items: MenuItem[] = [
    { label: <Link to="/">Welcome</Link>, key: '1', icon: <HomeOutlined /> },
    {
      label: <Link to="/about">About me</Link>,
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/projects">Projects</Link>,
      key: 'sub1',
      icon: <ProjectOutlined />,
      children: projectItems,
    },
    {
      label: <Link to="/contactMe">Contact me</Link>,
      key: '4',
      icon: <ContactsOutlined />,
    },
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
