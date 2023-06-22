import { Button, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const ContactInfo = () => {
  return (
    <>
      <Space direction="vertical" size="large">
        <Typography.Title level={3}>
          Do you have a question or want to work together?
        </Typography.Title>
        <div>
          <Typography.Text>Send me an e-mail at:</Typography.Text>
          <br />
          <Link to="mailto: martyna.skup@yahoo.de">martyna.skup@yahoo.de</Link>
        </div>
        <div>
          <Typography.Text>
            or contact me via <br /> my professional online profiles:
          </Typography.Text>
          <br />
          <Space size="large">
            <Link to="https://github.com/snikerslala">
              <Button
                type="link"
                target="_blank"
                rel="noopener"
                size="small"
                icon={
                  <GithubOutlined style={{ color: 'rgba(0, 0, 0, 0.88)' }} />
                }
              />
              <br />
              <Typography.Text>GitHub</Typography.Text>
            </Link>
            <Link to="https://www.linkedin.com/in/martynaskup/">
              <Button
                type="text"
                target="_blank"
                rel="noopener"
                size="small"
                icon={
                  <LinkedinOutlined style={{ color: 'rgba(0, 0, 0, 0.88)' }} />
                }
              />
              <br />
              <Typography.Text>GitHub</Typography.Text>
            </Link>
          </Space>
        </div>
      </Space>
    </>
  );
};

export default ContactInfo;