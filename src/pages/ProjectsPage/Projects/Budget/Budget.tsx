import { Typography } from 'antd';
import Details from './Details/Details';
import Summary from './Summary';

function Budget() {
  const appTitle = <Typography.Title level={2}>Budget app</Typography.Title>;

  return (
    <>
      {appTitle}
      <Summary />
      <Details />
    </>
  );
}

export default Budget;
