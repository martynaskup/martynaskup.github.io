import { Collapse, List, Typography } from 'antd';
import { FC, useState } from 'react';

type IncomeData = {
  name: string;
  price: number;
  date: string;
};

const Incomes: FC<{
  onValuesChange: (newIncomeTotal: number) => void;
}> = ({ onValuesChange }) => {
  const initialIncomes: IncomeData[] = [
    // TODO - initial values should come the data from LocalStorage or be fetched from an external database
    {
      name: 'salary',
      price: 2000,
      date: '2023-07-02',
    },
    {
      name: 'lottery',
      price: 500,
      date: '2023-07-10',
    },
    {
      name: 'salary',
      price: 2000,
      date: '2023-07-02',
    },
    {
      name: 'lottery',
      price: 500,
      date: '2023-07-10',
    },
  ];

  const [incomesList, setIncomesList] = useState(initialIncomes);

  const handleNewIncome = (income: IncomeData) => {
    setIncomesList((prevIncomesList) => [...prevIncomesList, income]);
    onValuesChange(income.price);
  };

  const IncomeList = () => (
    <List
      size="small"
      dataSource={incomesList}
      renderItem={(item) => (
        <List.Item actions={[<Typography.Text>Edit</Typography.Text>]}>
          <List.Item.Meta
            title={`${item.name} - ${item.price} €`}
            description={`Received date: ${item.date}`}
          />
        </List.Item>
      )}
    />
  );

  return (
    <Collapse defaultActiveKey={['1']} style={{ textAlign: 'left' }}>
      <Collapse.Panel header="Income items" key="1">
        <IncomeList />
      </Collapse.Panel>
    </Collapse>
  );
};

export default Incomes;
