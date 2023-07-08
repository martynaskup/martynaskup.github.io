import { FC } from 'react';
import { Col, Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { StyledSummaryRow } from './Budget.styles';

const Summary: FC = () => {
  return (
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
};

export default Summary;
