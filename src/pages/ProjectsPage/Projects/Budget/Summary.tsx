import { FC } from 'react';
import { Col, Statistic } from 'antd';
import { FrownOutlined, LikeOutlined } from '@ant-design/icons';
import { StyledSummaryRow } from './Budget.styles';

const Summary: FC<{ sum: number }> = ({ sum }) => {
  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return (
    <StyledSummaryRow gutter={16} justify="center">
      <Col span={6}>
        <Statistic
          title="left in July"
          value={sum}
          suffix="€"
          prefix={sum < 0 ? <FrownOutlined /> : <LikeOutlined />}
          precision={2}
          valueStyle={{
            fontWeight: 670,
            color: sum < 0 ? '#cf1322' : '#3f8600',
          }}
        />
      </Col>
      <Col span={6}>
        <Statistic.Countdown
          title="days left"
          value={lastDayOfMonth.toString()}
          valueStyle={{
            fontWeight: 670,
          }}
          format="D"
        />
      </Col>
    </StyledSummaryRow>
  );
};

export default Summary;
