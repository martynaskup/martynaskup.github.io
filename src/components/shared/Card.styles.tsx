import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  padding: 8px;
  border: 1px ridge rgba(0, 21, 41, 0.3);
  border-radius: 2px;
  box-shadow: 4px 4px 8px rgba(0, 21, 41, 0.2);
  .ant-card-body {
    padding: 16px;
  }
`;
