import { Space } from 'antd';
import AboutIntro from './AboutIntro';
import AboutDetailsCard from './AboutDetailsCard';

function AboutPage() {
  return (
    <Space direction="vertical" size="middle" align="center">
      <AboutIntro />
      <AboutDetailsCard />
    </Space>
  );
}

export default AboutPage;
