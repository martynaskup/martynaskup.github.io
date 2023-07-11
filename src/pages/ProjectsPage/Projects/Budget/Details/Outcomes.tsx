import { FC, useEffect, useState } from 'react';
import moment, { Moment } from 'moment/moment';
import { v4 as uuidv4 } from 'uuid';
import { Collapse } from 'antd';
import OutcomeList from './OutcomeList';

export type OutcomeData = {
  id: string;
  name: string;
  value: number;
  date: Moment;
};

const initialOutcomes: OutcomeData[] = [
  // TODO - initial values should come the data from LocalStorage or be fetched from an external database

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

  const handleNewOutcome = (outcome: OutcomeData) => {
    setOutcomeList((prevOutcomesList) => {
      const newOutcomeList = [...prevOutcomesList, outcome];
      return sortOutcomeList(newOutcomeList);
    });

    onValuesChange(outcome.value);
  };

  const handleOutcomeUpdate = (updatedOutcome: OutcomeData) => {
    setOutcomeList((prevOutcomeList) => {
      return prevOutcomeList.map((outcome) =>
        outcome.id === updatedOutcome.id ? updatedOutcome : outcome
      );
    });
    onValuesChange(updatedOutcome.value);
  };

  return (
    <>
      <Collapse defaultActiveKey={['1']} style={{ textAlign: 'left' }}>
        <Collapse.Panel
          header="Outcome items"
          key="1"
          // extra={<AddButtonAndModal onNewOutcome={handleNewOutcome} />}
        >
          <OutcomeList
            outcomeList={sortOutcomeList(outcomeList)}
            onOutcomeUpdate={handleOutcomeUpdate}
          />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

const sortOutcomeList = (list: OutcomeData[]) => {
  return list.sort((outcomeA, outcomeB) =>
    outcomeB.date.isBefore(outcomeA.date) ? 1 : -1
  );
};

export default Outcomes;
