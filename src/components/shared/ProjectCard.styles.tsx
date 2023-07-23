import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  padding: 8px;
  margin: 60px auto 24px;
  border: 1px ridge rgba(0, 21, 41, 0.3);
  border-radius: 2px;
  box-shadow: 4px 4px 8px rgba(0, 21, 41, 0.2);
  .ant-card-body {
    padding: 16px;
  }
  .ant-card-head-title {
    font-size: 24px;
    text-align: center;
  }

  img {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px dotted rgba(0, 21, 41, 0.5);
  }

  .ant-card-meta {
    margin-bottom: 16px;
  }
`;
