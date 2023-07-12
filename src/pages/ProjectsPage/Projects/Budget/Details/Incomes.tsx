import { FC, useEffect, useState } from 'react';
import { BudgetItemData, BudgetItemType } from './IncomeOutcomeTypes';
import { initialIncomes } from './initialData';
import BudgetItemsCollapse, { sortItemList } from './BudgetItemsCollapse';

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
      return sortItemList(newIncomeList);
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
    <BudgetItemsCollapse
      budgetItemType={BudgetItemType.income}
      itemList={incomeList}
      onNewItemCreate={handleNewIncome}
      onItemUpdate={handleIncomeUpdate}
    />
  );
};

export default Incomes;
