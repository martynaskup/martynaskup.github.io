import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import Card from '../components/shared/Card';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import Text from '../components/shared/Text';
import Title from '../components/shared/Title';

function ContactInfoPage() {
  const { sm } = useBreakpoint();

  return (
    <>
      <Space direction="vertical" size="large" align="center">
        <Title
          level={3}
          children="Do you have any questions or would you like to collaborate?"
        />
        <Card width={sm ? '400px' : '300px'} textAlign="center">
          <Space direction="vertical" size="large">
            <div>
              <Text children="Send me an e-mail at:" />
              <br />
              <Link to="mailto: martyna.skup@yahoo.de">
                martyna.skup@yahoo.de
              </Link>
            </div>
            <div>
              <Text
                children={
                  <>
                    or contact me via
                    <br />
                    my professional online profiles:
                    <br />
                  </>
                }
              />
              <Space size="large">
                <Link
                  to="https://github.com/snikerslala"
                  target="_blank"
                  rel="noopener"
                >
                  <Button
                    type="text"
                    size="small"
                    icon={
                      <GithubOutlined
                        style={{ color: 'rgba(0, 0, 0, 0.88)' }}
                      />
                    }
                  />
                  <br />
                  <Text children="GitHub" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/martynaskup/"
                  target="_blank"
                  rel="noopener"
                >
                  <Button
                    type="text"
                    size="small"
                    icon={
                      <LinkedinOutlined
                        style={{ color: 'rgba(0, 0, 0, 0.88)' }}
                      />
                    }
                  />
                  <br />
                  <Text children="LinkedIn" />
                </Link>
              </Space>
            </div>
          </Space>
        </Card>
      </Space>
    </>
  );
}

export default ContactInfoPage;
