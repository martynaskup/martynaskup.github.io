import { BudgetItemData, BudgetItemType } from './BudgetItemTypes';

export const budgetItemName = (type: BudgetItemType) =>
  type === BudgetItemType.income ? 'Income' : 'Outcome';

export const budgetItemNameLowecase = (type: BudgetItemType) =>
  budgetItemName(type).toLowerCase();

export const sortItemList = (list: BudgetItemData[]) => {
  return list.sort((itemA, itemB) =>
    itemB.date.isBefore(itemA.date) ? 1 : -1
  );
};
