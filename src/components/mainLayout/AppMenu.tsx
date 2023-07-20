import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  ContactsOutlined,
  HomeOutlined,
  ProjectOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import paths from '../../routes/paths';

type MenuItem = Required<MenuProps>['items'][number];

function AppMenu() {
  const location = useLocation();

  const defaultSelectedAndOpenKeys = getMenuKeys(location.pathname.slice(1));

  const [openMenuKeys, setOpenMenuKeys] = useState(
    () => defaultSelectedAndOpenKeys.selectedKeys
  );

  useEffect(() => {
    const openKeys = getMenuKeys(location.pathname.slice(1)).openKeys;
    setOpenMenuKeys(openKeys);
  }, [location.pathname]);

  const projectItems: MenuItem[] = [
    {
      label: <Link to={paths.projectsPaths.base}>Overview</Link>,
      key: menuKeys.projects.overview,
    },
    {
      label: (
        <Link to={paths.projectsPaths.previousPortfolio}>
          Previous Portfolio
        </Link>
      ),
      key: menuKeys.projects.previousPortfolio,
    },
    {
      label: 'New Projects',
      key: 'sub2',
      children: [
        {
          label: (
            <Link to={paths.projectsPaths.newProjectsOverview}>Overview</Link>
          ),
          key: menuKeys.projects.newProjects.overview,
        },
        {
          label: <Link to={paths.projectsPaths.budget}>Budget</Link>,
          key: menuKeys.projects.newProjects.budget,
        },
      ],
    },
  ];

  const items: MenuItem[] = [
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

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      selectedKeys={getMenuKeys(location.pathname.slice(1)).selectedKeys}
      defaultOpenKeys={openMenuKeys}
      onSelect={(e) => console.log('onSelect', e.selectedKeys)}
      openKeys={openMenuKeys}
      onOpenChange={(e) => setOpenMenuKeys(e)}
    />
  );
}

const menuKeys = {
  home: '1',
  about: '2',
  contactMe: '3',
  subMenus: {
    projects: 'sub1',
    newProjects: 'sub2',
  },
  projects: {
    overview: '11',
    previousPortfolio: '12',
    newProjects: {
      overview: '21',
      budget: '22',
    },
  },
};

function getMenuKeys(locationPath: string) {
  function getSelectedKeys() {
    switch (locationPath) {
      case paths.about:
        return [menuKeys.about];
      case paths.base:
      case paths.home:
        return [menuKeys.home];
      case paths.contactMe:
        return [menuKeys.contactMe];
      case paths.projectsPaths.base:
        return [menuKeys.projects.overview];
      case paths.projectsPaths.previousPortfolio:
        return [menuKeys.projects.previousPortfolio];
      case paths.projectsPaths.newProjectsOverview:
        return [menuKeys.projects.newProjects.overview];
      case paths.projectsPaths.budget:
        return [menuKeys.projects.newProjects.budget];
      default:
        return [menuKeys.home];
    }
  }

  function getOpenKeys() {
    switch (locationPath) {
      case paths.projectsPaths.base:
      case paths.projectsPaths.previousPortfolio:
        return [menuKeys.subMenus.projects];
      case paths.projectsPaths.newProjectsOverview:
      case paths.projectsPaths.budget:
        return [menuKeys.subMenus.projects, menuKeys.subMenus.newProjects];
      default:
        return [];
    }
  }
  return {
    selectedKeys: getSelectedKeys(),
    openKeys: getOpenKeys(),
  };
}
export default AppMenu;
