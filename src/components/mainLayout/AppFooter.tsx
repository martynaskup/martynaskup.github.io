import { Button, Space, Typography } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { StyledAppFooter } from './MainLayout.styles';

function AppFooter() {
  const iconColor: string = 'rgba(0, 0, 0, 0.88)';

  return (
    <StyledAppFooter>
      <Space size="small">
        <Typography.Text>
          Created with Ant Design ©2023 by Martyna Skup (
          <Button
            type="link"
            href="https://github.com/snikerslala"
            target="_blank"
            rel="noopener"
            size="small"
            icon={<GithubOutlined style={{ color: iconColor }} />}
          />
          <Button
            type="link"
            href="https://www.linkedin.com/in/martynaskup/"
            target="_blank"
            rel="noopener"
            size="small"
            icon={<LinkedinOutlined style={{ color: iconColor }} />}
          />
          <Button
            type="link"
            href="mailto: martyna.skup@yahoo.de"
            rel="noopener"
            size="small"
            icon={<MailOutlined style={{ color: iconColor }} />}
          />
          )
        </Typography.Text>
      </Space>
    </StyledAppFooter>
  );
}

export default AppFooter;
