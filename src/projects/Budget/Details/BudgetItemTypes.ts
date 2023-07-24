import { Moment } from 'moment/moment';

export type BudgetItemData = {
  id: string;
  name: string;
  value: number;
  date: Moment;
};

export enum BudgetItemType {
  income = 'income',
  outcome = 'outcome',
}
