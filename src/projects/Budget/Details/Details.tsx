import { useCallback, useEffect, useState } from 'react';
import { StyledDetailsDiv } from '../Budget.styles';
import { Card, Col, Divider, Row, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import Incomes from './Incomes';
import Outcomes from './Outcomes';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

type DetailsProps = { onValuesChange: (values: number) => void };

function Details({ onValuesChange }: DetailsProps) {
  const { md } = useBreakpoint();

  const [incomes, setIncomes] = useState(0);
  const [outcomes, setOutcomes] = useState(0);

  useEffect(() => {
    const sum = incomes - outcomes;
    onValuesChange(sum);
  }, [incomes, outcomes, onValuesChange]);

  const handleIncomeChange = useCallback(
    (newIncomeTotal: number) => setIncomes(newIncomeTotal),
    []
  );

  const handleOutcomeChange = useCallback(
    (newOutcomeTotal: number) => setOutcomes(newOutcomeTotal),
    []
  );

  const incomeDetailsCard = (
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
  );

  const outcomeDetailsCard = (
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
      <Outcomes onValuesChange={handleOutcomeChange} />
    </Card>
  );

  return (
    <StyledDetailsDiv>
      {md ? (
        <Row gutter={16}>
          <Col span={12}>{incomeDetailsCard}</Col>
          <Col span={12}>{outcomeDetailsCard}</Col>
        </Row>
      ) : (
        <>
          {incomeDetailsCard}
          {outcomeDetailsCard}
        </>
      )}
    </StyledDetailsDiv>
  );
}

export default Details;
