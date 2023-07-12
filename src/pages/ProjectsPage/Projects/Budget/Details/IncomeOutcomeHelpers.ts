import { IncomeOutcomeType } from './IncomeOutcomeTypes';

export const budgetItemName = (type: IncomeOutcomeType) =>
  type === IncomeOutcomeType.income ? 'Income' : 'Outcome';
