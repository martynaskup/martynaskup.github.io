import styled from 'styled-components';
import { Space, Typography } from 'antd';

export const StyledStepsSpace = styled(Space)`
  width: 100%;
  justify-content: space-around;
  margin-top: 24px;
`;

export const StyledStepsTypographyText = styled(Typography.Text)`
  display: block;
  width: 200px;
  @media (min-width: 992px) {
    width: 250px;
  }
`;
