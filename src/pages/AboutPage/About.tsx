import { Space } from 'antd';
import AboutIntro from './AboutIntro';
import AboutMain from './AboutMain';

function About() {
  return (
    <Space direction="vertical" size="middle">
      <AboutIntro />
      <AboutMain />
    </Space>
  );
}

export default About;
