import { Moment } from 'moment/moment';

export type IncomeOutcomeData = {
  id: string;
  name: string;
  value: number;
  date: Moment;
};

export enum IncomeOutcomeType {
  income = 'income',
  outcome = 'outcome',
}
