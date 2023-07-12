import { BudgetItemType } from './BudgetItemTypes';

export const budgetItemName = (type: BudgetItemType) =>
  type === BudgetItemType.income ? 'Income' : 'Outcome';
