import { Link } from 'react-router-dom';
import paths from '../../routes/paths';
import { menuKeys } from './appMenuHelpers';
import {
  ContactsOutlined,
  HomeOutlined,
  ProjectOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const projectItems: MenuItem[] = [
  {
    label: <Link to={paths.projectsPaths.overview}>Overview</Link>,
    key: menuKeys.projects.overview,
  },
  {
    label: (
      <Link to={paths.projectsPaths.previousPortfolio}>Previous Portfolio</Link>
    ),
    key: menuKeys.projects.previousPortfolio,
  },
  {
    label: <Link to={paths.projectsPaths.budget}>Budget</Link>,
    key: menuKeys.projects.budget,
  },
];

export const menuItems: MenuItem[] = [
  {
    label: <Link to={paths.home}>Welcome</Link>,
    key: menuKeys.home,
    icon: <HomeOutlined />,
  },
  {
    label: <Link to={paths.about}>About me</Link>,
    key: menuKeys.about,
    icon: <UserOutlined />,
  },
  {
    label: 'Projects',
    key: menuKeys.subMenus.projects,
    icon: <ProjectOutlined />,
    children: projectItems,
  },
  {
    label: <Link to={paths.contactMe}>Contact me</Link>,
    key: menuKeys.contactMe,
    icon: <ContactsOutlined />,
  },
];
