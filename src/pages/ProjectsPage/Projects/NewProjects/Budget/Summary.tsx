import { Col, Statistic } from 'antd';
import { FrownOutlined, LikeOutlined } from '@ant-design/icons';
import { StyledSummaryRow } from './Budget.styles';
import moment from 'moment';

function Summary({ sum }: { sum: number }) {
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
          value={moment().endOf('month').toString()}
          valueStyle={{
            fontWeight: 670,
          }}
          format="D"
        />
      </Col>
    </StyledSummaryRow>
  );
}

export default Summary;
