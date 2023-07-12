import { FC, useEffect, useState } from 'react';
import { Collapse } from 'antd';

import IncomeList from './IncomeList';
import AddButtonAndModal from './AddButtonAndModal';
import { IncomeData } from './IncomeOutcomeTypes';
import { initialIncomes } from './initialData';

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
