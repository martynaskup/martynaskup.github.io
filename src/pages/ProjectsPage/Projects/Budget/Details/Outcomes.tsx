import { FC, useEffect, useState } from 'react';
import { BudgetItemData, BudgetItemType } from './BudgetItemTypes';
import { initialOutcomes } from './initialData';
import BudgetItemsCollapse, { sortItemList } from './BudgetItemsCollapse';

const Outcomes: FC<{
  onValuesChange: (newOutcomeTotal: number) => void;
}> = ({ onValuesChange }) => {
  const [outcomeList, setOutcomeList] = useState(initialOutcomes);

  useEffect(() => {
    const totalOutcome = outcomeList.reduce((acc, outcome) => {
      return acc + outcome.value;
    }, 0);
    onValuesChange(totalOutcome);
  }, [outcomeList, onValuesChange]);

  const handleNewOutcome = (outcome: BudgetItemData) => {
    setOutcomeList((prevOutcomesList) => {
      const newOutcomeList = [...prevOutcomesList, outcome];
      return sortItemList(newOutcomeList);
    });
    onValuesChange(outcome.value);
  };

  const handleOutcomeUpdate = (updatedOutcome: BudgetItemData) => {
    setOutcomeList((prevOutcomeList) => {
      return prevOutcomeList.map((outcome) =>
        outcome.id === updatedOutcome.id ? updatedOutcome : outcome
      );
    });
    onValuesChange(updatedOutcome.value);
  };

  return (
    <BudgetItemsCollapse
      budgetItemType={BudgetItemType.outcome}
      itemList={outcomeList}
      onNewItemCreate={handleNewOutcome}
      onItemUpdate={handleOutcomeUpdate}
    />
  );
};

export default Outcomes;
