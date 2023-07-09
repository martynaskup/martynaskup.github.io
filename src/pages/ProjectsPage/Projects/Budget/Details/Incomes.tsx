import { Collapse } from 'antd';
import { FC, useEffect, useState } from 'react';
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
      date: '2023-07-03',
    },
    {
      name: 'lottery',
      price: 500,
      date: '2023-07-15',
    },
  ];

  const [incomeList, setIncomeList] = useState(initialIncomes);

  useEffect(() => {
    const totalIncome = incomeList.reduce((acc, income) => {
      return acc + income.price;
    }, 0);
    onValuesChange(totalIncome);
  }, [incomeList, onValuesChange]);

  const handleNewIncome = (income: IncomeData) => {
    setIncomeList((prevIncomesList) => {
      const newIncomeList = [...prevIncomesList, income];
      return sortIncomeList(newIncomeList);
    });

    onValuesChange(income.price);
  };

  return (
    <>
      <Collapse defaultActiveKey={['1']} style={{ textAlign: 'left' }}>
        <Collapse.Panel header="Income items" key="1">
          <IncomeList incomeList={sortIncomeList(incomeList)} />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

const sortIncomeList = (list: IncomeData[]) => {
  const dateNumber = (date: string) => new Date(date);

  return list.sort(
    (incomeA, incomeB) =>
      dateNumber(incomeB.date).getTime() - dateNumber(incomeA.date).getTime()
  );
};
export default Incomes;
