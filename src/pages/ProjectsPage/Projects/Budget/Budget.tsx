import { Typography } from 'antd';
import Details from './Details/Details';
import Summary from './Summary';
import { useCallback, useState } from 'react';

function Budget() {
  const [sum, setSum] = useState(0);

  const appTitle = <Typography.Title level={2}>Budget app</Typography.Title>;

  const handleBudgetValuesChange = useCallback((values: number) => {
    setSum(values);
  }, []);
  return (
    <>
      {appTitle}
      <Summary sum={sum} />
      <Details onValuesChange={handleBudgetValuesChange} />
    </>
  );
}

export default Budget;
