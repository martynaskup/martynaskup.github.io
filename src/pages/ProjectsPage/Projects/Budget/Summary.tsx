import { FC } from 'react';
import { Col, Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
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
          prefix={<LikeOutlined />}
        />
      </Col>
      <Col span={6}>
        <Statistic.Countdown
          title="days left"
          value={lastDayOfMonth.toString()}
          format="D"
        />
      </Col>
    </StyledSummaryRow>
  );
};

export default Summary;
