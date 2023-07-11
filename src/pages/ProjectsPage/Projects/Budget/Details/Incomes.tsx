import { FC, useEffect, useState } from 'react';
import { Collapse } from 'antd';
import moment, { Moment } from 'moment';
import { v4 as uuidv4 } from 'uuid';

import IncomeList from './IncomeList';
import AddButtonAndModal from './AddButtonAndModal';

export type IncomeData = {
  id: string;
  name: string;
  value: number;
  date: Moment;
};

const initialIncomes: IncomeData[] = [
  // TODO - initial values should come the data from LocalStorage or be fetched from an external database

  {
    id: uuidv4(),
    name: 'salary',
    value: 2000,
    date: moment('2023-07-02'),
  },
  {
    id: uuidv4(),
    name: 'lottery',
    value: 500,
    date: moment('2023-07-10'),
  },
  {
    id: uuidv4(),
    name: 'salary',
    value: 2000,
    date: moment('2023-07-03'),
  },
  {
    id: uuidv4(),
    name: 'lottery',
    value: 500,
    date: moment('2023-07-15'),
  },
];

const Incomes: FC<{
  onValuesChange: (newIncomeTotal: number) => void;
}> = ({ onValuesChange }) => {
  const [incomeList, setIncomeList] = useState(initialIncomes);

  useEffect(() => {
    const totalIncome = incomeList.reduce((acc, income) => {
      return acc + income.value;
    }, 0);
    onValuesChange(totalIncome);
  }, [incomeList, onValuesChange]);

  const handleNewIncome = (income: IncomeData) => {
    setIncomeList((prevIncomesList) => {
      const newIncomeList = [...prevIncomesList, income];
      return sortIncomeList(newIncomeList);
    });

    onValuesChange(income.value);
  };

  const handleIncomeUpdate = (updatedIncome: IncomeData) => {
    setIncomeList((prevIncomeList) => {
      return prevIncomeList.map((income) =>
        income.id === updatedIncome.id ? updatedIncome : income
      );
    });
    onValuesChange(updatedIncome.value);
  };

  return (
    <>
      <Collapse defaultActiveKey={['1']} style={{ textAlign: 'left' }}>
        <Collapse.Panel
          header="Income items"
          key="1"
          extra={<AddButtonAndModal onNewIncome={handleNewIncome} />}
        >
          <IncomeList
            incomeList={sortIncomeList(incomeList)}
            onIncomeUpdate={handleIncomeUpdate}
          />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

const sortIncomeList = (list: IncomeData[]) => {
  return list.sort((incomeA, incomeB) =>
    incomeB.date.isBefore(incomeA.date) ? 1 : -1
  );
};
export default Incomes;
