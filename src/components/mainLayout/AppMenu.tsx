import { Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React from 'react';

const AppMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['4']}
      items={[
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        UserOutlined,
      ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
      }))}
    />
  );
};

export default AppMenu;
