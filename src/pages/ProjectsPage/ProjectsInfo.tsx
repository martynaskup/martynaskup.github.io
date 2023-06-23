import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Space, Typography } from 'antd';

const ProjectsInfo = () => {
  const { sm } = useBreakpoint();

  return (
    <Space direction="vertical" size={sm ? 'large' : 'small'}>
      <Typography.Title level={2}>
        Are you curious about my coding skills?
      </Typography.Title>
      <Space direction="vertical" size="middle" style={{ maxWidth: '500px' }}>
        <Typography.Text>
          In this section, I would like to present a few projects to you.
        </Typography.Text>
        <Typography.Text>
          Some of them are older and are a result of my learning process from
          the time when I was working on becoming a front-end developer.
        </Typography.Text>
        <Typography.Text>
          The others are newer, created this year. I used in these projects the
          skills and technologies developed and learned in the last 3 years
          while I was working as a front-end developer.
        </Typography.Text>
      </Space>
    </Space>
  );
};

export default ProjectsInfo;
