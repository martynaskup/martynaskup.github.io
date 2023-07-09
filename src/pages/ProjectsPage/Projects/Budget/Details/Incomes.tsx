import { Collapse } from 'antd';
import { FC, useState } from 'react';
import IncomeList from './IncomeList';

export type IncomeData = {
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

  const [incomeList, setIncomeList] = useState(initialIncomes);

  const handleNewIncome = (income: IncomeData) => {
    setIncomeList((prevIncomesList) => [...prevIncomesList, income]);
    onValuesChange(income.price);
  };

  return (
    <Collapse defaultActiveKey={['1']} style={{ textAlign: 'left' }}>
      <Collapse.Panel header="Income items" key="1">
        <IncomeList incomeList={incomeList} />
      </Collapse.Panel>
    </Collapse>
  );
};

export default Incomes;
