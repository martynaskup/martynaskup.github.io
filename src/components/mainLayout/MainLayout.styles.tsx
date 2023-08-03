import { Button, Layout, Space } from 'antd';
import styled from 'styled-components';

export const StyledAppHeaderLayout = styled(Layout.Header)`
  padding: 0;
  height: auto;
  background: #fff;
  border-bottom: 2px solid #f0f2f5;
`;

export const StyledMenuFoldingButton = styled(Button)`
  font-size: 16px;
  width: 64px;
  height: 64px;
`;

export const StyledSiderLogoSpace = styled(Space)`
  margin: 8px;
  padding: 8px 8px;
  background: rgba(255, 255, 255, 0.1);

  .ant-typography {
    color: #fff;
  }
`;

export const StyledAppContent = styled.div`
  margin: 0;
  text-align: center;
  padding: 24px;
  min-height: 75vh;
  background: #fff;
`;

export const StyledAppFooter = styled(Layout.Footer)`
  text-align: center;
`;
