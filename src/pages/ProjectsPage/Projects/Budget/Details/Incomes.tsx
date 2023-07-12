import { FC, useEffect, useState } from 'react';
import { Collapse } from 'antd';

import BudgetItemList from './BudgetItemList';
import CreateButtonAndModal from './CreateButtonAndModal';
import { BudgetItemData, BudgetItemType } from './IncomeOutcomeTypes';
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

  const handleNewIncome = (income: BudgetItemData) => {
    setIncomeList((prevIncomesList) => {
      const newIncomeList = [...prevIncomesList, income];
      return sortIncomeList(newIncomeList);
    });

    onValuesChange(income.value);
  };

  const handleIncomeUpdate = (updatedIncome: BudgetItemData) => {
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
          extra={
            <CreateButtonAndModal
              onNewItem={handleNewIncome}
              type={BudgetItemType.income}
            />
          }
        >
          <BudgetItemList
            sourceData={sortIncomeList(incomeList)}
            onItemUpdate={handleIncomeUpdate}
            budgetItemType={BudgetItemType.income}
          />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

const sortIncomeList = (list: BudgetItemData[]) => {
  return list.sort((incomeA, incomeB) =>
    incomeB.date.isBefore(incomeA.date) ? 1 : -1
  );
};
export default Incomes;
