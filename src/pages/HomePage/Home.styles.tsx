import styled from 'styled-components';
import { Card, Space } from 'antd';

export const StyledSpace = styled(Space)`
  text-align: left;
  max-width: 80vw;
  justify-content: space-between;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const StyledCard = styled(Card)`
  border: 1px ridge rgba(0, 21, 41, 0.3);
  border-radius: 2px;
  box-shadow: 4px 4px 8px rgba(0, 21, 41, 0.2);
  .ant-card-body {
    padding: 16px;
  }
`;
