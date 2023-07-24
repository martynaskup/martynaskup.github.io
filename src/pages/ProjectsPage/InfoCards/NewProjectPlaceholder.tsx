import { Image, Space, Typography } from 'antd';
import robot from '../../../assets/images/craiyon_131139_robot-error.png';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

function NewProjectPlaceholder() {
  const { sm } = useBreakpoint();

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ marginTop: '60px', fontSize: sm ? '16px' : 'inherit' }}
    >
      <Typography.Title level={4}>
        Hi, I'm just a cute robot and I'm here to hold a place for a project.
      </Typography.Title>
      <Typography.Text>
        I know you're looking here for a reference to a new project made by
        Martyna.
      </Typography.Text>
      <Typography.Text>
        I'm here to tell you that she didn't publish the next project (yet).
      </Typography.Text>
      <Typography.Text>
        If you wish, you can contact her and ask if and when she'll publish here
        something.
      </Typography.Text>

      <Image src={robot} width={200} style={{ borderRadius: '50%' }} />
    </Space>
  );
}

export default NewProjectPlaceholder;
