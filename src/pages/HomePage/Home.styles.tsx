import styled from 'styled-components';
import { Space } from 'antd';

export const StyledSpace = styled(Space)`
  text-align: left;
  max-width: 80vw;
  justify-content: space-between;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`;
