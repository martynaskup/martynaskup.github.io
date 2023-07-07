import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Typography } from 'antd';
import { StyledStatisticDiv } from './Budget.styles';

function Budget() {
  const appTitle = <Typography.Title level={2}>Budget app</Typography.Title>;

  const statistic = (
    <StyledStatisticDiv>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Cash in"
              value={1100.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="€"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Cash out"
              value={19.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="€"
            />
          </Card>
        </Col>
      </Row>
    </StyledStatisticDiv>
  );

  return (
    <>
      {appTitle}
      {statistic}
    </>
  );
}

export default Budget;
