import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import { getMenuKeys } from './appMenuHelpers';
import { menuItems } from './AppMenuItems';

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

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={menuItems}
      selectedKeys={getMenuKeys(location.pathname.slice(1)).selectedKeys}
      defaultOpenKeys={openMenuKeys}
      openKeys={openMenuKeys}
      onOpenChange={(e) => setOpenMenuKeys(e)}
    />
  );
}

export default AppMenu;
