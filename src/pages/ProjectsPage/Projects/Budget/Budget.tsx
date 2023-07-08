import { Typography } from 'antd';
import Details from './Details/Details';
import Summary from './Summary';
import { useState } from 'react';

function Budget() {
  const [sum, setSum] = useState(0);

  const appTitle = <Typography.Title level={2}>Budget app</Typography.Title>;

  return (
    <>
      {appTitle}
      <Summary sum={sum} />
      <Details />
    </>
  );
}

export default Budget;
