import { Space } from 'antd';
import AboutIntroPage from './AboutIntroPage';
import AboutMainPage from './AboutMainPage';

function AboutPage() {
  return (
    <Space direction="vertical" size="middle">
      <AboutIntroPage />
      <AboutMainPage />
    </Space>
  );
}

export default AboutPage;
