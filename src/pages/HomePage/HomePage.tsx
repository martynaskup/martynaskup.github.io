import { Space } from 'antd';
import React from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import HomeSteps from './HomeSteps';
import MyImage from '../../components/MyImage';
import { StyledSpace } from './Home.styles';
import Card from '../../components/shared/Card';
import Title from '../../components/shared/Title';

function HomePage() {
  const { md } = useBreakpoint();

  return (
    <StyledSpace direction="vertical" size="middle" align="center">
      <Title level={1} children="Hello! I'm Martyna, React developer" />
      <Title level={2} children="Welcome to my portfolio website!" />

      <Card width={md ? '700px' : '300px'}>
        <Space
          direction={md ? 'horizontal' : 'vertical'}
          size={md ? 'small' : 'large'}
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
