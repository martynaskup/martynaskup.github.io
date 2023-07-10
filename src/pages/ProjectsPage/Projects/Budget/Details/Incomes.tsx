import { FC, useEffect, useState } from 'react';
import { Collapse } from 'antd';
import moment, { Moment } from 'moment';
import IncomeList from './IncomeList';
import AddButtonAndModal from './AddButtonAndModal';

export type IncomeData = {
  name: string;
  value: number;
  date: Moment;
};

const Incomes: FC<{
  onValuesChange: (newIncomeTotal: number) => void;
}> = ({ onValuesChange }) => {
  const initialIncomes: IncomeData[] = [
    // TODO - initial values should come the data from LocalStorage or be fetched from an external database
    {
      name: 'salary',
      value: 2000,
      date: moment('2023-07-02'),
    },
    {
      name: 'lottery',
      value: 500,
      date: moment('2023-07-10'),
    },
    {
      name: 'salary',
      value: 2000,
      date: moment('2023-07-03'),
    },
    {
      name: 'lottery',
      value: 500,
      date: moment('2023-07-15'),
    },
  ];

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

  return (
    <>
      <Collapse defaultActiveKey={['1']} style={{ textAlign: 'left' }}>
        <Collapse.Panel
          header="Income items"
          key="1"
          extra={<AddButtonAndModal onAction={handleNewIncome} />}
        >
          <IncomeList incomeList={sortIncomeList(incomeList)} />
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
