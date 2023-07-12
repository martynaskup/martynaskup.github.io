import { Moment } from 'moment/moment';

export type IncomeData = {
  id: string;
  name: string;
  value: number;
  date: Moment;
};

export type OutcomeData = {
  id: string;
  name: string;
  value: number;
  date: Moment;
};
