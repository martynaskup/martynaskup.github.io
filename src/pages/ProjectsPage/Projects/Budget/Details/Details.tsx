import { FC } from 'react';
import { StyledDetailsDiv } from '../Budget.styles';
import { Card, Col, Divider, Row, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Incomes from './Incomes';
import Outcomes from './Outcomes';

const Details: FC = () => {
  return (
    <StyledDetailsDiv>
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
            <Incomes />
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
            <Outcomes />
          </Card>
        </Col>
      </Row>
    </StyledDetailsDiv>
  );
};

export default Details;
