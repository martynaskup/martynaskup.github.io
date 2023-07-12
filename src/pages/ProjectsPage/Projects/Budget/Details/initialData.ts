import { IncomeData, OutcomeData } from './IncomeOutcomeTypes';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment';

// TODO - initial values should come the data from LocalStorage or be fetched from an external database
const initialIncomes: IncomeData[] = [
  {
    id: uuidv4(),
    name: 'salary',
    value: 2000,
    date: moment('2023-07-02'),
  },
  {
    id: uuidv4(),
    name: 'lottery',
    value: 500,
    date: moment('2023-07-10'),
  },
  {
    id: uuidv4(),
    name: 'salary',
    value: 2000,
    date: moment('2023-07-03'),
  },
  {
    id: uuidv4(),
    name: 'lottery',
    value: 500,
    date: moment('2023-07-15'),
  },
];

const initialOutcomes: OutcomeData[] = [
  {
    id: uuidv4(),
    name: 'bread',
    value: 20.45,
    date: moment('2023-07-02'),
  },
  {
    id: uuidv4(),
    name: `Saturday's party`,
    value: 500,
    date: moment('2023-07-10'),
  },
  {
    id: uuidv4(),
    name: 'electricity bills',
    value: 140.56,
    date: moment('2023-07-03'),
  },
  {
    id: uuidv4(),
    name: 'hairdresser',
    value: 120.5,
    date: moment('2023-07-15'),
  },
];

export { initialIncomes, initialOutcomes };
