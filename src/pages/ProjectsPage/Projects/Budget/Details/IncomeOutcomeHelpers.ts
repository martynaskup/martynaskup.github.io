import { BudgetItemType } from './IncomeOutcomeTypes';

export const budgetItemName = (type: BudgetItemType) =>
  type === BudgetItemType.income ? 'Income' : 'Outcome';
