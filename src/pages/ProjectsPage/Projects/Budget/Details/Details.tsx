import { FC, useEffect, useState } from 'react';
import { StyledDetailsDiv } from '../Budget.styles';
import { Card, Col, Divider, Row, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Incomes from './Incomes';
import Outcomes from './Outcomes';

const Details: FC<{ onValuesChange: (values: number) => void }> = ({
  onValuesChange,
}) => {
  const [incomes, setIncomes] = useState(0);
  const [outcomes, setOutcomes] = useState(0);

  useEffect(() => {
    const sum = incomes - outcomes;
    onValuesChange(sum);
  }, [incomes, outcomes, onValuesChange]);

  const handleIncomeChange = (newIncomeTotal: number) =>
    setIncomes(newIncomeTotal);

  return (
    <StyledDetailsDiv>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Cash in"
              value={incomes}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="€"
            />
            <Divider />
            <Incomes onValuesChange={handleIncomeChange} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Cash out"
              value={outcomes}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="€"
            />
            <Divider />
            <Outcomes onValuesChange={setOutcomes} />
          </Card>
        </Col>
      </Row>
    </StyledDetailsDiv>
  );
};

export default Details;
