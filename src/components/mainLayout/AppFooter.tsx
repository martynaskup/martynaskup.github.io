import { Button, Layout, Space, Typography } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';

const AppFooter = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      <Space size="small">
        <Typography.Text>
          Created with Ant Design ©2023 by Martyna Skup (
          <Button
            type="link"
            href="https://github.com/snikerslala"
            target="_blank"
            rel="noopener"
            size="small"
            icon={<GithubOutlined style={{ color: 'rgba(0, 0, 0, 0.88)' }} />}
          />
          <Button
            type="link"
            href="https://www.linkedin.com/in/martynaskup/"
            target="_blank"
            rel="noopener"
            size="small"
            icon={<LinkedinOutlined style={{ color: 'rgba(0, 0, 0, 0.88)' }} />}
          />
          <Button
            type="link"
            href="mailto: martyna.skup@yahoo.de"
            rel="noopener"
            size="small"
            icon={<MailOutlined style={{ color: 'rgba(0, 0, 0, 0.88)' }} />}
          />
          )
        </Typography.Text>
      </Space>
    </Layout.Footer>
  );
};

export default AppFooter;
