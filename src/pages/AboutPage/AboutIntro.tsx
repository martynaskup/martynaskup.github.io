import { Space } from 'antd';
import Title from '../../components/shared/Title';

function AboutIntro() {
  return (
    <Space direction="vertical" size={10}>
      <Space direction="vertical" size={2}>
        <Title level={2} children="Hello! Hallo! Cześć! and... Ahoj!" />
        <Title level={3} children="From a Polish Front-end Developer!" />
      </Space>
      <Title
        level={5}
        children="I would like to share a bit of information about my personal and professional life with you."
      />
    </Space>
  );
}

export default AboutIntro;
