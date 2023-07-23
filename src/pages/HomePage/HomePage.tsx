import { Space, Typography } from 'antd';
import React from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import HomeSteps from './HomeSteps';
import MyImage from '../AboutPage/MyImage';
import { StyledSpace } from './Home.styles';
import Card from '../../components/shared/Card';

function HomePage() {
  const { md } = useBreakpoint();

  return (
    <StyledSpace direction="vertical" size="middle" align="center">
      <Typography.Title level={2}>
        Welcome to my portfolio page!
      </Typography.Title>
      <Typography.Title>Hello! I'm Martyna, React developer</Typography.Title>
      <Card>
        <Space
          direction={md ? 'horizontal' : 'vertical'}
          size="large"
          align="start"
        >
          <MyImage />
          <HomeSteps />
        </Space>
      </Card>
    </StyledSpace>
  );
}

export default HomePage;
