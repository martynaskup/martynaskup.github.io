import React, { useState } from 'react';
import { CollapseType } from 'antd/es/layout/Sider';

export type SiderCollapseType = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  collapseType: CollapseType | undefined;
  setCollapseType: React.Dispatch<
    React.SetStateAction<CollapseType | undefined>
  >;
};
export const SiderCollapseContext =
  React.createContext<SiderCollapseType | null>(null);

export function SiderCollapseProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [collapseType, setCollapseType] = useState<CollapseType | undefined>(
    undefined
  );

  const value = {
    collapsed,
    setCollapsed,
    collapseType,
    setCollapseType,
  };
  return (
    <SiderCollapseContext.Provider value={value}>
      {children}
    </SiderCollapseContext.Provider>
  );
}
