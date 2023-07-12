import { FC, useEffect, useState } from 'react';
import { BudgetItemData, BudgetItemType } from './BudgetItemTypes';
import { initialOutcomes } from './initialData';
import BudgetItemsCollapse from './BudgetItemsCollapse';
import { sortItemList } from './budgetItemHelpers';

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

  const handleOutcomeDelete = (item: BudgetItemData) => {
    setOutcomeList((prevOutcomeList) => {
      return prevOutcomeList.filter((outcome) => outcome.id !== item.id);
    });
    onValuesChange(item.value);
  };

  return (
    <BudgetItemsCollapse
      budgetItemType={BudgetItemType.outcome}
      itemList={outcomeList}
      onNewItemCreate={handleNewOutcome}
      onItemUpdate={handleOutcomeUpdate}
      onItemDelete={handleOutcomeDelete}
    />
  );
};

export default Outcomes;
