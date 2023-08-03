import React, { useContext, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import { getMenuKeys } from './appMenuHelpers';
import { menuItems } from './AppMenuItems';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import {
  SiderCollapseContext,
  SiderCollapseType,
} from './SiderCollapseContext';

function AppMenu() {
  const location = useLocation();
  const { xs } = useBreakpoint();
  const { setCollapsed, setCollapseType } = useContext(
    SiderCollapseContext
  ) as SiderCollapseType;

  const menuKeysBasedOnLocation = getMenuKeys(location.pathname.slice(1));

  const [openMenuKeys, setOpenMenuKeys] = useState(
    () => menuKeysBasedOnLocation.selectedKeys
  );

  useEffect(() => {
    const openKeys = menuKeysBasedOnLocation.openKeys;
    setOpenMenuKeys(openKeys);
  }, [location.pathname]);

  function handleMenuItemClick() {
    if (xs) {
      setCollapsed(true);
      setCollapseType('clickTrigger');
    } else return;
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={menuItems}
      selectedKeys={menuKeysBasedOnLocation.selectedKeys}
      defaultOpenKeys={openMenuKeys}
      openKeys={openMenuKeys}
      onClick={handleMenuItemClick}
      onOpenChange={(e) => setOpenMenuKeys(e)}
    />
  );
}

export default AppMenu;
