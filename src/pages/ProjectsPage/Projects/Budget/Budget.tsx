import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LikeOutlined,
} from '@ant-design/icons';
import { Card, Col, Divider, Row, Statistic, Typography } from 'antd';
import { StyledStatisticDiv, StyledSummaryRow } from './Budget.styles';

const incomes = <>incomes items</>;

const outcomes = <>outcomes items</>;

function Budget() {
  const appTitle = <Typography.Title level={2}>Budget app</Typography.Title>;

  const summary = (
    <StyledSummaryRow gutter={16} justify="center">
      <Col span={6}>
        <Statistic
          title="left in July"
          value="1555"
          suffix="€"
          prefix={<LikeOutlined />}
        />
      </Col>
      <Col span={6}>
        <Statistic.Countdown
          title="days left"
          value={'2023-07-31'}
          format="D"
        />
      </Col>
    </StyledSummaryRow>
  );

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
            <Divider />
            {incomes}
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
            <Divider />
            {outcomes}
          </Card>
        </Col>
      </Row>
    </StyledStatisticDiv>
  );

  return (
    <>
      {appTitle}
      {summary}
      {statistic}
    </>
  );
}

export default Budget;
