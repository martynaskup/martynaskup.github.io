import React from 'react';
import { Image, Space, Typography } from 'antd';
import robot from '../../../assets/images/craiyon_131139_robot-error.png';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import ProjectCard from '../../../components/shared/ProjectCard';
import paths from '../../../routes/paths';
import { Link } from 'react-router-dom';

function ProjectPlaceholderInfoCard() {
  const { sm } = useBreakpoint();

  return (
    <ProjectCard
      textAlign="center"
      title="Hi there!"
      cover={
        <Space direction="vertical" style={{ margin: '24px 0' }}>
          <Typography.Title level={4}>
            I am just a cute robot...
          </Typography.Title>
          <Image
            src={robot}
            width={200}
            style={{
              borderRadius: '50%',
              border: 'none',
            }}
          />
          <Typography.Title level={4}>
            ... and I am here to hold a place for a project.
          </Typography.Title>
        </Space>
      }
      children={
        <Space
          direction="vertical"
          size="middle"
          style={{ fontSize: sm ? '16px' : 'inherit' }}
        >
          <Typography.Text>
            Martyna didn't publish the next portfolio project (yet).
          </Typography.Text>
          <Typography.Text>
            If you wish, you can <Link to={paths.contactMe}>contact</Link> her
            and ask if and when she'll publish here something.
          </Typography.Text>
        </Space>
      }
    />
  );
}

export default ProjectPlaceholderInfoCard;
