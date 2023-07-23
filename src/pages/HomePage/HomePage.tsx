import { Space, Typography } from 'antd';
import React from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import HomeSteps from './HomeSteps';
import MyImage from '../AboutPage/MyImage';
import { StyledCard, StyledSpace } from './Home.styles';

function HomePage() {
  const { md } = useBreakpoint();

  return (
    <StyledSpace direction="vertical" size="middle" align="center">
      <Typography.Title level={2}>
        Welcome to my portfolio page!
      </Typography.Title>
      <Typography.Title>Hello! I'm Martyna, React developer</Typography.Title>
      <StyledCard style={{ maxWidth: md ? '700px' : '300px' }}>
        <Space
          direction={md ? 'horizontal' : 'vertical'}
          size="large"
          align="start"
        >
          <MyImage />
          <HomeSteps />
        </Space>
      </StyledCard>
    </StyledSpace>
  );
}

export default HomePage;
