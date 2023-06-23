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
import paths from '../../routes/paths';

type MenuItem = Required<MenuProps>['items'][number];

const AppMenu = () => {
  const projectItems: MenuItem[] = [
    { label: 'Project 1', key: '101' },
    { label: 'Project 2', key: '102' },
  ];

  const items: MenuItem[] = [
    {
      label: <Link to={paths.home}>Welcome</Link>,
      key: '1',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={paths.about}>About me</Link>,
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: <Link to={paths.projects}>Projects</Link>,
      key: 'sub1',
      icon: <ProjectOutlined />,
      children: projectItems,
    },
    {
      label: <Link to={paths.contactMe}>Contact me</Link>,
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
